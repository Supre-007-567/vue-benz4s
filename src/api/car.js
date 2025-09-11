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

// 服务数据
// 增
export const addServiceApi = async (obj) => {
  const res = await axios.post('/api/car/service/add', { ...obj })
  return res.data
}

// 获取所有当前用户的服务数据
export const getServiceInfo = async (username) => {
  const res = await axios.get('/api/car/service/all', { params: { username } })
  return res.data
}

// 取消服务
export const cancelServiceApi = async (id) => {
  const res = await axios.post('/api/car/service/cancel', { id })
  return res.data
}
