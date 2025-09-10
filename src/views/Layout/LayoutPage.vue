<script setup>
import Header from '@/components/Header/LayoutHeader.vue'
import ToTop from './components/ToTop.vue'
import Footer from '@/components/Footer/LayoutFooter.vue'
import VideoBox from './components/VideoBox.vue'
</script>

<template>
  <!-- 头部导航栏 -->
  <Header></Header>
  <router-view></router-view>

  <!-- 返回顶部按钮 -->
  <ToTop></ToTop>
  <VideoBox></VideoBox>
  <!-- 底部 -->
  <Footer></Footer>
</template>

<style scoped></style>
