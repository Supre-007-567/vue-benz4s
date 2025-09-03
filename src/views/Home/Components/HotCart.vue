<script setup>
const props = defineProps({
  propsData: Object,
})
</script>
<template>
  <!-- 热门车型 -->
  <div class="hot alibabaFont">
    <!-- 标题 -->
    <h1 class="text-left content-title">{{ props.propsData.title }}</h1>
    <div class="row g-4">
      <!-- 第一列：3D模型 -->
      <div class="col-xl-5 col-lg-6 col-md-6 col-sm-6 d-none d-sm-block card rounded-0 border-0">
        <div class="h-100 model-container">
          <model-viewer
            :src="props.propsData.modelUrl"
            alt="奔驰 G70"
            camera-controls
            ar
            autocorrect
            class="w-100"
            camera-orbit="30deg 75deg 7m"
            environment-image="neutral"
            shadow-intensity="1"
            disable-zoom
          ></model-viewer>
          <div class="tag">
            {{ props.propsData.carName }}
          </div>
        </div>
      </div>

      <!-- 第二列：图片（上下两张） -->
      <div class="col-xl-2 col-lg-6 col-md-6 col-sm-6 d-flex flex-column gap-4">
        <div
          class="card rounded-0 border-0 shadow-sm flex-fill overflow-hidden-relative overflow-hidden"
        >
          <img
            :src="props.propsData.imgUrl1"
            class="card-img-top object-fit-cover w-100 h-100"
            alt="G63 123 正面图"
          />
        </div>
        <div
          class="card rounded-0 border-0 shadow-sm flex-fill overflow-hidden-relative overflow-hidden"
        >
          <img
            :src="props.propsData.imgUrl2"
            class="card-img-top object-fit-cover w-100 h-100"
            alt="G63 修改 of 郭 内饰图"
          />
        </div>
      </div>

      <!-- 第三列：图片（上下两张） -->
      <div class="col-xl-2 col-lg-6 col-md-6 col-sm-6 d-flex flex-column gap-4">
        <div
          class="card rounded-0 border-0 shadow-sm flex-fill overflow-hidden-relative overflow-hidden"
        >
          <img
            :src="props.propsData.imgUrl3"
            class="card-img-top object-fit-cover w-100 h-100"
            alt="G63 车尾图"
          />
        </div>
        <div class="card rounded-0 shadow-sm flex-fill overflow-hidden-relative overflow-hidden">
          <img
            :src="props.propsData.imgUrl4"
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
            <h5 class="fw-bold">{{ props.propsData.carName }}</h5>
            <p class="text-muted">
              {{ props.propsData.desc1 }}<br />{{ props.propsData.desc2 }}<br />
              {{ props.propsData.desc3 }}<br />{{ props.propsData.desc4 }}<br />
            </p>
          </div>
          <div class="mt-3">
            <a href="#" class="btn btn-dark w-100">了解更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 内容 */
/* 热门车型 */
/* 模型 */
model-viewer {
  height: 300px;
}
.tag {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #000;
  color: #f1f1f1;
  padding: 10px;
}
.model-container {
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
}
/* 保持原过渡动画 */
.content img {
  transition: all 0.3s;
}
.content img:hover {
  transform: scale(1.05);
}
</style>
