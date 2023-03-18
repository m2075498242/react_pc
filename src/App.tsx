import { useState } from 'react'
import Comp1 from './components/Comp1/Comp1'
import Comp2 from './components/Comp2/Comp2'
import { useRoutes, Link } from 'react-router-dom'
import router from './router'
function App() {
  const [count, setCount] = useState(0)
  const Outlet = useRoutes(router)
  return (
    <div className="App">
      {/* <Link to={'/about'}>about</Link>
      <Link to={'/home'}>home</Link>
      <Link to={'/user'}>user</Link> */}
      
      {/* 占位符组件，类似于窗口，用来展示组件，有点像router-view */}
      {/* <Outlet /> */}
      {Outlet}
    </div>
  )
}

export default App
