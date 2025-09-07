import axios from 'axios'
// 获取所有车型信息
export const getAllCarApi = async () => {
  const res = await axios.get('/api/car/all')
  return res.data
}
// 收藏车辆
export const addCollectApi = async (id) => {
  const res = await axios.post('/api/car/collect', { id })
  return res.data
}

// 初始化收藏
export const returnCollectApi = async () => {
  await axios.post('/api/car/returnCollect')
}
