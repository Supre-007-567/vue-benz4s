import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getAllCarApi,
  addCollectApi,
  addServiceApi,
  getServiceInfo,
  cancelServiceApi,
} from '@/api/car.js'
import { useUserStore } from '@/stores/user.js'
// import axios from 'axios'

export const useCarStore = defineStore('car', () => {
  // 所有车型
  const allCar = ref([])
  // 服务数据
  const currentUserServiceInfo = ref([])
  // 获取所有车型
  const fetchAllCar = async () => {
    const res = await getAllCarApi()
    console.log('carStore:', res)
    allCar.value = res.data.carData
  }
  // 处理收藏
  const fetchCollect = async (theId) => {
    await addCollectApi(theId)
    const result = allCar.value.find((item) => {
      return item.id === theId
    })
    result.isCollect = !result.isCollect
    // console.log(`收藏结果:${result.name}：${result.isCollect}`)
  }
  // 新增服务
  // 接收用户仓库，拿到当前用户名
  const userStore = useUserStore()
  const fetchAddService = async (obj) => {
    const res = await addServiceApi({ username: userStore.currentUserInfo.username, ...obj })
    console.log('增加数据服务：', res)
    // if (res.code === 0) {
    //   const newItem = {
    //     ...obj,
    //     id: Date.now(), // 简单唯一ID
    //     status: 'pending',
    //   }
    //   currentUserServiceInfo.value.push(newItem)
    // }
  }
  // 获取所有当前用户的服务数据
  const fetchGetServiceInfo = async () => {
    const res = await getServiceInfo(userStore.currentUserInfo.username)
    console.log('获取服务数据：', res.data.currentUserServiceInfo)
    currentUserServiceInfo.value = res.data.currentUserServiceInfo
  }
  // 取消服务
  const fetchCancleService = async (id) => {
    await cancelServiceApi(id)
    fetchGetServiceInfo()
  }

  return {
    allCar,
    fetchAllCar,
    fetchCollect,
    currentUserServiceInfo,
    fetchAddService,
    fetchGetServiceInfo,
    fetchCancleService,
  }
})
