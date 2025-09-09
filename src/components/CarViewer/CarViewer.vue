<script setup>
import { onMounted, ref } from 'vue'
// 接收props
const props = defineProps({
  folder: String,
  // theId: Number,
})
// ('文件夹:', props.folder)
// console.log(props.theId)

onMounted(() => {
  window.scrollTo(0, 0)
})
// 34张图片
const frames = 34
const images = Array.from(
  { length: frames }, //创建空数组
  (_, i) =>
    new URL(`/src/assets/images/detail/${props.folder}/${10001 + i}.png`, import.meta.url).href,
)
// 当前图片下标
const currentIndex = ref(0)
// 是否拖拽
let isDragging = false
// 拖拽起点
let startX = 0

// pc端
const onMouseDown = (e) => {
  isDragging = true //开始拖拽
  startX = e.clientX //记录起点
}

const onMouseMove = (e) => {
  // 误触
  if (!isDragging) return
  // 拖拽x距离
  const delta = e.clientX - startX
  // 防抖
  if (Math.abs(delta) > 5) {
    // 判断方向
    const step = delta > 0 ? -1 : 1
    // 更新当前图片下标
    currentIndex.value = (currentIndex.value + step + frames) % frames
    // 重置起点
    startX = e.clientX
  }
}

const onMouseUp = () => {
  isDragging = false
}

// 移动端

const onTouchStart = (e) => {
  isDragging = true
  startX = e.touches[0].clientX
}

const onTouchMove = (e) => {
  if (!isDragging) return
  const delta = e.touches[0].clientX - startX
  if (Math.abs(delta) > 5) {
    const step = delta > 0 ? -1 : 1
    currentIndex.value = (currentIndex.value + step + frames) % frames
    startX = e.touches[0].clientX
  }
}

const onTouchEnd = () => {
  isDragging = false
}
</script>

<template>
  <div
    class="viewer-wrapper"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @mouseleave="onMouseUp"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <img :src="images[currentIndex]" style="width: 100%; height: 100%; object-fit: contain" />
    <div class="title-box">
      <h1 class="title alibabaFont">
        <slot name="title"></slot>
      </h1>
      <p class="lead text-muted"><slot name="desc"></slot></p>
    </div>

    <img src="/src/assets//images/detail/360.png" class="rotate" alt="360旋转" />
  </div>
</template>

<style scoped>
.viewer-wrapper {
  position: relative;
  width: 100%;
  height: 600px;
  margin: auto;
  user-select: none;
  background-image: url('/src/assets/images/detail/bg.webp');
  background-repeat: no-repeat;
  background-size: 100%;
  /* padding: 0; */
  cursor: ew-resize;
}
.title-box {
  color: #000;
  position: absolute;
  top: 48px;
  padding-left: 120px;
}
.rotate {
  width: 60px;
  height: 60px;
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, 0);
}
</style>
