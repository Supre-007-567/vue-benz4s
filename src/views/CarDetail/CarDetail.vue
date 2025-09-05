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
    <div class="container-inner">
      <div class="shadow-lg row price-box py-4 px-3">
        <div class="col-12 col-md-6 col-lg-6">
          <div class="price">
            <div class="real">
              <span class="type">官方指导价</span>
              <span class="money"
                >{{ carInfo.price }} RMB <i class="bi bi-stripe iconFont"></i
              ></span>
            </div>
            <div class="fenqi">
              <span class="type">分期支付</span>
              <span class="money">36期 每期 5000 RMB <i class="bi bi-stripe iconFont"></i></span>
            </div>
          </div>
        </div>
        <div class="btn-box col-12 col-md-6 col-lg-6 d-flex flex-row-reverse gap-3">
          <button class="btn btn btn-outline-secondary rounded-0 px-5 fw-bold">预约试驾</button>
          <button class="btn btn btn-outline-primary rounded-0 px-5 fw-bold">在线购买</button>
        </div>
      </div>
    </div>
    <!-- <p>{{ carInfo }}</p> -->
  </div>
</template>

<style scoped>
.price-box {
  display: flex;
  justify-content: space-between;
}
.price-box .price {
  display: flex;
  gap: 100px;
  /* flex-direction: column; */
}
.price-box .price .real,
.price-box .price .fenqi {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.price-box .price .type {
  font-size: 16px;
  color: #4f4f4f;
}

.price-box .price .money {
  font-size: 18px;
  font-weight: 700;
  color: #333333;
}

.iconFont {
  font-size: 12px;
}
</style>
