<script setup>
// 首页
import banner1 from '@/assets/images/Abanner01.png'
import banner2 from '@/assets/images/Bitem01.jpg'
import banner3 from '@/assets/images/Abanner04.png'
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
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="banner1" class="d-block w-100 h-100 object-cover" alt="汽车宣传图1" />
            <div class="carousel-caption d-none d-md-block">
              <p class="title1">要么最好</p>
              <p class="title2">要么一无所有</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="banner2" class="d-block w-100 h-100 object-cover" alt="汽车宣传图2" />
            <div class="carousel-caption d-none d-md-block">
              <p class="title1">引擎的轰鸣</p>
              <p class="title2">是格调的回响</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="banner3" class="d-block w-100 h-100 object-cover" alt="汽车宣传图3" />
            <div class="carousel-caption d-none d-md-block">
              <p class="title1">真正的尊</p>
              <p class="title2">何需靠“借”</p>
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
    <!-- <div class="content">
      <div>内容1</div>
      <div>内容2</div>
      <div>内容3</div>
    </div> -->
  </div>
</template>

<style scoped>
/* 轮播图容器高度 = 视口高度 - 导航栏高度(80px) */
.banner {
  height: calc(100vh - 80px);
  overflow: hidden;
}

/* 让轮播图占满容器高度 */
#carouselExampleCaptions {
  height: 100%;
}

.carousel-inner {
  height: 100%;
}

.carousel-item {
  height: 100%;
}

/* 确保图片保持比例并覆盖整个区域 */
.carousel-item img {
  object-fit: cover; /* 保持比例并覆盖容器 */
}

/* 轮播图文字样式优化 */
.carousel-caption {
  left: -25%;
  bottom: 30%;
  text-align: left;
  color: #f0f0f0;
}

.carousel-caption .title1 {
  font-size: 55px;
  font-weight: 700;
}

.carousel-caption .title2 {
  font-size: 40px;
  /* font-weight: 700; */
}

.carousel-caption h5 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.carousel-caption p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
