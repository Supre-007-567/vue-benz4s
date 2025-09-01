<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const isVisible = ref(true) // 控制导航栏是否显示（隐藏时完全移除）
const isFixed = ref(false) // 新增：控制导航栏是否固定在顶部（原位显示时不固定）

let headerEl, spacerEl, recommendEl
let recommendTop = 0 // 推荐区域顶部距离页面顶部的距离
let headerHeight = 0 // 导航栏自身高度（用于占位符）
let ticking = false // 防抖动：避免滚动事件频繁触发

// 1. 重新计算推荐区域位置（窗口 resize 时也需重新计算）
const recalcRecommendTop = () => {
  if (!recommendEl) return
  const rect = recommendEl.getBoundingClientRect()
  // 推荐区绝对位置 = 可视区相对位置 + 页面滚动距离
  recommendTop = rect.top + (window.scrollY || document.documentElement.scrollTop || 0)
}

// 2. 设置占位符高度（仅在导航栏固定时生效）
const setSpacerHeight = () => {
  if (!headerEl || !spacerEl) return
  headerHeight = headerEl.offsetHeight // 记录导航栏高度
  spacerEl.style.height = headerHeight + 'px' // 占位符高度 = 导航栏高度
}

// 3. 核心优化：修改显示逻辑，消除空窗期
const applyVisibility = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop || 0

  // 逻辑拆解：
  // - 滚动到顶部（scrollY = 0）：显示导航栏，不固定（原位）
  // - 滚动在“顶部~推荐区顶部”之间（0 < scrollY < recommendTop - headerHeight）：显示导航栏，不固定（原位）
  // - 滚动到“推荐区顶部及以下”（scrollY >= recommendTop - headerHeight）：显示导航栏，固定在顶部
  // - 无任何隐藏场景（彻底消除空窗期）
  if (scrollY >= recommendTop - headerHeight) {
    isVisible.value = true
    isFixed.value = true // 超过推荐区，固定在顶部
  } else {
    isVisible.value = true
    isFixed.value = false // 未到推荐区，保持原位显示
  }
}

// 4. 滚动事件（用 requestAnimationFrame 优化性能）
const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    applyVisibility()
    ticking = false
  })
}

// 5. 窗口 resize/加载时重新计算关键值
const onResizeOrLoad = () => {
  recalcRecommendTop()
  setSpacerHeight()
  applyVisibility()
}

onMounted(async () => {
  await nextTick() // 等待 DOM 完全渲染
  headerEl = document.getElementById('site-header')
  spacerEl = document.getElementById('header-spacer')
  recommendEl = document.getElementById('recommend-section')

  onResizeOrLoad() // 初始化计算

  // 绑定事件（passive: true 优化滚动性能）
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResizeOrLoad)
  window.addEventListener('load', onResizeOrLoad)
})

onUnmounted(() => {
  // 移除事件，避免内存泄漏
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResizeOrLoad)
  window.removeEventListener('load', onResizeOrLoad)
})
</script>

<template>
  <!-- 粘性导航栏：新增 is-fixed 类控制固定定位，is-hidden 控制隐藏 -->
  <header
    id="site-header"
    :class="[
      'site-header-base', // 基础样式类
      isVisible ? 'is-visible' : 'is-hidden', // 控制显示/隐藏
      isFixed ? 'is-fixed' : '', // 控制是否固定在顶部
    ]"
  >
    <nav class="navbar navbar-expand-lg custom-navbar px-4 py-2">
      <!-- 原有导航内容完全不变 -->
      <div class="container-fluid">
        <div class="container-inner d-flex align-items-center">
          <router-link to="/home" class="navbar-brand me-4 d-flex align-items-center">
            <img src="@/assets/benz-logo.png" alt="奔驰" height="40" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarContent">
            <ul class="navbar-nav flex-grow-1 align-items-lg-center ms-auto">
              <li class="nav-item">
                <router-link class="nav-link py-2" to="/home">首页</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link py-2" to="/service">服务</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link py-2" to="/community">社区</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link py-2" to="/reserve">预约试驾</router-link>
              </li>
            </ul>
            <div class="d-flex align-items-center mt-3 mt-lg-0 ms-lg-4">
              <router-link class="nav-link fw-bold py-1" to="/login">登录</router-link>
              <span class="mx-2 text-light d-none d-lg-inline">|</span>
              <router-link class="nav-link fw-bold py-1" to="/login">注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- 占位符：仅在导航栏固定时显示，避免内容被覆盖 -->
  <div id="header-spacer" aria-hidden="true" :style="{ display: isFixed ? 'block' : 'none' }"></div>
</template>

<style scoped>
/* 1. 导航栏基础样式：默认静态定位（原位显示） */
.site-header-base {
  width: 100%;
  opacity: 1;
  transition:
    transform 0.35s ease,
    opacity 0.9s ease,
    box-shadow 0.3s ease; /* 新增阴影过渡，固定时更自然 */
  will-change: transform, opacity;
}

/* 2. 固定定位样式：滚动到推荐区后触发 */
#site-header.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* 固定时置顶，避免被内容覆盖 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* 固定时加阴影，增强层次感 */
}

/* 3. 隐藏样式（当前逻辑下不会触发，保留备用） */
#site-header.is-hidden {
  transform: translateY(-110%);
  opacity: 0;
  pointer-events: none;
}

/* 4. 原有导航样式完全保留，不做任何修改 */
.custom-navbar {
  background: linear-gradient(to bottom, #000000, #1a1a1a);
  min-height: 80px;
}

@media (max-width: 991px) {
  #navbarContent {
    margin-top: 1rem;
    padding-bottom: 0.5rem;
  }
  .nav-item {
    margin: 0.3rem 0;
  }
  .d-none.d-lg-inline {
    display: none !important;
  }
}

.navbar-brand img {
  max-height: 40px;
}
.nav-link {
  font-size: 16px;
  color: #b3b3b3 !important;
  position: relative;
  padding: 8px 0 !important;
  margin: 0 12px;
  transition: all 0.3s ease;
}
.nav-link:hover {
  color: #fff !important;
}
.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.nav-link:hover::after,
.router-link-exact-active::after {
  transform: scaleX(1);
}
.router-link-exact-active {
  color: #fff !important;
  font-weight: 500;
}

/* 5. 占位符基础样式 */
#header-spacer {
  width: 100%;
  transition: display 0.3s ease;
}
</style>
