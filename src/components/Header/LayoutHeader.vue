<script setup>
// layout头部 + 轮播图 = 视口高度的100%
</script>

<template>
  <!-- 头部导航栏 -->
  <header class="header-container">
    <nav class="navbar navbar-expand-lg custom-navbar shadow-sm px-4 py-3">
      <div class="container-fluid">
        <div class="container-inner d-flex align-items-center">
          <!-- LOGO -->
          <router-link to="/home" class="navbar-brand me-4 d-flex align-items-center">
            <img src="@/assets/benz-logo.png" alt="奔驰" height="40" />
          </router-link>

          <!-- 折叠按钮 (小屏) -->
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

          <!-- 折叠区 -->
          <div class="collapse navbar-collapse justify-content-between" id="navbarContent">
            <!-- 左侧导航 -->
            <ul class="navbar-nav align-items-lg-center">
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

            <!-- 右侧 登录/注册 -->
            <div class="d-flex align-items-center mt-3 mt-lg-0">
              <router-link class="nav-link fw-bold" to="/login">登录</router-link>
              <span class="mx-2 text-light d-none d-lg-inline">|</span>
              <router-link class="nav-link fw-bold" to="/login">注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* 导航栏容器设置固定高度 */
.header-container {
  height: 80px;
}

/* 导航栏 */
.custom-navbar {
  background: linear-gradient(to bottom, #000000, #1a1a1a);
  height: 100%;
}

.navbar {
  height: 100%;
}

/* LOGO */
.navbar-brand img {
  max-height: 40px;
}

/* 链接样式 */
.nav-link {
  font-size: 16px;
  color: #b3b3b3 !important;
  position: relative;
  padding: 8px 0 !important;
  margin: 0 12px;
  transition: all 0.3s ease;
}
.nav-link:hover {
  color: #ffffff !important;
}
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

/* 高亮 */
.router-link-exact-active {
  color: #ffffff !important;
  font-weight: 500;
}
.router-link-exact-active::after {
  transform: scaleX(1);
}

/* 小屏时 */
@media (max-width: 991px) {
  .navbar-nav {
    margin-top: 1rem;
  }
  .nav-link {
    margin: 0.5rem 0;
  }
}
</style>
