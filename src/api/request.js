import axios from 'axios'
import API_HOST from './host'

const instance = axios.create({
  baseURL: API_HOST,
  withCredentials: true,
  timeout: 1000 * 12,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.error(error)
)

// 添加响应拦截器
instance.interceptors.response.use(
  // 响应成功
  res => {
    if (res.status === 200) {
      // let { code, message } = res.data

      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    const { response } = error
    if (response) { // 收到响应，但是不在2xx的范围 
      let code = response.status

      return Promise.reject(response);
    } else { // 请求超时或断网时

    }
  }
)

export default instance