<template>
  <footer class="bg-dark text-light pt-5 pb-4">
    <div class="container">
      <!-- 顶部：Logo + 导航四列 -->
      <div class="row gy-4 align-items-start mb-4">
        <!-- Logo（预留 src） -->
        <div class="col-12 col-md-3 text-center text-md-start">
          <h1 class="fs-5 mt-3 mb-0 alibabaFont">以创新之名，定义豪华新标准。</h1>
        </div>

        <!-- 品牌 -->
        <nav class="col-6 col-md-2" aria-label="品牌">
          <h6 class="text-uppercase text-secondary mb-3 fw-semibold">品牌</h6>
          <ul class="nav flex-column gap-3 small">
            <li class="nav-item"><a class="footer-link" href="#">关于奔驰</a></li>
            <li class="nav-item"><a class="footer-link" href="#">品牌历史</a></li>
            <li class="nav-item"><a class="footer-link" href="#">设计理念</a></li>
            <li class="nav-item"><a class="footer-link" href="#">可持续发展</a></li>
          </ul>
        </nav>

        <!-- 车型 -->
        <nav class="col-6 col-md-2" aria-label="车型">
          <h6 class="text-uppercase text-secondary mb-3 fw-semibold">车型</h6>
          <ul class="nav flex-column gap-3 small">
            <li class="nav-item"><a class="footer-link" href="#">轿车系列</a></li>
            <li class="nav-item"><a class="footer-link" href="#">SUV 系列</a></li>
            <li class="nav-item"><a class="footer-link" href="#">AMG 系列</a></li>
            <li class="nav-item"><a class="footer-link" href="#">新能源系列</a></li>
          </ul>
        </nav>

        <!-- 服务 -->
        <nav class="col-6 col-md-2" aria-label="服务">
          <h6 class="text-uppercase text-secondary mb-3 fw-semibold">服务</h6>
          <ul class="nav flex-column gap-3 small">
            <li class="nav-item"><a class="footer-link" href="#">预约试驾</a></li>
            <li class="nav-item"><a class="footer-link" href="#">经销商查询</a></li>
            <li class="nav-item"><a class="footer-link" href="#">售后服务</a></li>
            <li class="nav-item"><a class="footer-link" href="#">金融方案</a></li>
          </ul>
        </nav>

        <!-- 联系我们 + 社媒 -->
        <div class="col-6 col-md-3">
          <h6 class="text-uppercase text-secondary mb-3 fw-semibold">联系我们</h6>
          <ul class="list-unstyled small mb-3">
            <li class="mb-1 text-white-50">400-000-0000（服务热线）</li>
            <li class="mb-1 text-white-50">service@mercedes-benz.com.cn</li>
            <li class="mb-1 text-white-50">周口师范学院东苑 325</li>
          </ul>
          <div class="d-flex gap-3">
            <a class="icon-link" href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a class="icon-link" href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a class="icon-link" href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>

      <!-- 分隔线 -->
      <hr class="border-secondary opacity-1 my-5" />

      <!-- 底部版权 + 法务链接 -->
      <div class="row gy-3 align-items-center my-5">
        <div class="col-12 col-md-6">
          <p class="small text-white-50 mb-0">
            © 2025 周口梅赛德斯-奔驰销售服务有限公司. 保留所有权利.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <ul class="nav justify-content-center justify-content-md-end small">
            <li class="nav-item"><a class="footer-link px-2" href="#">隐私政策</a></li>
            <li class="nav-item"><a class="footer-link px-2" href="#">使用条款</a></li>
            <li class="nav-item"><a class="footer-link px-2" href="#">法律声明</a></li>
            <li class="nav-item"><a class="footer-link px-2" href="#">网站地图</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 纯展示组件，无逻辑
</script>

<style scoped>
.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: #fff;
  text-decoration: none;
}

.icon-link {
  color: rgba(255, 255, 255, 0.65);
  font-size: 1.25rem;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}
.icon-link:hover {
  color: #fff;
  transform: translateY(-1px);
}

/* Logo 图片适配盒子，防止拉伸 */
.footer-logo img {
  object-fit: contain;
  width: 20px;
  height: 20px;
}
</style>
