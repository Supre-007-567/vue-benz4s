<script setup>
import { ref } from 'vue'
import CarViewer from '@/components/CarViewer/CarViewer.vue'
import { useCarStore } from '@/stores/car.js'
import { useRoute } from 'vue-router'
import ConfirmModal from '@/components/BsConfirm/BsConfirm.vue'
import { toastSuccess, toastDanger } from '@/utiles/toast.js'
import { useUserStore } from '@/stores/user.js'
import router from '@/router'
// 接收仓库
const carStore = useCarStore()
// console.log(carStore.allCar)
const userStore = useUserStore()
//console.log(userStore.currentUserInfo)
carStore.fetchAllCar()
// 接收参数
const route = useRoute()
// console.log('theId', route.query.id)
const theId = +route.query.id

// 定义文件夹变量
const folder = ref('')
if (theId === 1) {
  folder.value = 'CLA_180_Progressive_Coupe'
} else if (theId === 2) {
  folder.value = 'E_200_AVANTGARDE_Mercedes-Benz'
} else {
  folder.value = 'EQA_250+_Progressive_Mercedes-Benz'
}

// 查找汽车 - 做后续渲染
const carInfo = carStore.allCar.find((item) => item.id === theId)
//console.log('汽车信息', carInfo) //carInfo.price类型为 str 导致扣款不成功

// 在线购买
const showConfirm = ref(false)
const confirmContent = ref('')
const handleBuy = (result) => {
  if (!userStore.token) {
    toastDanger('您还未登录，请登录后再成为梅赛德斯车主')
    router.push({
      path: '/login',
      query: { redirect: router.currentRoute.value.fullPath }, // 保存原路径
    })
    return
  }

  confirmContent.value = `您的账户余额为 ${userStore.currentUserInfo.money} RMB，确定购买吗？`
  showConfirm.value = true
  if (result === true) {
    console.log('token', userStore.token)
    userStore.buyCar(+carInfo.price)
    return toastSuccess(`购买成功，目前您的余额为 ${userStore.currentUserInfo.money} RMB`)
  }
}
</script>
<template>
  <div class="detali-container">
    <CarViewer :folder="folder">
      <template #title>
        {{ carInfo.name }}
      </template>
      <template #desc>
        {{ carInfo.desc }}
      </template>
    </CarViewer>
    <!-- 测试 -->
    <div class="container-inner">
      <!-- 价格盒子 -->
      <div class="shadow-lg row price-box py-4 px-3">
        <div class="col-12 col-md-6 col-lg-6">
          <div class="price">
            <div class="real">
              <span class="type">官方指导价</span>
              <span class="money"
                >{{ carInfo.price }} RMB <i class="bi bi-stripe iconFont"></i
              ></span>
            </div>
            <div class="fenqi">
              <span class="type">分期支付</span>
              <span class="money">36期 每期 5000 RMB <i class="bi bi-stripe iconFont"></i></span>
            </div>
          </div>
        </div>
        <div class="btn-box col-12 col-md-6 col-lg-6">
          <button class="btn btn btn-outline-secondary rounded-0 px-5 fw-bold">预约试驾</button>
          <button class="btn btn btn-outline-primary rounded-0 px-5 fw-bold" @click="handleBuy">
            在线购买
          </button>
        </div>
      </div>
      <!-- 设备亮点 -->
      <div class="highlights my-5">
        <h1 class="h-title mb-5 font-monospace">设备亮点</h1>
        <div class="h-box">
          <div class="h-imgBox">
            <div class="h-pic">
              <img src="/src/assets/images/detail/HeightLight/10001.jpg" alt="" />
            </div>
            <div class="h-desc"><span>奢华内饰</span></div>
          </div>
          <div class="h-imgBox">
            <div class="h-pic">
              <img src="/src/assets/images/detail/HeightLight/10002.jpg" alt="" />
            </div>
            <div class="h-desc"><span>导航服务预安装</span></div>
          </div>
          <div class="h-imgBox">
            <div class="h-pic">
              <img src="/src/assets/images/detail/HeightLight/10003.jpg" alt="" />
            </div>
            <div class="h-desc"><span>CarPlay集成包</span></div>
          </div>
          <div class="h-imgBox">
            <div class="h-pic">
              <img src="/src/assets/images/detail/HeightLight/10004.jpg" alt="" />
            </div>
            <div class="h-desc"><span>无钥匙启动</span></div>
          </div>
        </div>
      </div>
      <!-- 奔驰服务 -->
      <!-- <div class="benz-service">
        <h1 class="h-title mb-5 font-monospace">Mercedes服务</h1>
      </div> -->
    </div>
    <!-- 确认框 -->
    <ConfirmModal
      v-model:visible="showConfirm"
      title="温馨提示"
      :content="confirmContent"
      @confirm="handleBuy"
    />
    <!-- <p>{{ carInfo }}</p> -->
  </div>
</template>

<style scoped>
/* 价格盒子 */
.btn-box {
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
}
.price-box {
  display: flex;
  justify-content: space-between;
}
.price-box .price {
  display: flex;
  gap: 100px;
  /* flex-direction: column; */
}
.price-box .price .real,
.price-box .price .fenqi {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.price-box .price .type {
  font-size: 16px;
  color: #4f4f4f;
}

.price-box .price .money {
  font-size: 18px;
  font-weight: 700;
  color: #333333;
}
/* 价格旁边的小图标 */
.iconFont {
  font-size: 12px;
  /* cursor: pointer; */
}

/* 设备亮点 */
.h-title {
  color: #333;
  font-weight: normal;
  font-size: 38px;
}
.highlights .h-box {
  display: grid;
  /* 三等分 */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 230px;
  width: 100%;
  gap: 50px;
  box-sizing: border-box;
}
.highlights .h-box .h-imgBox {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.highlights .h-box .h-imgBox img {
  width: 100%;
  height: 100%;
}

.highlights .h-box .h-imgBox .h-desc {
  color: #333;
  font-size: 18px;
  font-weight: 700;
}

/* 响应式适配 */
@media (max-width: 992px) {
  .btn-box {
    flex-direction: column;
  }
}
@media (max-width: 768px) {
  .highlights .h-box {
    gap: 20px;
  }
  .price-box .price .type {
    font-size: 13px;
  }
  .price-box .price .money {
    font-size: 15px;
  }
  .iconFont {
    font-size: 9px;
  }
  .h-title {
    font-size: 35px;
  }
  .highlights .h-box .h-imgBox .h-desc {
    font-size: 15px;
  }
  .highlights .h-box {
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 250px; */
    gap: 30px;
  }
}
@media (max-width: 576px) {
  .highlights .h-box {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 300px);
  }
  .highlights .h-box .h-imgBox {
    gap: 10px;
  }
}
</style>
