<script setup>
import { ref } from 'vue'
import AuthForm from '@/components/AuthForm/AuthForm.vue'
import { useUserStore } from '@/stores/user.js'
const userStore = useUserStore()

const mode = ref('login')

function switchMode() {
  mode.value = mode.value === 'login' ? 'register' : 'login'
}

async function handleSubmit(obj) {
  try {
    if (mode.value === 'login') {
      await userStore.fetchLogin(obj)
    } else {
      userStore.fetchRegister(obj)
    }
  } catch (err) {
    console.error(err)
    alert('请求失败')
  }
}
</script>

<template>
  <div class="login-page">
    <div class="logo-container">
      <img src="../../assets/images/CLogin-logo.svg" alt="" />
      <p>获取您的梅赛德斯账户</p>
    </div>
    <div class="login-box">
      <AuthForm :mode="mode" @submit="handleSubmit">
        <template #switch-text>
          <a href="#" class="reminder" @click.prevent="switchMode">
            {{ mode === 'login' ? '没有账号？去注册' : '已有账号？去登录' }}
          </a>
        </template>
      </AuthForm>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  width: 100vw; /* 占满整个视口宽度 */
  height: 100vh; /* 占满整个视口高度 */
  background: url('../../assets/images/CLogin-bg.jpg') no-repeat center center;
  background-attachment: fixed; /* 固定背景（相对于浏览器窗口） */
  background-size: cover; /* 背景图铺满，保持比例 */
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.login-box {
  display: flex;
  align-items: center; /* 让子内容垂直居中 */
  justify-content: center; /* 让子内容水平居中 */
}
.logo-container {
  /* margin-top: 20px; */
  padding-top: 20px;
  text-align: center;
  background-color: #000;
}
.logo-container img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin: 0 auto;
}

.logo-container p {
  color: #f1f1ff;
  /* text-align: center; */
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
