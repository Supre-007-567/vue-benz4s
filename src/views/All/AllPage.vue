<script setup>
// import CarViewer from '@/components/CarViewer/CarViewer.vue'
// import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import CarCover from '@/components/CarCover/CarCover.vue'
import { useCarStore } from '@/stores/car.js'
// 接收仓库
const carStore = useCarStore()
// 获取车辆数据
carStore.fetchAllCar()
// getAllCar()
</script>

<template>
  <!-- <CarViewer /> -->
  <div class="all-car-container bg-white min-vh-100">
    <div class="container py-5">
      <h1 class="text-4xl font-bold text-black mb-5 uppercase tracking-wider">全部车型</h1>

      <div class="row d-flex justify-content-between">
        <!-- 侧边栏 -->
        <div class="col-md-2 mb-4">
          <div class="sidebar top-4 bg-white">
            <ul class="list-unstyled shadow-sm">
              <li><a href="#sedan" class="sidebar-link">轿车</a></li>
              <li><a href="#suv" class="sidebar-link">SUV</a></li>
              <li><a href="#amg" class="sidebar-link">AMG</a></li>
              <li><a href="#amg" class="sidebar-link">迈巴赫</a></li>
              <li><a href="#amg" class="sidebar-link">敞篷</a></li>
              <li><a href="#amg" class="sidebar-link">轿跑</a></li>
              <li><a href="#amg" class="sidebar-link">A级</a></li>
              <li><a href="#amg" class="sidebar-link">B级</a></li>
            </ul>
          </div>
        </div>

        <!-- 内容区 -->
        <!-- 轿车分类 -->
        <div class="col-md-9">
          <section id="sedan" class="mb-5">
            <h2 class="section-title">轿车系列</h2>
            <div class="row g-4">
              <div
                v-for="car in carStore.allCar.filter((c) => c.category === 'sedan')"
                :key="car.id"
                class="col-12 col-md-6 col-lg-4"
              >
                <CarCover :carData="car"></CarCover>
              </div>
            </div>
          </section>
          <!-- SUV分类 -->
          <section id="suv" class="mb-5">
            <h2 class="section-title">SUV系列</h2>
            <div class="row g-4">
              <div
                v-for="car in carStore.allCar.filter((c) => c.category === 'suv')"
                :key="car.id"
                class="col-12 col-md-6 col-lg-4"
              >
                <CarCover :carData="car"></CarCover>
              </div>
            </div>
          </section>
          <!-- AMG分类 -->
          <section id="amg">
            <h2 class="section-title">AMG系列</h2>
            <div class="row g-4">
              <div
                v-for="car in carStore.allCar.filter((c) => c.category === 'amg')"
                :key="car.id"
                class="col-12 col-md-6 col-lg-4"
              >
                <CarCover :carData="car"></CarCover>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- 测试 -->
</template>

<style scoped>
/* 侧边栏样式 */
.sidebar {
  position: sticky;
  top: 100px;
  background: #fff;
  border-color: #e5e5e5;
}
.sidebar-link {
  display: block;
  padding: 0.75rem 1.25rem;
  color: #000;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s;
}
.sidebar-link:hover {
  background: #f8f9fa;
}

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

/* 锚点滚动平滑 */
html {
  scroll-behavior: smooth;
}
</style>
