import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化
import 'reset-css'
// UI框架样式

// 全局样式
// import './assets/style/global.scss'
import "@/assets/style/global.scss"
// 组件样式
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// 状态管理
import { Provider } from 'react-redux'
import stroe from '@/store'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={stroe}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>,
)
