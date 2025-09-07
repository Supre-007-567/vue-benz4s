import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi, registerApi } from '@/api/user.js'
import { returnCollectApi } from '@/api/car.js'
import { toastSuccess, toastDanger } from '@/utiles/toast.js'
import { useCarStore } from '@/stores/car.js'
import router from '@/router'

export const useUserStore = defineStore(
  'user',
  () => {
    const carStore = useCarStore()
    const usersInfo = ref([])
    const currentUserInfo = ref({})
    const token = ref('')
    // 登录
    const fetchLogin = async (payload) => {
      const res = await loginApi(payload)
      // console.log(res)
      if (res.code === 0) {
        currentUserInfo.value = res.data.user
        token.value = res.data.token
        // router.push('/')
        const redirect = router.currentRoute.value.query.redirect || '/'
        router.push(redirect) // 登录后跳转回去
        // 测试
        // console.log('userStore:', res.message)
        // console.log(res);

        // console.log('userStore', currentUserInfo.value.name)

        return toastSuccess(res.message + ` ${currentUserInfo.value.username} 你好！`)
      } else {
        return toastDanger(res.message)
      }
    }
    // 注册
    const fetchRegister = async (payload) => {
      const res = await registerApi(payload)
      console.log(res)
      if (res.code === 0) {
        toastSuccess(res.message)
      } else {
        return toastDanger(res.message)
      }
      usersInfo.value.push(res.data)
    }
    // 退出登录方法
    const logout = () => {
      token.value = ''
      currentUserInfo.value = null
      // 清空本地存储
      localStorage.removeItem('user')
      // 清空收藏夹
      returnCollectApi()
      carStore.allCar.forEach((item) => (item.isCollect = false))
    }
    // 买车扣钱
    const buyCar = (price) => {
      currentUserInfo.value.money = currentUserInfo.value.money - price
      console.log('store计算结果', currentUserInfo.value.money)
      // console.log('store:账户余额', currentUserInfo.value.money)
    }
    return { usersInfo, currentUserInfo, fetchLogin, fetchRegister, token, logout, buyCar }
  },
  {
    persist: {
      key: 'my-user-store',
      storage: localStorage,
      pick: ['token', 'currentUserInfo'],
    },
  },
)
