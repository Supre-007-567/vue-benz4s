// import Mock from 'mockjs'
// 所有车型
const carData = [
  // 轿车系列
  {
    id: 1,
    category: 'sedan',
    name: '奔驰 C级',
    price: '32.52 - 37.22 万',
    coverImage: '/src/assets/images/Abanner01.png',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    alt: '奔驰C级轿车',
  },
  {
    id: 2,
    category: 'sedan',
    name: '奔驰 E级',
    price: '44.01 - 56.95 万',
    coverImage: '/src/assets/images/Abanner02.jpeg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    alt: '奔驰E级轿车',
  },
  {
    id: 3,
    category: 'sedan',
    name: '奔驰 S级',
    price: '94.68 - 183.88 万',
    coverImage: '/src/assets/images/Abanner03.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    alt: '奔驰S级轿车',
  },

  // SUV系列
  {
    id: 4,
    category: 'suv',
    name: '奔驰 GLC',
    price: '42.78 - 53.13 万',
    coverImage: '/src/assets/images/Abanner04.png',
    alt: '奔驰GLC SUV',
  },
  {
    id: 5,
    category: 'suv',
    name: '奔驰 GLE',
    price: '69.98 - 88.98 万',
    coverImage: '/src/assets/images/Abanner05.jpg',
    alt: '奔驰GLE SUV',
  },
  {
    id: 6,
    category: 'suv',
    name: '奔驰 G级',
    price: '142.48 - 189.90 万',
    coverImage: '/src/assets/images/Abanner06.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    alt: '奔驰G级 SUV',
  },

  // AMG系列
  {
    id: 7,
    category: 'amg',
    name: '奔驰 AMG C 63',
    price: '98.88 万',
    coverImage: '/src/assets/images/Abanner07.jpg',
    detailImage1: '',
    detailImage2: '',
    detailImage3: '',
    alt: '奔驰AMG C 63',
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
]
