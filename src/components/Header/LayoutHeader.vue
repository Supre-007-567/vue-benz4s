<script setup>
// 移除固定高度限制，适配小屏折叠
</script>

<template>
  <!-- 头部导航栏：删除固定高度的header-container类，改用navbar直接控制 -->
  <header>
    <nav class="navbar navbar-expand-lg custom-navbar shadow-sm px-4 py-2">
      <div class="container-fluid">
        <div class="container-inner d-flex align-items-center">
          <!-- LOGO：保持不变，但确保小屏不被挤压 -->
          <router-link to="/home" class="navbar-brand me-4 d-flex align-items-center">
            <img src="@/assets/benz-logo.png" alt="奔驰" height="40" />
          </router-link>

          <!-- 折叠按钮：小屏时显示，保持不变 -->
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

          <!-- 折叠区：关键修复：小屏时让内容垂直排列且不溢出 -->
          <div class="collapse navbar-collapse justify-content-between" id="navbarContent">
            <!-- 左侧导航：小屏时垂直排列，增加内边距避免拥挤 -->
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

            <!-- 右侧登录/注册：小屏时垂直排列，与导航分开 -->
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
</template>

<style scoped>
.custom-navbar {
  background: linear-gradient(to bottom, #000000, #1a1a1a);
  min-height: 80px;
}

@media (max-width: 991px) {
  #navbarContent {
    margin-top: 1rem; /* 与LOGO保持距离 */
    padding-bottom: 0.5rem;
  }

  .nav-item {
    margin: 0.3rem 0;
  }

  .d-flex.flex-column {
    flex-direction: row !important;
    gap: 1.5rem;
  }
  /* 隐藏小屏的分割线 */
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
