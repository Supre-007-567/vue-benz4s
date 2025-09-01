<script setup>
const props = defineProps({
  propsData: Object,
})
</script>
<template>
  <div class="rec-box">
    <div class="rec-pic">
      <img :src="props.propsData.imgUrl" alt="" />
    </div>
    <div class="title-box text-light">
      <div class="title1">{{ props.propsData.title1 }}</div>
      <div class="title2">{{ props.propsData.title2 }}</div>
      <div class="btn-box">
        <button class="btn learnMore-btn btn-primary">了解更多</button>
      </div>
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
/* 推荐车型-小盒子 */
.rec-box {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: pink;
}
.rec-box .rec-pic {
  overflow: hidden;
}
.rec-box .rec-pic img {
  width: 100%;
  height: 380px;
  object-fit: cover;
}
.rec-box .title-box {
  /* 标题盒子渐变 */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.95) 100%);
  padding: 30px 20px;
  font-style: italic;
  position: relative;
  z-index: 10;
}

.rec-box .title-box .title1 {
  font-size: 25px;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.rec-box .title-box .title2 {
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.rec-box .title-box .btn-box {
  padding-top: 10px;
  display: flex;
  gap: 15px;
}
.rec-box .title-box .btn-box .learnMore-btn {
  border-radius: 0;
}
</style>
