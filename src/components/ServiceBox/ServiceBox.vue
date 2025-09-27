<script setup>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import { useCarStore } from '@/stores/car.js'
import { toastSuccess } from '@/utiles/toast.js'
import { useRoute } from 'vue-router'
import TitleBox from '@/components/TitleBox/TitleBox.vue'
import BsConfirm from '@/components/BsConfirm/BsConfirm.vue'

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
// console.log('从哪个页面进来的：', props.from)

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
const handleSubmit = async () => {
  // alert(`预约成功！\n车型: ${getCarModelText(selectedModel.value)}\n日期: ${selectedDate.value.toLocaleDateString()}`)
  await carStore.fetchAddService({
    type: props.from,
    carName: getCarModelText(selectedModel.value),
    serviceDate: selectedDate.value,
    status: 'pending',
  })
  getserviceInfo()
  // 5秒后再刷新一次数据
  setTimeout(() => {
    toastSuccess('恭喜！您的服务审核已通过')
    getserviceInfo()
  }, 5000)

  toastSuccess(
    `您的申请成功！\n车型: ${getCarModelText(selectedModel.value)}\n日期: ${selectedDate.value.toLocaleDateString()}`,
  )
  // 重置表单
  selectedModel.value = ''
  selectedDate.value = null
}

// 根据车型值获取显示名字
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

// 获取当前用户服务信息
const getserviceInfo = async () => {
  await carStore.fetchGetServiceInfo()
  // console.log('所有服务信息', res)
}
getserviceInfo()

// 时间显示
function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleString() // 本地化显示，含日期和时间
}

// 取消服务
const showConfirm = ref(false)
const cancelId = ref(null) //取消服务的id
// 打开弹窗
const openCancelConfirm = (theId) => {
  cancelId.value = theId
  showConfirm.value = true
}
const cancelService = async (result) => {
  if (!result) return
  await carStore.fetchCancleService(cancelId.value)
  toastSuccess('您已取消预约')
}
</script>

<template>
  <div class="service-page bg-light">
    <!-- 页面标题区域   向子组件传送数据 -->
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

    <!-- 确认框 -->
    <BsConfirm
      v-model:visible="showConfirm"
      title="温馨提示"
      content="确定取消服务吗？"
      @confirm="cancelService"
    ></BsConfirm>
    <!-- 服务信息 -->
    <div class="service-info container-inner">
      <h2 class="service-title alibabaFont">我的预约服务</h2>

      <!-- service-card -->
      <div v-if="carStore.currentUserServiceInfo && carStore.currentUserServiceInfo.length">
        <div class="service-card" v-for="item in carStore.currentUserServiceInfo" :key="item.key">
          <div class="service-header">
            <h3 class="car-name">{{ item.carName }}</h3>
            <div class="btn-box">
              <button class="btn" @click="openCancelConfirm(item.id)">取消</button>
              <span
                class="status"
                :class="{
                  'status-pending': item.status === 'pending',
                  'status-success': item.status === 'success',
                }"
              >
                {{ item.status === 'pending' ? '等待审核' : '审核通过' }}</span
              >
              <!-- {{ item.status }} -->
            </div>
          </div>

          <ul class="service-details">
            <li><strong>服务类型：</strong>{{ item.type }}</li>
            <li><strong>预约时间：</strong>{{ formatDate(item.serviceDate) }}</li>
            <li><strong>用户名：</strong>{{ item.username }}</li>
          </ul>
        </div>
      </div>
      <div v-else>
        <div class="empty-text">
          暂无数据，快去<router-link to="/all"> 预约你的 Mercedes 吧</router-link> 🚗
        </div>
      </div>
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

/* 服务信息 */
.service-info {
  /* max-width: 900px;
  margin: 60px auto;
  padding: 0 20px; */
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.service-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 24px;
  /* text-align: center; */
  color: #111;
  letter-spacing: 1px;
}

.service-card {
  width: 100%;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 20px 28px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.car-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #000;
  margin: 0;
}

.status {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 500;
}

.status-pending {
  background: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
}

.status-success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

/* .status-pending {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
} */

.service-details {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
  color: #333;
}

.service-details li {
  margin-bottom: 6px;
}

.service-details strong {
  font-weight: 600;
  color: #000;
}

.btn-box {
  display: flex;
  gap: 10px;
  align-items: center;
}
.btn-box .btn {
  border-radius: 20%;
}

/*  */
.empty-text {
  text-align: center;
  margin: 100px 0;
}
</style>
