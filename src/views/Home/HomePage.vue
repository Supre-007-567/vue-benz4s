<script setup>
// 首页
import banner1 from '@/assets/images/Abanner04.png'
import banner2 from '@/assets/images/Abanner05.jpg'
import banner3 from '@/assets/images/Bitem01.jpg'
import banner4 from '@/assets/images/Abanner01.png'
// import G63Model from '@/assets/3DModel/004_g63_red.glb'
import g63_01 from '@/assets/images/g63/001-g63.jpg'
import g63_02 from '@/assets/images/g63/002-g63.jpg'
import g63_03 from '@/assets/images/g63/003-g63.jpg'
import g63_04 from '@/assets/images/g63/004-g63.jpg'
import Recommend from './Components/RecommendCar.vue'
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
    <!-- 内容区域 -->
    <div class="content container-inner">
      <!-- 推荐车型 -->
      <Recommend></Recommend>
      <!-- 热门车型 -->
      <div class="hot alibabaFont">
        <!-- 标题 -->
        <h1 class="text-left content-title">年度热门车型</h1>
        <div class="row g-4">
          <!-- 第一列：3D模型 -->
          <div
            class="col-xl-5 col-lg-6 col-md-6 col-sm-6 d-none d-sm-block card rounded-0 border-0"
          >
            <div class="h-100 model-container">
              <model-viewer
                src="/public/mdoel/004_g63_amg_red.glb"
                alt="奔驰 G63"
                camera-controls
                ar
                autocorrect
                class="w-100"
                camera-orbit="30deg 70deg 7m"
              ></model-viewer>
            </div>
          </div>

          <!-- 第二列：图片（上下两张） -->
          <div class="col-xl-2 col-lg-6 col-md-6 col-sm-6 d-flex flex-column gap-4">
            <div
              class="card rounded-0 border-0 shadow-sm flex-fill overflow-hidden-relative overflow-hidden"
            >
              <img
                :src="g63_01"
                class="card-img-top object-fit-cover w-100 h-100"
                alt="G63 正面图"
              />
            </div>
            <div
              class="card rounded-0 border-0 shadow-sm flex-fill overflow-hidden-relative overflow-hidden"
            >
              <img
                :src="g63_02"
                class="card-img-top object-fit-cover w-100 h-100"
                alt="G63 内饰图"
              />
            </div>
          </div>

          <!-- 第三列：图片（上下两张） -->
          <div class="col-xl-2 col-lg-6 col-md-6 col-sm-6 d-flex flex-column gap-4">
            <div
              class="card rounded-0 border-0 shadow-sm flex-fill overflow-hidden-relative overflow-hidden"
            >
              <img
                :src="g63_03"
                class="card-img-top object-fit-cover w-100 h-100"
                alt="G63 车尾图"
              />
            </div>
            <div
              class="card rounded-0 shadow-sm flex-fill overflow-hidden-relative overflow-hidden"
            >
              <img
                :src="g63_04"
                class="card-img-top object-fit-cover w-100 h-100"
                alt="G63 越野图"
              />
            </div>
          </div>

          <!-- 第四列：介绍与按钮 -->
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div
              class="card text-hot rounded-0 border-0 h-100 shadow-lg d-flex flex-column justify-content-between p-3"
            >
              <div>
                <h5 class="fw-bold">Mercedes-Benz G63</h5>
                <p class="text-muted">
                  生而无畏，注定非凡。<br />Mercedes-Benz
                  G63，以刚毅的线条勾勒传奇，以澎湃的动力诠释自由。<br />
                  AMG V8引擎的心跳，伴随低沉而浑厚的声浪，让每一次启程都充满力量。<br />方正车身，彰显经典不朽；奢华内饰，尽显尊崇格调。<br />
                  <!-- 它不仅是一辆
                    SUV，更是征服与优雅的象征。无论都市街头，还是旷野山川，G63
                    都将以王者之姿，陪伴你征服前路，书写属于你的荣耀与传奇。 -->
                </p>
              </div>
              <div class="mt-3">
                <a href="#" class="btn btn-dark w-100">了解更多</a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
/* 模型 */
model-viewer {
  height: 300px;
}
.model-container {
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
/* 保持原过渡动画 */
.content img {
  transition: all 0.3s;
}
.content img:hover {
  transform: scale(1.05);
}
</style>
