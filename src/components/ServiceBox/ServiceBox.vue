<script setup>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import { useCarStore } from '@/stores/car.js'
import { toastSuccess } from '@/utiles/toast.js'
import { useRoute } from 'vue-router'
import TitleBox from '@/components/TitleBox/TitleBox.vue'

const carStore = useCarStore()
// 获取车辆数据

carStore.fetchAllCar()
// 获取当前路由实例
const route = useRoute()

// 拿到查询参数 id（首次加载时获取）
const id = +route.query.id

const props = defineProps({
  title: String,
  type: String,
  formTitle: String,
  titleImg: String,
  from: String,
})
// console.log(props) // console.log(props)

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
  // alert(`预约成功！\n车型: ${getCarModelText(selectedModel.value)}\n日期: ${selectedDate.value.toLocaleDateString()}`)
  toastSuccess(
    `预约成功！\n车型: ${getCarModelText(selectedModel.value)}\n日期: ${selectedDate.value.toLocaleDateString()}`,
  )
  // 重置表单
  selectedModel.value = ''
  selectedDate.value = null
}

// 根据车型值获取显示文本
const getCarModelText = (theId) => {
  // console.log(value)
  const currentCar = carStore.allCar.find((item) => item.id === theId)
  return currentCar.name
}

// 从所有车型页面跳转过来反显名字
const currentCar = ref({})
function returnCarInfo() {
  // 如果是路由导航过来的不需要反显
  if (!carStore.allCar.find((item) => item.id === id)) {
    return
  }
  currentCar.value = carStore.allCar.find((item) => item.id === id) || {}
  // console.log(carStore.allCar);

  console.log('sBox:', currentCar.value)
  selectedModel.value = currentCar.value.id
}
returnCarInfo()

// 选择车型逻辑
const handleChange = () => {
  console.log(selectedModel.value)
  currentCar.value = carStore.allCar.find((item) => item.id === selectedModel.value) || {}
}
</script>

<template>
  <div class="service-page bg-light">
    <!-- 页面标题区域 -->
    <TitleBox
      :title="props.title"
      :desc="`选择您的车型和方便的时间，我们将为您的爱车提供${props.type}服务`"
      :titleImage="props.titleImg"
    ></TitleBox>

    <!-- 表单卡片 -->
    <div class="container py-5 mb-3">
      <div class="row">
        <!-- 左侧表单 -->
        <div class="col-lg-6">
          <div class="card rounded-0 shadow-sm h-100">
            <div class="card-body rounded-0 p-4 p-md-5">
              <h2 class="h4 fw-bold text-dark border-bottom pb-3 mb-4">
                {{ props.formTitle }}
              </h2>

              <form @submit.prevent="handleSubmit">
                <!-- 车型选择 -->
                <div class="mb-4">
                  <label for="carModel" class="form-label fw-semibold">
                    选择您的车型 <span class="text-danger">*</span>
                  </label>
                  <select
                    id="carModel"
                    class="form-select select-ipt form-select-lg"
                    v-model="selectedModel"
                    required
                    @change="handleChange()"
                  >
                    <option value="" disabled>请选择车型</option>
                    <option v-for="item in carStore.allCar" :key="item.id" :value="item.id">
                      {{ item.name }}
                    </option>
                  </select>
                </div>

                <!-- 日期选择 -->
                <div class="mb-4">
                  <label for="appointmentDate" class="form-label fw-semibold">
                    选择日期 <span class="text-danger">*</span>
                  </label>
                  <VueDatePicker
                    id="appointmentDate"
                    v-model="selectedDate"
                    class="form-control form-control-lg"
                    format="yyyy-MM-dd"
                    :disabled-date="disablePastDates"
                    placeholder="点击选择日期"
                    required
                  />
                  <div class="form-text">请选择未来 7 天内的日期</div>
                </div>

                <!-- 提交按钮 -->
                <div class="d-grid">
                  <button
                    type="submit"
                    class="btn btn-dark btn-lg fw-semibold"
                    :disabled="!selectedModel || !selectedDate"
                  >
                    确认预约
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- 右侧车辆图片展示 -->
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <div class="car-preview-box bg-white shadow-sm text-center" style="min-height: 300px">
            <!-- 这里放选中车辆的图片 -->
            <img v-if="selectedModel" :src="currentCar.coverImage" class="" alt="选中车型" />
            <!-- <div v-else class="text-muted">请选择车型后查看图片</div> -->
            <img v-else src="/src/assets/images/I-02.avif" class="" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 服务信息 -->
    <div class="container-inner">
      <h1>预约信息</h1>
      这里是预约信息
    </div>
  </div>
</template>

<style scoped>
.service-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.select-ipt {
  font-size: 16px;
}

.car-preview-box img {
  width: 636px;
  height: 477px;
  object-fit: cover;
}
.page-header h1 {
  letter-spacing: 1px;
}

.card {
  border: none;
}

@media (max-width: 768px) {
  .page-header {
    padding: 3rem 1rem;
  }
  .page-header h1 {
    font-size: 1.75rem;
  }
}
</style>
