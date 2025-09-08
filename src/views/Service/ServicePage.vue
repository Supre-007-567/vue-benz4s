<script setup>
import ServiceBox from '@/components/ServiceBox/ServiceBox.vue'
import { onMounted } from 'vue'
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <ServiceBox
    title="Mercedes保养服务"
    type="保养"
    formTitle="预约表单"
    titleImg="/src/assets/images/I-01.avif"
  />
</template>

<style scoped></style>
