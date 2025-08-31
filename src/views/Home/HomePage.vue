<script setup>
// 首页
import banner1 from '@/assets/images/Abanner04.png'
import banner2 from '@/assets/images/Abanner05.jpg'
import banner3 from '@/assets/images/Bitem01.jpg'
import banner4 from '@/assets/images/Abanner01.png'

// const bannerData = [
//   {
//     banner1: '@/assets/images/Abanner04.png',
//     title1: '真正的尊',
//     title2: '何需靠“借”',
//   },
//   {
//     banner1: '@/assets/images/Abanner05.jpg',
//     title1: '何以奔驰',
//     title2: '惟有奔驰',
//   },
//   {
//     banner1: '@/assets/images/Bitem01.jpg',
//     title1: '引擎的轰鸣',
//     title2: '是格调的回响',
//   },
//   {
//     banner1: '@/assets/images/Abanner04.png',
//     title1: '要么最好',
//     title2: '要么一无所有',
//   },
// ]
</script>

<template>
  <div>
    <!-- 轮播图区域：.banner 是核心调整对象 -->
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
              <p class="title1">真正的尊</p>
              <p class="title2">何需靠“借”</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="banner2" class="d-block w-100 h-100 object-cover" alt="汽车宣传图2" />
            <div class="carousel-caption text-animate d-none d-xl-block">
              <p class="title1">何以奔驰</p>
              <p class="title2">惟有奔驰</p>
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

    <div class="content container-inner">
      <div>内容1</div>
      <div>内容2</div>
      <div>内容3</div>
    </div>
  </div>
</template>

<style scoped>
/* 1. 轮播图盒子基础样式：大屏保持「视口高度100% - 导航栏80px」 */
.banner {
  height: calc(100vh - 80px); /* 大屏核心：导航栏+轮播图=100vh */
  overflow: hidden; /* 防止图片溢出 */
}

/* 2. 轮播图内部层级：全部100%高度，确保图片能继承盒子高度 */
#carouselExampleCaptions,
.carousel-inner,
.carousel-item {
  height: 100%; /* 关键：让所有父容器都和.banner同高 */
}

/* 3. 图片样式：保留h-100和object-fit，确保填充且不变形 */
.carousel-item img {
  width: 100%;
  height: 100% !important; /* 强制继承父容器高度，优先级拉满 */
  object-fit: cover; /* 核心：按比例填充，裁剪多余部分，不拉伸 */
}

/* 4. 文字样式保持不变 */
.carousel-caption {
  left: 15%; /* 修正原-10%的溢出问题 */
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
/* 给文字容器加过渡，控制动画时长和曲线 */
.text-animate {
  transition: all 0.6s ease-out; /* 0.6秒平滑过渡，自然不突兀 */
}
/* 未激活的轮播项：文字隐藏（透明+向下位移） */
.carousel-item:not(.active) .text-animate {
  opacity: 0; /* 透明隐藏 */
  transform: translateX(-40px); /* 向下位移20px，模拟“未弹出”状态 */
}
/* 激活的轮播项：文字显示（不透明+复位） */
.carousel-item.active .text-animate {
  opacity: 1; /* 完全显示 */
  transform: translateY(0); /* 位移复位，弹入到正常位置 */
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
</style>
