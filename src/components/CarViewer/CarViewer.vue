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

const frames = 34
const images = Array.from(
  { length: frames },
  (_, i) =>
    new URL(`/src/assets/images/detail/${props.folder}/${10001 + i}.png`, import.meta.url).href,
)

const currentIndex = ref(0)
let isDragging = false
let startX = 0

const onMouseDown = (e) => {
  isDragging = true
  startX = e.clientX
}

const onMouseMove = (e) => {
  if (!isDragging) return
  const delta = e.clientX - startX
  if (Math.abs(delta) > 5) {
    const step = delta > 0 ? -1 : 1
    currentIndex.value = (currentIndex.value + step + frames) % frames
    startX = e.clientX
  }
}

const onMouseUp = () => {
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
  /* left: 20%; */
  /* transform: translate(-50%, -50%); */
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
