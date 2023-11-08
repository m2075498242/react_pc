import request from './index'
// 验证码请求
// ts请求中 请求参数和返回值的类型都要约束
export const captchaApi = (): Promise<CaptchaApiRes> => request.get('/prod-api/captchaImage')
export const loginApi = (params: LoginApiReq): Promise<LoginApiRes> => request.post('/prod-api/login', params)