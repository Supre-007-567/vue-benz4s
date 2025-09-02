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
  <AuthForm :mode="mode" @submit="handleSubmit">
    <template #switch-text>
      <a href="#" @click.prevent="switchMode">
        {{ mode === 'login' ? '没有账号？去注册' : '已有账号？去登录' }}
      </a>
    </template>
  </AuthForm>
</template>
