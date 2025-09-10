<script setup>
// 首页
import banner1 from '@/assets/images/Abanner05.jpg'
import banner2 from '@/assets/images/Abanner04.png'
import banner3 from '@/assets/images/Bitem01.jpg'
import banner4 from '@/assets/images/Abanner01.png'
// g63 图片
import g63Img1 from '@/assets/images/g63/001-g63.jpg'
import g63Img2 from '@/assets/images/g63/002-g63.jpg'
import g63Img3 from '@/assets/images/g63/003-g63.jpg'
import g63Img4 from '@/assets/images/g63/004-g63.jpg'
// 1990图片
import evoImg1 from '@/assets/images/1990/01-1990.jpeg'
import evoImg2 from '@/assets/images/1990/02-1990.webp'
import evoImg3 from '@/assets/images/1990/03-1990.webp'
import evoImg4 from '@/assets/images/1990/04-1990.webp'
// 引入组件
import Recommend from './Components/RecommendCar.vue'
import HotCart from './Components/HotCart.vue'
// 轮播图插件
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
// 配置轮播参数
const slides = [
  { id: 1, img: banner1 },
  { id: 2, img: banner2 },
  { id: 3, img: banner3 },
  { id: 4, img: banner4 },
  { id: 5, img: banner2 },
]
// 父传子数据
const propsData = [
  {
    hotId: 1,
    title: '年度热门车型',
    modelUrl: '/public/mdoel/004_g63_amg_red.glb',
    imgUrl1: g63Img1, // 直接用引入的变量
    imgUrl2: g63Img2,
    imgUrl3: g63Img3,
    imgUrl4: g63Img4,
    carName: 'Mercedes-Benz G63',
    desc1: '生而无畏，注定非凡',
    desc2: 'Mercedes-BenzG63，以刚毅的线条勾勒传奇，以澎湃的动力诠释自由。',
    desc3: 'AMG V8引擎的心跳，伴随低沉而浑厚的声浪，让每一次启程都充满力量。',
    desc4: '方正车身，彰显经典不朽；奢华内饰，尽显尊崇格调。',
  },
  {
    hotId: 2,
    title: '历史最佳车型',
    modelUrl: '/public/mdoel/005_1990 190 evo.glb',
    imgUrl1: evoImg1, // 直接用引入的变量
    imgUrl2: evoImg2,
    imgUrl3: evoImg3,
    imgUrl4: evoImg4,
    carName: 'Mercedes-Benz 190 Evo II',
    desc1: '赛道基因，经典传世',
    desc2: '以赛车化线条定格经典，凭硬核实力风靡全球。',
    desc3: '2.5L 直六引擎轰鸣，迸发强劲动力，当年热销身影至今仍是车迷珍藏记忆。',
    desc4: '宽体套件彰显独特，简约内饰藏赛道魂，经典设计让其销量与口碑双丰收。',
  },
]
</script>

<template>
  <div>
    <!-- 轮播图区域 -->
    <div class="banner">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <!-- 保留图片 h-100，确保填充父容器 -->
          <div class="carousel-item active">
            <img :src="banner1" class="d-block w-100 h-100 object-cover" alt="汽车宣传图1" />
            <div class="carousel-caption text-animate d-none d-xl-block">
              <p class="title1">何以奔驰</p>
              <p class="title2">惟有奔驰</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="banner2" class="d-block w-100 h-100 object-cover" alt="汽车宣传图2" />
            <div class="carousel-caption text-animate d-none d-xl-block">
              <p class="title1">真正的尊</p>
              <p class="title2">何需靠“借”</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="banner3" class="d-block w-100 h-100 object-cover" alt="汽车宣传图3" />
            <div class="carousel-caption text-animate d-none d-xl-block">
              <p class="title1">引擎的轰鸣</p>
              <p class="title2">是格调的回响</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="banner4" class="d-block w-100 h-100 object-cover" alt="汽车宣传图4" />
            <div class="carousel-caption text-animate d-none d-xl-block">
              <p class="title1">要么最好</p>
              <p class="title2">要么一无所有</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content container-inner">
      <!-- 推荐车型 -->
      <Recommend></Recommend>
      <!-- 热门车型 -->
      <HotCart v-for="item in propsData" :key="item.hotId" :propsData="item"></HotCart>
      <!-- 走马灯轮播 -->
      <Carousel
        class="three-carousel d-none d-xl-block"
        :items-to-show="3"
        :wrap-around="true"
        :autoplay="3000"
        :pause-autoplay-on-hover="true"
        :mouse-drag="true"
        :touch-drag="true"
        :speed="100"
        :center-mode="true"
        :snap-align="'center'"
      >
        <Slide v-for="slide in slides" :key="slide.id">
          <img
            :src="slide.img"
            alt=""
            style="width: 100%; transform: scale(0.9); transition: transform 0.3s"
            class="slide-img shadow-lg"
          />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
/* 1. 轮播图盒子基础样式：大屏保持「视口高度100% - 导航栏80px」 */
.banner {
  height: calc(100vh - 80px);
  overflow: hidden; /* 防图片溢出 */
}

/* 2.确保图片能继承盒子高度 */
#carouselExampleCaptions,
.carousel-inner,
.carousel-item {
  height: 100%;
}

.carousel-item img {
  width: 100%;
  height: 100% !important;
  object-fit: cover;
}

/* 4. 文字样式不变 */
.carousel-caption {
  left: 15%;
  bottom: 20%;
  text-align: left;
  color: #f0f0f0;
}
.carousel-caption .title1 {
  font-size: 50px;
  font-weight: 700;
}
.carousel-caption .title2 {
  font-size: 35px;
}

/* 文字动画 */
.text-animate {
  transition: all 0.6s ease-out;
}
.carousel-item:not(.active) .text-animate {
  opacity: 0; /* 透明隐藏 */
  transform: translateX(-40px); /* 向下位移20px*/
}

.carousel-item.active .text-animate {
  opacity: 1; /* 完全显示 */
  transform: translateY(0);
}

/* 响应式调整 轮播图盒子的高度 */
/* 超小屏（手机，<576px）：盒子高度设350px，图片自动继承 */
@media (max-width: 575px) {
  .banner {
    height: 350px !important;
  }
}

/* 小屏（平板竖屏，576px-767px） */
@media (min-width: 576px) and (max-width: 767px) {
  .banner {
    height: 450px !important;
  }
}

/* 中屏（平板横屏，768px-991px） */
@media (min-width: 768px) and (max-width: 991px) {
  .banner {
    height: 600px !important;
  }
}

/* 大屏（电脑，992px-1199px） */
@media (min-width: 992px) and (max-width: 1199px) {
  .banner {
    height: 750px !important;
  }
}

/* 超大屏（≥1200px）：保持原calc逻辑，确保100vh效果 */
@media (min-width: 1200px) {
  .banner {
    height: calc(100vh - 80px) !important;
  }
}

/* 内容 */
/* 热门车型 */

/* 中心轮播 */

.slide-img {
  width: 150px;
  height: 500px;
  object-fit: cover;
}

.three-carousel {
  margin-bottom: 70px;
}
</style>
