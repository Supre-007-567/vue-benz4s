<script setup>
import RecBox from './RecommendBox.vue'
const propsData = [
  {
    carId: 1,
    title1: '奔驰 E260 优雅驾驭随行，智享豪华新境',
    title2: '劲擎动力兼舒适，格调出行每一程',
    imgUrl: '/src/assets/images/recommend/02-rec.avif',
  },
  {
    carId: 2,
    title1: '奔驰 CLE260 轿跑 优雅溜背邂逅强芯，驾驭快意征途',
    title2: '动感无边框车门开合间，奔驰 CLE260 轿跑燃擎启程',
    imgUrl: '/src/assets/images/recommend/03-rec.avif',
  },
  {
    carId: 3,
    title1: '奔驰 EQE 弓形车身破风，超续航畅享无忧旅程',
    title2: '智能数字大灯闪耀，奔驰 EQE 唤醒驾乘每寸感知',
    imgUrl: '/src/assets/images/recommend/04-rec.webp',
  },
  {
    carId: 4,
    title1: '奔驰 E260 优雅驾驭随行，智享豪华新境',
    title2: '劲擎动力兼舒适，格调出行每一程',
    imgUrl: '/src/assets/images/recommend/05-rec.avif',
  },
]
</script>

<template>
  <!-- 推荐车型 -->
  <div class="recommend alibabaFont" id="recommend-section">
    <h1 class="content-title alibabaFont">推荐车型</h1>
    <div class="rec-grid-container">
      <div class="rec-box-big">
        <div class="rec-pic">
          <img src="../../../assets/images/recommend/01-rec.webp" alt="" />
        </div>
        <!-- grid布局: 共五个盒子 三列两行 第一行 一大一小 -->
        <!-- 大图 占两列 -->
        <div class="title-box text-light">
          <div class="title1">奔驰 C180 优雅流线承经典，智驾随行悦日常</div>
          <div class="title2">从容掌控每程路，绘就格调新篇</div>
          <div class="btn-box">
            <button class="btn buy-btn btn-primary">立即购买</button>
            <button class="btn btn-secondary reserve-btn">预约试驾</button>
          </div>
        </div>
      </div>
      <!-- 第一列 -->
      <RecBox v-for="item in propsData" :propsData="item" :key="item.carId"></RecBox>
    </div>
  </div>
</template>

<style scoped>
.rec-pic img {
  transition: all 0.3s;
}

.rec-pic img:hover {
  transform: scale(1.05);
}
/* 推荐车型 */
.rec-grid-container {
  display: grid;
  /* 三列两行 */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
}
/* 大盒子 */
.rec-box-big {
  overflow: hidden;
  background-image: url('../../../assets/images/recommend/01-rec-bg.webp');
  /* 独自占两列 */
  grid-column: 1/3;
  grid-row: 1/2;
  position: relative;
}
.rec-box-big .rec-pic img {
  width: 859px;
  height: 380px;
  object-fit: cover;
}
.rec-box-big .title-box {
  /* 标题盒子渐变 */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.95) 100%);
  padding: 30px 20px;
  font-style: italic;
  position: relative;
  z-index: 10;
}
.rec-box-big .title-box .title1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 25px;
  font-weight: normal;
}
.rec-box-big .title-box .title2 {
  font-size: 15px;
}
.rec-box-big .title-box .btn-box {
  padding-top: 10px;
  display: flex;
  gap: 15px;
}
.rec-box-big .title-box .buy-btn {
  border-radius: 0;
}
.rec-box-big .title-box .reserve-btn {
  border-radius: 0;
  background-color: rgba(255, 255, 255, 0.1);
}

/* gird响应式 */
/* 小于1200px时 */
@media (max-width: 1200px) {
  .rec-grid-container {
    grid-template-columns: 1fr 1fr; /* 屏幕小于1200px时，改为两列 */
    grid-template-rows: 1fr 1fr 1fr; /* 改为三行 */
  }
  .rec-box-big {
    grid-column: 1/3; /* 大盒子仍占两列 */
  }
}
/* 小于772时 */
@media (max-width: 768px) {
  .rec-grid-container {
    grid-template-columns: 1fr; /* 屏幕小于768px时，改为一列 */
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr; /* 五行 */
  }
  .rec-box-big {
    grid-column: 1/2; /* 大盒子只能占一列*/
  }
  /* ::v-deep 深度控制子组件样式 */
  ::v-deep .rec-box .rec-pic img,
  .rec-box-big .rec-pic img {
    height: 230px;
    width: 100%;
  }
  .rec-box-big .title-box .title1 {
    font-size: 22px;
  }
  .rec-box-big .title-box .title2 {
    font-size: 13px;
  }
}
</style>
