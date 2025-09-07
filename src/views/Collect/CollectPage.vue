<script setup>
import { useCarStore } from '@/stores/car.js'
import { ref } from 'vue'
import TitleBox from '@/components/TitleBox/TitleBox.vue'
const carStore = useCarStore()
// console.log(carStore.allCar)
const isEmpty = ref(true)
const collectData = ref([])

const getCollectData = async () => {
  await carStore.fetchAllCar()
  collectData.value = carStore.allCar.filter((item) => item.isCollect === true)
  console.log('collect:', collectData.value)
  console.log(collectData.value.length)

  if (collectData.value.length > 0) {
    isEmpty.value = false
  }
}
getCollectData()
</script>

<template>
  <TitleBox
    title="我的Mercedes典藏"
    desc="为你心动的每一款座驾留驻身边，打造你的私人车库"
    titleImage="/src/assets/images/I-05.png"
  />
  <div
    v-if="isEmpty"
    class="alert empty-box alert-secondary border-0 text-center py-5"
    role="alert"
  >
    <div class="empty-text">
      暂无数据，快去<router-link to="/all"> 探索你的 Mercedes 吧</router-link> 🚗
    </div>
  </div>
  <!-- <div v-if="isEmpty" class="empty"></div> -->

  <div v-else class="content container-inner mb-5">
    <!-- 车辆盒子 -->
    <div class="car-container" v-for="item in collectData" :key="item.id">
      <!-- 图片区域 -->
      <div class="pic">
        <img :src="item.coverImage" alt="Mercedes Car" />
        <!-- 删除按钮放在图片右上角 -->
        <button class="delete-btn" title="取消收藏">×</button>
      </div>

      <!-- 车辆信息 -->
      <div class="car-info">
        <h3 class="car-name">{{ item.name }}</h3>
        <p class="car-desc">动感优雅，科技与豪华的完美平衡</p>
      </div>

      <!-- 操作按钮 -->
      <div class="btn-box">
        <button class="btn-buy">立即购买</button>
        <button class="btn-drive">预约试驾</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.empty-box {
  margin: 0;
  background-color: #fff;
  width: 100%;
  height: 100vw;
}

.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 25px;
}

.car-container {
  position: relative;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 16px;
  transition: transform 0.3s ease;
}

.car-container:hover {
  transform: translateY(-4px);
}

.pic {
  position: relative;
  text-align: center;
  margin-bottom: 16px;
}

.pic img {
  max-width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.delete-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.delete-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.car-info {
  margin-bottom: 16px;
  text-align: center;
}

.car-name {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

.car-desc {
  font-size: 15px;
  color: #666;
  margin-top: 4px;
}

.btn-box {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn-box button {
  flex: 1;
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-buy {
  background: #000;
  color: #fff;
}

.btn-buy:hover {
  background: #111;
}

.btn-drive {
  background: #f5f5f5;
  color: #000;
}

.btn-drive:hover {
  background: #e6e6e6;
}

/* 响应式适配 */
@media (max-width: 1024px) {
  .pic img {
    max-width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
}

@media (max-width: 992px) {
  .content {
    /* display: grid; */
    grid-template-columns: repeat(2, 1fr);
    /* gap: 40px 25px; */
  }
  .delete-btn {
    font-size: 13px;
  }
  .car-name {
    font-size: 17px;
  }
  .car-desc {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .content {
    /* display: grid; */
    grid-template-columns: repeat(2, 1fr);
    /* gap: 40px 25px; */
  }
  .btn-box button {
    padding: 7px 10px;
  }
}

@media (max-width: 576px) {
  .content {
    /* display: grid; */
    grid-template-columns: 1fr;
    /* gap: 40px 25px; */
  }
}
</style>
