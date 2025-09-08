<script setup>
import ServiceBox from '@/components/ServiceBox/ServiceBox.vue'
import { onMounted } from 'vue'
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
<template>
  <div>
    <ServiceBox
      title="预约你的Mercedes"
      type="试驾"
      formTitle="试驾表单"
      titleImg="/src/assets/images/I-03.jpg"
    ></ServiceBox>

    <!-- <i class="bi bi-star-o"></i>
    <i class="bi bi-youtube"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star-fill"></i> -->
  </div>
</template>
