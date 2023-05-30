import Request from './request/request'
import type { AxiosResponse } from 'axios'
import type { RequestConfig } from './request/types'

export interface ThisResponse<T> {
  // statusCode?: number
  // desc?: string
  // result?: T
  data?: T
}

// 重写返回类型
interface ThisRequestConfig<T, R> extends RequestConfig<ThisResponse<R>> {
  data?: T
}

const request = new Request({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_API_BASE_TIME_OUT,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    }
  }
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {ThisRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const ThisRequest = <D = any, T = any>(config: ThisRequestConfig<D, T>): Promise<ThisResponse<T>> => {
  const { method = 'GET' } = config
  if (method.toUpperCase() === 'GET') {
    config.params = config.data
  }
  return request.request<ThisResponse<T>>(config)
}

// // 取消请求
// export const cancelRequest = (url: string | string[]) => {
//   return request.cancelRequest(url)
// }
// // 取消全部请求
// export const cancelAllRequest = () => {
//   return request.cancelAllRequest()
// }

export default ThisRequest
