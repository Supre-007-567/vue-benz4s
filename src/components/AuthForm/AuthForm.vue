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
  <div class="auth-form card p-5 rounded-0">
    <h3 class="text-center mb-3">{{ mode === 'login' ? '登录' : '注册' }}</h3>

    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="form-label">用户名</label>
        <input v-model="username" type="text" class="form-control rounded-0" required />
      </div>

      <div class="mb-4">
        <label class="form-label">密码</label>
        <input v-model="password" type="password" class="form-control rounded-0" required />
      </div>

      <div v-if="mode === 'register'" class="mb-3">
        <label class="form-label">确认密码</label>
        <input v-model="confirmPassword" type="password" class="form-control rounded-0" required />
      </div>

      <button type="submit" class="btn btn-login w-100 rounded-0">
        {{ mode === 'login' ? '登录' : '注册' }}
      </button>
    </form>

    <p class="mt-5 text-center reminder">
      <slot name="switch-text"></slot>
    </p>
  </div>
</template>
<style scoped>
.auth-form {
  /* margin-top: 80px; */
  width: 600px;
  padding: 4rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.btn-login {
  background-color: #0088c6; /* 绿色 */
  border: 0;
  color: #f1f1f1;
  padding: 10px 20px;
}
.reminder {
  color: #0088c6;
  padding-top: 15px;
}
</style>
