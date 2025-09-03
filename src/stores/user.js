import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi, registerApi } from '@/api/user.js'
import { toastSuccess, toastDanger } from '@/utiles/toast.js'
import router from '@/router'

export const useUserStore = defineStore(
  'user',
  () => {
    const usersInfo = ref([])
    const currentUserInfo = ref({})
    const token = ref('')
    // 登录
    const fetchLogin = async (payload) => {
      const res = await loginApi(payload)
      console.log(res)
      if (res.code === 0) {
        currentUserInfo.value = res.data.user
        token.value = res.data.token
        console.log('ook')
        router.push('/')
        console.log('ok')
        return toastSuccess(res.message)
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
      // 同时清空持久化存储
      localStorage.removeItem('user')
    }
    return { usersInfo, currentUserInfo, fetchLogin, fetchRegister, token, logout }
  },
  {
    persist: {
      key: 'my-user-store', // 自定义 key
      storage: localStorage, // 可选，默认 localStorage
      pick: ['token', 'currentUserInfo'],
    },
  },
)
