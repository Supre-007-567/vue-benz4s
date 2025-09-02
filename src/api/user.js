import axios from 'axios'

export const loginApi = async (obj) => {
  const res = await axios.post('/api/auth/login', obj)
  return res.data
}

export const registerApi = async (obj) => {
  const res = await axios.post('/api/auth/register', obj)
  return res.data
}
