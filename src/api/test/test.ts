import ThisRequest from '@/service'
import type { Req, Res } from '../type/testType'

export function testRequest(data: Req) {
  return ThisRequest<Req, Res>({
    url: '',
    method: 'GET',
    data,
    interceptors: {
      // 实例拦截器
      requestInterceptors(res) {
        console.log('接口请求拦截')
        return res
      },
      responseInterceptors(result) {
        console.log('接口响应拦截')
        return result
      }
    }
  })
}
