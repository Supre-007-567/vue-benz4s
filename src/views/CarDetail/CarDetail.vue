<script setup>
import { ref } from 'vue'
import CarViewer from '@/components/CarViewer/CarViewer.vue'
import { useCarStore } from '@/stores/car.js'
import { useRoute } from 'vue-router'
// 接收仓库
const carStore = useCarStore()
console.log(carStore.allCar)

// 接收参数
const route = useRoute()
// console.log('theId', route.query.id)
const theId = +route.query.id

// 定义文件夹变量
const folder = ref('')
if (theId === 1) {
  folder.value = 'CLA_180_Progressive_Coupe'
} else if (theId === 2) {
  folder.value = 'E_200_AVANTGARDE_Mercedes-Benz'
} else {
  folder.value = 'EQA_250+_Progressive_Mercedes-Benz'
}

// 查找汽车 - 做后续渲染
const carInfo = carStore.allCar.find((item) => item.id === theId)
</script>
<template>
  <div class="detali-container">
    <CarViewer :folder="folder">
      <template #title>
        {{ carInfo.name }}
      </template>
    </CarViewer>
    <!-- 测试 -->
    <p>{{ carInfo }}</p>
  </div>
</template>
