import { createRouter, createWebHistory } from 'vue-router'

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

export default router
