import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllCarApi } from '@/api/car.js'

export const useCarStore = defineStore('car', () => {
  // 所有车型
  const allCar = ref([])
  // 获取所有车型
  const fetchAllCar = async () => {
    const res = await getAllCarApi()
    console.log('carStore:', res)
    allCar.value = res.data.carData
  }

  return { allCar, fetchAllCar }
})
