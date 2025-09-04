<script setup>
import { ref } from 'vue'

const frames = 34
const images = Array.from(
  { length: frames },
  (_, i) =>
    new URL(
      `/src/assets/images/detail/EQA_250+_Progressive_Mercedes-Benz/${10001 + i}.png`,
      import.meta.url,
    ).href,
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
    class="viewer-wrapper .container-inner"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @mouseleave="onMouseUp"
  >
    <img :src="images[currentIndex]" style="width: 100%; height: 100%; object-fit: contain" />
  </div>
</template>

<style>
.viewer-wrapper {
  width: 800px;
  height: 600px;
  margin: auto;
  user-select: none;
}
</style>
