import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllCarApi, addCollectApi } from '@/api/car.js'
// import axios from 'axios'

export const useCarStore = defineStore('car', () => {
  // 所有车型
  const allCar = ref([])
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
    console.log(`收藏结果:${result.name}：${result.isCollect}`)
  }

  return { allCar, fetchAllCar, fetchCollect }
})
