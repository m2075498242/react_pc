import style from "./login.module.scss"
import initLogin from './init'
import { useNavigate } from 'react-router-dom'
import { Input, Space, Button, message } from "antd"
import { ChangeEvent, useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { captchaApi, loginApi } from "@/request/api";
export default function Login() {
  let NavigateTo = useNavigate()
  useEffect(() => {
    initLogin()
    window.onresize = function () { initLogin() }
    // changeImg()
  }, [])
  // 获取仓库数据
  const { num } = useSelector((state: RootState) => ({
    num: state.num,
  }))
  // 加载完这个组件后
  const [userVal, setUser] = useState('')
  const [pwdVal, setPwd] = useState('')
  const [captch, setCaptch] = useState('')
  // 保存验证码图片集
  const [saveCaptch, setSaveCaptch] = useState('')
  const changeUser = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }
  const changePwd = (e: ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value)
  }
  const changeCaptch = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptch(e.target.value)
  }
  const login = async () => {
    if (!userVal || !pwdVal) {
      return message.warning('请将信息输入完整')
    }
    // 登录
    // let res = await loginApi({
    //   username: userVal,
    //   password: pwdVal,
    //   code: captch,
    //   uuid: localStorage.getItem('uuid') as string
    // })
    message.success('登录成功')
    NavigateTo('/Home')
    // if (res.code === 200) {
    //   message.success('登录成功')
    //   // 提示 保存token 跳转 删除本地保存的uuid
    //   localStorage.setItem('token', res.token)
    //   NavigateTo('/page1')
    //   localStorage.removeItem('uuid')
    // }
  }
  // const changeImg = async () => {
  //   let res = await captchaApi()
  //   if (res.code === 200) {
  //     setSaveCaptch('data:image/png;base64,' + res.img)
  //     // 存储uuid
  //     localStorage.uuid = res.uuid
  //     console.log(res);
  //   }
  // }
  // 发送登录请求
  return (
    <div className={style.login}>
      <canvas id="canvas"></canvas>
      {/* 登录盒子 */}
      <div className={style.loginBox}>
        {/* 标题部分 */}
        <div className={style.title}>
          <h1>前端龙哥  通用后台系p统{num}</h1>
          <p>Welcome</p>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Input maxLength={20} onChange={changeUser} placeholder="用户名" />
            <Input.Password onChange={changePwd} placeholder="密码" />
            {/* <div className="captchBox">
              <Input onChange={changeCaptch} maxLength={6} className="captch" placeholder="验证码" />
              <div className="img">
                <img height={30} onClick={changeImg} src={saveCaptch} alt="" />
              </div>
            </div> */}
            <Button onClick={login} type="primary" block>
              登录
            </Button>
          </Space>
        </div>
      </div>

    </div>
  )
}
