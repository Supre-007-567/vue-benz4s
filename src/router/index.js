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
        { path: 'home', name: 'Home', component: () => import('@/views/Home/HomePage.vue') },
        {
          path: 'cardetail',
          name: 'CarDetail',
          component: () => import('@/views/CarDetail/CarDetail.vue'), //首页 导航栏 + 展示汽车图片 + 宣传
        },
        {
          path: 'community',
          name: 'Community',
          component: () => import('@/views/Community/CommunityPage.vue'), // 汽车详情页 查看汽车详情
        },
        {
          path: 'reserve',
          name: 'Reserve',
          component: () => import('@/views/Reserve/ReservePage.vue'), // 用户社区页 用户发布信息交流
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }, //404
  ],
})

export default router
