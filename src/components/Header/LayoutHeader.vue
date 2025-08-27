<script setup></script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg custom-navbar shadow-sm px-4 py-6">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- 左侧 导航-->
        <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
          <ul class="navbar-nav align-items-center">
            <!-- 奔驰 logo -->
            <li class="nav-item me-3">
              <img src="@/assets/benz-logo.png" alt="奔驰" height="40" />
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/home">首页</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/service">服务</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/community">社区</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/reserve">预约试驾</router-link>
            </li>
          </ul>
        </div>
        <!-- 右侧 注册登录 -->
        <div class="d-flex align-items-center">
          <router-link class="nav-link fw-bold" to="/login">登录</router-link>
          <span class="mx-2 text-light">|</span>
          <router-link class="nav-link fw-bold" to="/login">注册</router-link>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style scoped>
/* 自定义暗色渐变导航栏 */
.custom-navbar {
  background: linear-gradient(to bottom, #000000, #1a1a1a);
}

/* 链接基础样式 */
.nav-link {
  font-size: 16px;
  color: #b3b3b3 !important; /* 稍暗的灰色，为 hover 效果留空间 */
  position: relative;
  padding: 8px 0 !important;
  margin: 0 12px;
  transition: all 0.3s ease;
}

/* 悬停效果 - 与暗色背景形成对比 */
.nav-link:hover {
  color: #ffffff !important;
}

/* 悬停时添加底部装饰线 */
.nav-link:hover::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transform: scaleX(1);
  transition: transform 0.3s ease;
}

/* 初始状态下的装饰线（不显示） */
.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

/* 当前页面高亮样式 */
.router-link-exact-active {
  color: #ffffff !important;
  font-weight: 500;
}

/* 当前页面高亮时的装饰线 */
.router-link-exact-active::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transform: scaleX(1);
}

.navbar {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.navbar-nav {
  padding: 0 10px;
}

.nav-item {
  padding-right: 25px;
}

/* 适配移动端 */
/* @media (max-width: 991px) {
  .nav-item {
    padding-right: 0;
    margin-bottom: 10px;
  }

  .nav-link {
    margin: 0;
  }
} */
</style>
