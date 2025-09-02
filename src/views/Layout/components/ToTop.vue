<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 控制返回顶部按钮显示状态
const showToTop = ref(false)

// 监听滚动事件
const handleScroll = () => {
  // 当滚动距离超过300px时显示按钮
  showToTop.value = window.scrollY > 300
}

// 回到顶部功能
const scrollToTop = () => {
  // 平滑滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// 挂载时添加滚动监听
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 卸载时移除滚动监听，防止内存泄漏
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- 返回顶部按钮 -->
  <div class="toTop" @click="scrollToTop" v-if="showToTop">
    <span class="icon-arrow-up"></span>
  </div>
</template>

<style scoped>
.toTop {
  /* 固定在右下角 */
  position: fixed;
  right: 30px;
  bottom: 30px;

  /* 按钮样式 */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #424649;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  /* 交互效果 */
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  /* 初始状态不可见 */
  opacity: 0;
  transform: translateY(20px);
}

/* 显示时的动画 */
.toTop:not([v-if='false']) {
  opacity: 1;
  transform: translateY(0);
}

/* 悬停效果 */
.toTop:hover {
  background-color: #1c2220;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* 箭头图标样式 */
.icon-arrow-up::before {
  content: '↑';
}

@media (max-width: 1200px) {
  .toTop {
    width: 40px;
    height: 40px;
    font-size: 18px;
    right: 15px;
    bottom: 15px;
  }
}
</style>
