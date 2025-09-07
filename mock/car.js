// import Mock from 'mockjs'
// 所有车型
const carData = [
  // 轿车系列
  {
    id: 1,
    category: 'sedan',
    name: '奔驰 CLA 180 L 运动版',
    price: '325200',
    coverImage: '/src/assets/images/detail/CLA_180_Progressive_Coupe/10031.png',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰C 180 L 运动版',
  },
  {
    id: 2,
    category: 'sedan',
    name: '奔驰 E 200 L 豪华版',
    price: '369800',
    coverImage: '/src/assets/images/detail/E_200_AVANTGARDE_Mercedes-Benz/10002.png',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰 E 200 L 豪华版',
  },
  {
    id: 3,
    category: 'sedan',
    name: '奔驰 EQA 150 L 豪华型',
    price: '448800',
    coverImage: '/src/assets/images/detail/EQA_250+_Progressive_Mercedes-Benz/10034.png',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰E 300 L 豪华型',
  },
  {
    id: 4,
    category: 'sedan',
    name: '奔驰 E 260 L 运动版',
    price: '419800',
    coverImage: '/src/assets/images/E-01.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰E 260 L 运动版',
  },
  {
    id: 5,
    category: 'sedan',
    name: '奔驰 S 500 L 4MATIC',
    price: '946800',
    coverImage: '/src/assets/images/E-02.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰S 500 L 4MATIC',
  },
  {
    id: 6,
    category: 'sedan',
    name: '奔驰 EQS 580 4MATIC',
    price: '1079800',
    coverImage: '/src/assets/images/E-03.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰EQS 580 4MATIC',
  },

  // SUV系列
  {
    id: 7,
    category: 'suv',
    name: '奔驰 GLC 260 L 4MATIC',
    price: '427800',
    coverImage: '/src/assets/images/F-01.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰GLC 260 L 4MATIC',
  },
  {
    id: 8,
    category: 'suv',
    name: '奔驰 GLC 300 L 4MATIC',
    price: '468800',
    coverImage: '/src/assets/images/F-02.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰GLC 300 L 4MATIC',
  },
  {
    id: 9,
    category: 'suv',
    name: '奔驰 GLE 350 4MATIC',
    price: '699800',
    coverImage: '/src/assets/images/F-03.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰GLE 350 4MATIC',
  },
  {
    id: 10,
    category: 'suv',
    name: '奔驰 GLS 480 4MATIC',
    price: '1098000',
    coverImage: '/src/assets/images/G-01.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰GLS 480 4MATIC',
  },
  {
    id: 11,
    category: 'suv',
    name: '奔驰 G 500',
    price: '1424800',
    coverImage: '/src/assets/images/G-02.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰G 500',
  },
  {
    id: 12,
    category: 'suv',
    name: '奔驰 EQC 400 4MATIC',
    price: '499800',
    coverImage: '/src/assets/images/G-03.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰EQC 400 4MATIC',
  },

  // AMG系列
  {
    id: 13,
    category: 'amg',
    name: '奔驰 AMG C 63 S',
    price: '988800',
    coverImage: '/src/assets/images/G-04.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰AMG C 63 S',
  },
  {
    id: 14,
    category: 'amg',
    name: '奔驰 AMG E 53 4MATIC+',
    price: '939800',
    coverImage: '/src/assets/images/H-01.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰AMG E 53 4MATIC+',
  },
  {
    id: 15,
    category: 'amg',
    name: '奔驰 AMG GT 63 S 4MATIC+',
    price: '1688000',
    coverImage: '/src/assets/images/H-02.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰AMG GT 63 S 4MATIC+',
  },
  {
    id: 16,
    category: 'amg',
    name: '奔驰 AMG G 63',
    price: '2229800',
    coverImage: '/src/assets/images/H-03.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰AMG G 63',
  },
  {
    id: 17,
    category: 'amg',
    name: '奔驰 AMG CLA 35 4MATIC',
    price: '478800',
    coverImage: '/src/assets/images/H-04.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰AMG CLA 35 4MATIC',
  },
  {
    id: 18,
    category: 'amg',
    name: '奔驰 AMG A 45 S 4MATIC+',
    price: '498800',
    coverImage: '/src/assets/images/H-05.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    isCollect: false,
    alt: '奔驰AMG A 45 S 4MATIC+',
  },
]

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
]
