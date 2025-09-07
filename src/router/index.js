import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user.js'
import { toastDanger } from '@/utiles/toast.js'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/LoginPage.vue'),
    },
    {
      path: '/',
      component: () => import('@/views/Layout/LayoutPage.vue'),
      redirect: '/home', //重定向
      children: [
        { path: 'home', name: 'Home', component: () => import('@/views/Home/HomePage.vue') }, //首页 导航栏 + 展示汽车图片 + 宣传
        {
          path: 'cardetail',
          name: 'carDetail',
          component: () => import('@/views/CarDetail/CarDetail.vue'), // 汽车详情页 查看汽车详情 + 购买
        },
        {
          path: 'collect',
          name: 'collect',
          component: () => import('@/views/Collect/CollectPage.vue'), // 用户社区页 用户发布信息交流
        },
        {
          path: 'reserve',
          name: 'reserve',
          component: () => import('@/views/Reserve/ReservePage.vue'), //预约试驾
        },
        {
          path: 'service',
          name: 'service',
          component: () => import('@/views/Service/ServicePage.vue'), //服务页 保修 + 保养 + 预约试驾
        },
        {
          path: 'all',
          name: 'all',
          component: () => import('@/views/All/AllPage.vue'), //展示所有车型
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }, //404
  ],
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  // 需要登录的路由
  const authPages = ['collect', 'reserve', 'service']

  // 如果去的是需要权限的页面，且没登录
  if (authPages.includes(to.name) && !userStore.token) {
    // 如果当前目标不是 login，才跳转，避免死循环
    if (to.name !== 'Login') {
      toastDanger('请登录后查看此页面 ')
      next({ name: 'Login', query: { redirect: to.fullPath } })
    } else {
      next() // 已经在登录页，放行
    }
  } else {
    next() // 其他页面直接放行
  }
})

export default router
