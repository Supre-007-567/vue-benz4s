import axios from 'axios'

export const getAllCarApi = async () => {
  const res = await axios.get('/api/car/all')
  return res.data
}
