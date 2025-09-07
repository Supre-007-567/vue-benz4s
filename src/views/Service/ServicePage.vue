<script setup>
import { ref } from 'vue'
// import DatePicker from 'vue3-datepicker'
import VueDatePicker from '@vuepic/vue-datepicker';
import { useCarStore } from "@/stores/car.js";
import { toastSuccess } from "@/utiles/toast.js";
const carStore = useCarStore()
// 获取车辆数据
carStore.fetchAllCar()

// 响应式数据
const selectedModel = ref('')
const selectedDate = ref(null)

// 禁用过去的日期
const disablePastDates = (date) => {
  // 只能选择今天及未来7天内的日期
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const nextWeek = new Date(today)
  nextWeek.setDate(today.getDate() + 7)
  
  return date < today || date > nextWeek
}

// 表单提交处理
const handleSubmit = () => {
  // 在实际应用中，这里会发送API请求
  // alert(`预约成功！\n车型: ${getCarModelText(selectedModel.value)}\n日期: ${selectedDate.value.toLocaleDateString()}`)
  toastSuccess(`预约成功！\n车型: ${getCarModelText(selectedModel.value)}\n日期: ${selectedDate.value.toLocaleDateString()}`)
  // 重置表单
  selectedModel.value = ''
  selectedDate.value = null
}

// 根据车型值获取显示文本
const getCarModelText = (value) => {
  return value.name
}
</script>

<template>
  <div class="service-page">
    <!-- 页面标题区域 -->
    <div class="page-header bg-primary text-white py-8">
      <div class="container-inner">
        <h1 class="display-4 fw-bold mb-2">专业汽车保养服务</h1>
        <p class="lead alibabaFont">选择您的车型和方便的时间，我们将为您的爱车提供全方位保养</p>
      </div>
    </div>

    <!-- 表单卡片 -->
    <div class="service-box container-inner py-8">
      <div class="form-card bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto transform transition-all duration-300 hover:shadow-xl">
        <h2 class="alibabaFont text-2xl md:text-3xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-100">
          预约保养
        </h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- 车型选择 -->
          <div class="form-group">
            <label for="carModel" class="form-label text-gray-700 font-medium mb-2 block">
              选择您的车型 <span class="text-danger">*</span>
            </label>
            <select 
              id="carModel"
              class="form-select form-control-lg w-full px-4 py-3 rounded-lg border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              aria-label="选择车型"
              v-model="selectedModel"
              required
            >
              <option value="" disabled selected>请选择车型</option>
              <option v-for="item in carStore.allCar" :key="item.id" :value="item">{{item.name}}</option>

            </select>
          </div>

          <!-- 日期选择 -->
          <div class="form-group">
            <label for="appointmentDate" class="form-label text-gray-700 font-medium mb-2 block">
              选择保养日期 <span class="text-danger">*</span>
            </label>
            <div class="datepicker-container">
              <VueDatePicker
                id="appointmentDate"
                v-model="selectedDate"
                :class="'form-control form-control-lg w-full'"
                format="yyyy-MM-dd"
                :disabled-date="disablePastDates"
                placeholder="点击选择日期"
                required
              />
            </div>
            <p class="text-sm text-gray-500 mt-2">请选择未来7天内的日期</p>
          </div>

          <!-- 提交按钮 -->
          <div class="form-actions pt-2">
            <button 
              type="submit" 
              class="btn btn-primary w-full py-3 px-6 rounded-lg font-medium rounded-lg hover:bg-primary/90 active:bg-primary/80 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
              :disabled="!selectedModel || !selectedDate"
            >
              确认预约保养
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- 服务优势 -->
    <div class="service-advantages bg-gray-50 py-10">
      <div class="container-inner">
        <h3 class="text-center text-xl md:text-2xl font-bold text-gray-800 mb-8">为什么选择我们的保养服务</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="advantage-item bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div class="icon-box bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-wrench text-primary text-xl"></i>
            </div>
            <h4 class="font-bold text-gray-800 mb-2">专业技师</h4>
            <p class="text-gray-600">5年以上经验的专业技师团队，确保服务质量</p>
          </div>
          <div class="advantage-item bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div class="icon-box bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-certificate text-primary text-xl"></i>
            </div>
            <h4 class="font-bold text-gray-800 mb-2">原厂配件</h4>
            <p class="text-gray-600">全部使用原厂认证配件，保证您的用车安全</p>
          </div>
          <div class="advantage-item bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div class="icon-box bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-clock-o text-primary text-xl"></i>
            </div>
            <h4 class="font-bold text-gray-800 mb-2">高效服务</h4>
            <p class="text-gray-600">预约客户享优先服务，常规保养2小时内完成</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* 基础样式变量 */
:root {
  --primary-color: #0d6efd;
  --primary-light: #3b82f6;
  --gray-light: #f8f9fa;
  --gray-medium: #e9ecef;
  --text-dark: #212529;
  --text-medium: #6c757d;
}

/* 页面布局 */
.service-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 头部样式 */
.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
  position: relative;
  overflow: hidden;
}

.page-header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.4;
}

/* 表单卡片样式 */
.form-card {
  margin-top: -40px;
  position: relative;
  z-index: 10;
}

/* 日期选择器样式优化 */
.datepicker-container :deep(.mx-datepicker) {
  width: 100%;
}

.datepicker-container :deep(.mx-input) {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.datepicker-container :deep(.mx-input:focus) {
  color: #212529;
  background-color: #fff;
  border-color: var(--primary-color);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.datepicker-container :deep(.mx-calendar-content .cell.active) {
  background-color: var(--primary-color);
}

/* 服务优势区域 */
.service-advantages {
  margin-top: 4rem;
}

.advantage-item {
  text-align: center;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .form-card {
    padding: 1.5rem;
  }
  
  .page-header {
    padding: 4rem 0;
  }
}
</style>
