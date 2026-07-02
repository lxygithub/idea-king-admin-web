import axios from 'axios'

// API base URL - change this to your server address
const API_BASE = import.meta.env.VITE_API_BASE || 'http://192.227.212.20:18900/api/admin'

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('admin_user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
