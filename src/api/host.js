// 接口域名切换
let API_HOST

switch (process.env.VUE_APP_ENV) {
  // 生产环境
  case 'master':
    API_HOST = '/'
    break
  // 测试环境
  case 'test':
    API_HOST = '/'
    break
  // 本地环境
  default:
    API_HOST = '/dev'
    break
}

export default API_HOST
