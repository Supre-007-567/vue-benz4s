import Mock from 'mockjs'
// 所有车型
const carData = [
  // 轿车系列
  {
    id: 1,
    category: 'sedan',
    name: ' 奔驰 CLA 180 L 运动版 ',
    price: '325200',
    coverImage: '/src/assets/images/detail/CLA_180_Progressive_Coupe/10031.png',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 动感优雅，科技与豪华的完美平衡 ',
    alt: ' 奔驰 C 180 L 运动版 ',
  },
  {
    id: 2,
    category: 'sedan',
    name: ' 奔驰 E 200 L 豪华版 ',
    price: '369800',
    coverImage: '/src/assets/images/detail/E_200_AVANTGARDE_Mercedes-Benz/10002.png',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 优雅大气，舒适与格调的精妙融合 ',
    alt: ' 奔驰 E 200 L 豪华版 ',
  },
  {
    id: 3,
    category: 'sedan',
    name: ' 奔驰 EQA 150 L 豪华型 ',
    price: '448800',
    coverImage: '/src/assets/images/detail/EQA_250+_Progressive_Mercedes-Benz/10034.png',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 纯电风尚，环保与质感的理想适配 ',
    alt: ' 奔驰 E 300 L 豪华型 ',
  },
  {
    id: 4,
    category: 'sedan',
    name: ' 奔驰 E 260 L 运动版 ',
    price: '419800',
    coverImage: '/src/assets/images/E-01.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 运动风尚，性能与优雅的出色兼顾 ',
    alt: ' 奔驰 E 260 L 运动版 ',
  },
  {
    id: 5,
    category: 'sedan',
    name: ' 奔驰 S 500 L 4MATIC',
    price: '946800',
    coverImage: '/src/assets/images/E-02.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 旗舰典范，尊贵与科技的巅峰呈现 ',
    alt: ' 奔驰 S 500 L 4MATIC',
  },
  {
    id: 6,
    category: 'sedan',
    name: ' 奔驰 EQS 580 4MATIC',
    price: '1079800',
    coverImage: '/src/assets/images/E-03.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 电动旗舰，奢华与续航的卓越结合 ',
    alt: ' 奔驰 EQS 580 4MATIC',
  },

  // SUV系列
  {
    id: 7,
    category: 'suv',
    name: ' 奔驰 GLC 260 L 4MATIC',
    price: '427800',
    coverImage: '/src/assets/images/F-01.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 全能驾趣，空间与操控的和谐统一 ',
    alt: ' 奔驰 GLC 260 L 4MATIC',
  },
  {
    id: 8,
    category: 'suv',
    name: ' 奔驰 GLC 300 L 4MATIC',
    price: '468800',
    coverImage: '/src/assets/images/F-02.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 强劲驾驭，动力与舒适的优质平衡 ',
    alt: ' 奔驰 GLC 300 L 4MATIC',
  },
  {
    id: 9,
    category: 'suv',
    name: ' 奔驰 GLE 350 4MATIC',
    price: '699800',
    coverImage: '/src/assets/images/F-03.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 豪华越野，大气与性能的完美交融 ',
    alt: ' 奔驰 GLE 350 4MATIC',
  },
  {
    id: 10,
    category: 'suv',
    name: ' 奔驰 GLS 480 4MATIC',
    price: '1098000',
    coverImage: '/src/assets/images/G-01.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 全尺寸奢享，格局与尊贵的极致彰显 ',
    alt: ' 奔驰 GLS 480 4MATIC',
  },
  {
    id: 11,
    category: 'suv',
    name: ' 奔驰 G 500',
    price: '1424800',
    coverImage: '/src/assets/images/G-02.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 越野传奇，硬朗与豪华的经典碰撞 ',
    alt: ' 奔驰 G 500',
  },
  {
    id: 12,
    category: 'suv',
    name: ' 奔驰 EQC 400 4MATIC',
    price: '499800',
    coverImage: '/src/assets/images/G-03.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 电动越野，环保与驾趣的创新融合 ',
    alt: ' 奔驰 EQC 400 4MATIC',
  },

  // AMG系列
  {
    id: 13,
    category: 'amg',
    name: ' 奔驰 AMG C 63 S',
    price: '988800',
    coverImage: '/src/assets/images/G-04.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 性能猛兽，激情与精准的硬核结合 ',
    alt: ' 奔驰 AMG C 63 S',
  },
  {
    id: 14,
    category: 'amg',
    name: ' 奔驰 AMG E 53 4MATIC+',
    price: '939800',
    coverImage: '/src/assets/images/H-01.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 优雅性能，格调与爆发力的巧妙平衡 ',
    alt: ' 奔驰 AMG E 53 4MATIC+',
  },
  {
    id: 15,
    category: 'amg',
    name: ' 奔驰 AMG GT 63 S 4MATIC+',
    price: '1688000',
    coverImage: '/src/assets/images/H-02.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 赛道基因，速度与奢华的巅峰融合 ',
    alt: ' 奔驰 AMG GT 63 S 4MATIC+',
  },
  {
    id: 16,
    category: 'amg',
    name: ' 奔驰 AMG G 63',
    price: '2229800',
    coverImage: '/src/assets/images/H-03.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 越野王者，强悍与尊贵的顶级呈现 ',
    alt: ' 奔驰 AMG G 63',
  },
  {
    id: 17,
    category: 'amg',
    name: ' 奔驰 AMG CLA 35 4MATIC',
    price: '478800',
    coverImage: '/src/assets/images/H-04.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 动感性能，颜值与操控的出色适配 ',
    alt: ' 奔驰 AMG CLA 35 4MATIC',
  },
  {
    id: 18,
    category: 'amg',
    name: ' 奔驰 AMG A 45 S 4MATIC+',
    price: '498800',
    coverImage: '/src/assets/images/H-05.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    desc: ' 小钢炮标杆，灵活与爆发力的完美统一 ',
    alt: ' 奔驰 AMG A 45 S 4MATIC+',
  },
]
let serviceInfo = []
export default [
  // 所有车型接口
  {
    url: '/api/car/all',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: '获取所有车型成功',
        data: {
          carData,
        },
      }
    },
  },
  // 收藏/取消收藏车辆
  {
    url: '/api/car/collect',
    method: 'post',
    response: (request) => {
      // 通过 request 参数获取请求信息
      // 1. 从请求体中获取 id（POST 数据通常在 request.body 中）
      const { id } = request.body // 假设前端传参格式为 { id: 1 }

      // 2. 查找对应的车辆
      const currentCar = carData.find((item) => item.id === id)
      // 取反
      currentCar.isCollect = !currentCar.isCollect
      // 3. 根据查找结果返回响应
      if (currentCar) {
        return {
          code: 0,
          message: `处理收藏成功：${currentCar.name}`,
          data: { id: currentCar.id, isCollect: currentCar.isCollect }, // 可返回额外数据
        }
      } else {
        return {
          code: -1,
          message: `未找到 ID 为 ${id} 的车辆`,
        }
      }
    },
  },
  // 初始化收藏
  {
    url: '/api/car/returnCollect',
    method: 'post',
    response: () => {
      carData.forEach((item) => {
        item.isCollect = false
      })
      return {
        code: 0,
        message: '清空收藏夹成功',
      }
    },
  },
  // 存储服务信息
  // 增
  {
    url: '/api/car/service/add',
    method: 'post',
    response: (request) => {
      const { username, type, carName, serviceDate, status } = request.body
      const newItem = {
        id: Mock.Random.guid(),
        username,
        type,
        carName,
        serviceDate,
        status,
      }
      serviceInfo.push(newItem)
      // 模拟审核  前端组件内也用 setTimeout 模拟
      setTimeout(() => {
        newItem.status = '审核通过'
      }, 5000)
      return {
        code: 0,
        message: '添加成功',
      }
    },
  },
  // 获取自己账户所有服务信息
  {
    url: '/api/car/service/all',
    method: 'get',
    response: (request) => {
      const username = request.query.username //从get参数中获取
      const currentUserServiceInfo = serviceInfo.filter((item) => item.username === username)
      return {
        code: 0,
        message: '获取成功',
        data: {
          currentUserServiceInfo,
        },
      }
    },
  },
  // 取消服务
  {
    url: '/api/car/service/cancel',
    method: 'post',
    response: (request) => {
      const { id } = request.body
      serviceInfo = serviceInfo.filter((item) => item.id !== id)
      return {
        code: 0,
        message: '取消成功',
        data: { serviceInfo },
      }
    },
  },
]
