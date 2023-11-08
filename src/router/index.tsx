// import App from "../App";
// import About from "../views/About";
// import Home from "../views/Home";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
// //两种路由模式： BrowserRouter(History)  (HashRouter)
// const baseRouter = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="/" element={<Navigate to={'/home'} />} />     //  路由重定向到home页面
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter >
// )
// export default baseRouter
import Page1 from '@/views/Page1'
import Page2 from '@/views/Page2'
import Page3 from '@/views/Page3'
import Page3_1 from '@/views/Page3_1'
import Page3_2 from '@/views/Page3_2'
import Error from '@/pages/Error'
import React, { lazy } from 'react'
const Home = lazy(() => import('../views/Home'))
import { Navigate } from 'react-router-dom'
import Login from '@/views/login/Login'
// 懒加载必须加Loading 否则会报错
const withLoading = (comp: JSX.Element) =>
(<React.Suspense fallback={<div>Loading</div>}>
  {comp}
</React.Suspense>)
const routes = [
  // ncaught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition
  // 懒加载模式需要我们给他添加一个loading组件
  {
    path: '/',
    element: <Navigate to='/login' />  //Navigate重定向到 
  },
  // 嵌套路由的开始   /下面代表子路由
  {
    path: '/',
    element: <Home />,  //Navigate重定向到 
    children: [
      {
        path: '/page1',
        element: withLoading(<Page1 />)
      },
      {
        path: '/page2',
        element: withLoading(<Page2 />)
      },
      {
        path: '/page3/page3-1',
        element: withLoading(<Page3 />)
      },
      {
        path: '/page3/page3-2',
        element: withLoading(<Page3_1 />)
      },
      {
        path: '/page3/page3-3',
        element: withLoading(<Page3_2 />)
      },
      {
        path: '/404',
        element: <Error />  //Navigate重定向到 
      },
    ],
  },
  // 404页面配置 在访问其他页面的同时跳转404页面配置
  {
    path: '*',
    element: <Navigate to='/404' />  //Navigate重定向到 
  },
  {
    path: '/login',
    element: <Login />  //Navigate重定向到 
  },
]
export default routes