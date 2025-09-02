<script setup>
import Header from '@/components/Header/LayoutHeader.vue'
import ToTop from './components/ToTop.vue'
</script>

<template>
  <!-- 头部导航栏 -->
  <Header></Header>
  <router-view></router-view>

  <!-- 返回顶部按钮 -->
  <ToTop></ToTop>

  <!-- 底部 -->
</template>

<style scoped></style>
