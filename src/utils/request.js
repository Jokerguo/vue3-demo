import axios from "axios";
import { ElMessage } from "element-plus";

// const baseURL = import.meta.env.VITE_BASE_URL
const baseURL = '/api'
const server = axios.create({
  // 配置
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    'Cache-Control': 'no-cache'
  }
})

const pending = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const whiteList = [] // 不取消的接口list
const CancelToken = axios.CancelToken
const removePending = ever => {
  for (const p in pending) {
    if (pending[p].u === ever.url + '&' + ever.method) {
      // 当当前请求在数组中存在时执行函数体
      pending[p].f() // 执行取消操作
      pending.splice(p, 1) // 把这条记录从数组中移除
    }
  }
}

// 请求拦截
server.interceptors.request.use(config => { 
  // 请求头加token
  if (localStorage.getItem('token')) { 
    config.headers.token = localStorage.getItem('token')
  }
  // 白名单内的接口可重复请求
  if (whiteList.indexOf(config.url) === -1) {
    removePending(config) // 在一个ajax发送前执行一下取消操作
    config.cancelToken = new CancelToken(c => {
      // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
      pending.push({ u: config.url + '&' + config.method, f: c })
      // console.log([...pending])
    })
  }
  return config
}, error => { 
  console.log(error)  // for debug
  return Promise.reject(error)
})

// 响应拦截
server.interceptors.response.use(response => { 
  const res = response.data
  // 根据返回状态 处理返回的数据
  if (!res.code && response.headers['content-type'] !== 'application/json') {
    // 非json格式
    return response
  } else if (res.code === 0) {
    // 正常json数据返回
    return res
  } else { 
    // 报错返回
    showError(res)
    return Promise.reject(res)
  }
}, error => { 
  const msg = error.msg || error
  const code = 404 // 要截取
  showError({code,message:msg})
  return Promise.reject(error)
})

// 错误处理
const showError = error => { 
  // 根据code做对应处理
  if (error.code === 403) {
    // 清空缓冲 跳转登录页
  } else {
    if (error.msg) { 
      ElMessage({
        message: error.msg,
        type: 'error',
        duration: 3000
      })
    }
   }
}

export default server