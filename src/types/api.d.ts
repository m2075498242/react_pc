// 定义接口请求和响应的参数类型
// JSON TO TS 快速转换 将JSON 转换为 TS类型 
// 快捷键: ctrl + shift + alt + v

// 验证码相应请求参数约束
interface CaptchaApiRes {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}
// 登录请求约束
interface LoginApiReq {
  username: string;
  password: string;
  code: string;
  uuid: string;
}
// 登录响应类型约束
interface LoginApiRes {
  msg: string;
  code: string;
  code: string;
  token: string;
}
