import { useState, useEffect } from 'react'
import { useRoutes, useLocation, useNavigate, Link } from 'react-router-dom'
import { message } from "antd"
import router from './router'
// 去登陆
function Login() {
  const navigate = useNavigate()
  // 加载完这个组件实现跳转
  useEffect(() => {
    navigate('/login')
    message.error('请重新登录')
  }, [])
  return <div></div>
}
// 登录成功
function ToPage() {
  const navigate = useNavigate()
  // 加载完这个组件实现跳转
  useEffect(() => {
    navigate('/page1')
    message.warning('你已经登录过了')
  }, [])
  return <div></div>
}
function BeforeRouterEnter() {
  const Outlet = useRoutes(router)
  const location = useLocation()
  let token = localStorage.getItem('token')
  console.log(location.pathname === '/login' && token);

  if (location.pathname === '/login' && token) {
    return <ToPage />
  }
  if (location.pathname !== '/login' && !token) {
    return <Login />
  }
  return Outlet
}
function App() {
  return (
    <div className="App">
      {/* 占位符组件，类似于窗口，用来展示组件，有点像router-view */}
      <BeforeRouterEnter />
    </div>
  )
}

export default App
