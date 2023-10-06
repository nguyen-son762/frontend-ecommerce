import { toCamel } from '@/utils/convert'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000/api/',
  headers: {
    'Content-Type': 'application/json',
    timeout: 1000,
    'tg-device-id': 'c922b7c59baa2d55',
  },
})

api.interceptors.request.use(
  (request) => {
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return toCamel(response.data)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
