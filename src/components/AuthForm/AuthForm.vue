<script setup>
import { ref } from 'vue'
import { defineProps, defineEmits } from 'vue'
import { toastDanger } from '@/utiles/toast.js'

const props = defineProps({
  mode: { type: String, default: 'login' }, // 'login' or 'register'
})

const emit = defineEmits(['submit'])

const username = ref('')
const password = ref('')
const confirmPassword = ref('')

function handleSubmit() {
  if (props.mode === 'register' && password.value !== confirmPassword.value) {
    toastDanger('两次密码不一致')
    return
  }
  emit('submit', {
    username: username.value,
    password: password.value,
  })
}
</script>
<template>
  <div class="auth-form card p-4" style="max-width: 400px; margin: auto; margin-top: 80px">
    <h3 class="text-center mb-3">{{ mode === 'login' ? '登录' : '注册' }}</h3>

    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label">用户名</label>
        <input v-model="username" type="text" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">密码</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>

      <div v-if="mode === 'register'" class="mb-3">
        <label class="form-label">确认密码</label>
        <input v-model="confirmPassword" type="password" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-primary w-100">
        {{ mode === 'login' ? '登录' : '注册' }}
      </button>
    </form>

    <p class="mt-2 text-center">
      <slot name="switch-text"></slot>
    </p>
  </div>
</template>
<style scoped>
.auth-form {
  margin-top: 80px;
}
</style>
