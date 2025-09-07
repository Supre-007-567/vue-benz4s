<script setup>
import router from '@/router'
import { computed } from 'vue'
import { useCarStore } from '@/stores/car.js'
import { useUserStore } from '@/stores/user.js'
import { toastSuccess, toastDanger } from '@/utiles/toast.js'



// import ConfirmModal from '@/components/BsConfirm/BsConfirm.vue'
// import { useUserStore } from '@/stores/user';
// 接受仓库
const userStore = useUserStore()
const carStore = useCarStore()

// 所有车型页面中的 车辆盒子
const props = defineProps({
  carData: Object,
})

// 是否收藏
// 通过计算属性关联 store 中的 isCollect 状态
const isCollect = computed(() => {
  // 在 store 的 allCar 中找到当前车辆，返回它的 isCollect 值
  const currentCar = carStore.allCar.find((item) => item.id === props.carData.id)
  return currentCar.isCollect
})

// onMounted(() => {
//   isCollect.value = props.carData.isCollect
// })

const handleCollect = async (theId) => {
  if (!userStore.token) {
    toastDanger('请登录后再收藏车辆')
    router.push({
      path: '/login',
      query: { redirect: router.currentRoute.value.fullPath }, // 保存原路径
    })
    return
  }
  // console.log(theId)
  await carStore.fetchCollect(theId)
  toastSuccess('操作成功')
}
// console.log(isCollect)

// 处理购买
const goToBuy = (theId) => {
  // console.log(theId)
  router.push(`/cardetail?id=${theId}`)
}

const goToReservation = (carData) =>{
  router.push(`/reserve?id=${carData}`)
}
</script>

<template>
  <div class="car-card border rounded overflow-hidden shadow-sm hover-shadow">
    <div class="car-image overflow-hidden">
      <button :class="['btn-collection']" @click="handleCollect(props.carData.id)">
        <i :class="['bi', , isCollect ? 'bi-star-fill' : 'bi-star']"></i>
      </button>
      <img :src="carData.coverImage" :alt="carData.alt" class="w-100 car-img" />
    </div>
    <div class="p-3">
      <h3 class="car-name">{{ props.carData.name }}</h3>
      <p class="car-price">{{ carData.price }}</p>
      <div class="d-grid gap-2">
        <button @click="goToBuy(carData.id)" class="btn btn-dark btn-buy">立即购买</button>
        <button @click="goToReservation(carData)" class="btn btn-outline-dark btn-test">
          预约试驾
        </button>
      </div>
    </div>
    <!-- <ConfirmModal>

    </ConfirmModal> -->
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
  transition: transform 0.3s;
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
.car-image {
  position: relative;
}
.btn-collection {
  position: absolute;
  z-index: 100;
  right: 20px;
  top: 10px;
  background-color: transparent;
  border: 0;
  font-size: 25px;
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
