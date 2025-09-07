<script setup>
const props = defineProps({
  title: String,
  desc: String,
  titleImage: String,
})
</script>

<template>
  <div class="page-header py-4 mb-4 bg-white border-bottom">
    <div class="container title-box">
      <div class="text-box">
        <h1 class="mb-3 text-4xl font-bold text-black uppercase tracking-wider alibabaFont">
          {{ props.title }}
          <!-- 探索你的Mercedes -->
        </h1>
        <p class="lead text-muted">
          {{ props.desc }}
          <!-- 奢华、运动和性能的完美融合：探索我们的最新车型 -->
        </p>
      </div>
      <div class="pic">
        <img :src="titleImage" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header h1 {
  letter-spacing: 1px;
}
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-box .pic img {
  width: 300px;
  height: 140px;
  object-fit: cover;
  border-radius: 2px;
}
/* 响应式适配 */
@media (max-width: 768px) {
  .title-box {
    flex-direction: column;
    text-align: center;
  }
}
</style>
