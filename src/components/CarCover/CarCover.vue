<script setup>
import router from '@/router'

// 所有车型页面中的 车辆盒子
const props = defineProps({
  carData: Object,
})
// console.log('carcover:', props.carData)

const goToBuy = (theId) => {
  // console.log(theId)
  router.push(`/cardetail?id=${theId}`)
}
</script>

<template>
  <div class="car-card border rounded overflow-hidden shadow-sm hover-shadow">
    <div class="car-image overflow-hidden">
      <img :src="carData.coverImage" :alt="carData.alt" class="w-100 car-img" />
    </div>
    <div class="p-3">
      <h3 class="car-name">{{ props.carData.name }}</h3>
      <p class="car-price">{{ carData.price }}</p>
      <div class="d-grid gap-2">
        <button @click="goToBuy(carData.id)" class="btn btn-dark btn-buy">立即购买</button>
        <button @click="goToReservation(carData.id)" class="btn btn-outline-dark btn-test">
          预约试驾
        </button>
      </div>
    </div>
  </div>
  <!-- 测试 -->
  <!-- <img src="/src/assets/images/detail/EQA_250+_Progressive_Mercedes-Benz/10003.png" alt=""> -->
</template>

<style scoped>
/* 车辆卡片 */
.car-card {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  transition: box-shadow 0.3s;
}
.hover-shadow:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
.car-img {
  transition: transform 0.5s;
}
.car-img:hover {
  transform: scale(1.05);
}
.car-name {
  font-size: 1.1rem;
  font-weight: 600;
}
.car-price {
  color: #6c757d;
  margin-bottom: 0.75rem;
}
.car-image img {
  width: 240px;
  height: 228px;
  object-fit: cover;
}

/* 按钮风格 */
.btn-buy {
  background-color: #000;
  color: #fff;
}
.btn-buy:hover {
  background-color: #212529;
}
.btn-test {
  color: #000;
  border-color: #000;
}
.btn-test:hover {
  background-color: #f8f9fa;
}

.list-unstyled li {
  border-bottom: 1px solid #ccc;
}
</style>
