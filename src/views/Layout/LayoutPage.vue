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
        <div class="d-flex">
          <router-link class="nav-link fw-bold" to="/login">登录</router-link>
          <span class="mx-2 text-light">/</span>
          <router-link class="nav-link fw-bold" to="/register">注册</router-link>
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

/* 链接样式 */
.nav-link {
  font-size: 16px;
  color: #f0f0f0 !important; /* 默认浅灰 */
  transition: color 0.3s;
}
.nav-link:hover {
  color: #00bfff !important;
}

/* 当前页面高亮 */
.router-link-exact-active {
  color: #ff4d4d !important;
  /* background-color: #b4c2dc; */
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
</style>
