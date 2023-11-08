import { useState } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    label: '商品',
    key: '/page1',
    icon: <PieChartOutlined />,
  },
  {
    label: '采购',
    key: '/page2',
    icon: <DesktopOutlined />,
  },
  {
    label: 'User',
    key: 'page3',
    icon: <UserOutlined />,
    children: [
      {
        label: 'Tom',
        key: '/page3/page3-1',
      },
      {
        label: 'Bill',
        key: '/page3/page3-2',
      },
      {
        label: 'Alex',
        key: '/page3/page3-3',
      },
    ],
  },
  {
    label: 'Team',
    key: 'sub2',
    icon: <UserOutlined />,
    children: [
      {
        label: 'Team 1',
        key: '/sub2/sub2-1',
      },
      {
        label: 'Team 2',
        key: '/sub2/sub2-2',
      },
      {
        label: 'Alex',
        key: '/sub2/sub2-3',
      },
    ],
  },
  {
    label: 'Files',
    key: '9',
    icon: <FileOutlined />,
    // children?: MenuItem[],
  },
]
const Comp: React.FC = () => {
  const navigateTo = useNavigate()  //必须写在组件里面
  const currentRoute = useLocation()  //当前选中的路径

  // const mapArr = items.map(item => {
  //   if (item.children && item.children.length > 0) {
  //     return item.children.find(i => i.key === currentRoute.pathname)

  //   }
  // })
  // let firstOpenKey: string = ""
  // function findKey(obj: { key: string }) {
  //   return obj.key === currentRoute.pathname
  // }
  // // 对比
  // for (let i = 0; i < items.length; i++) {
  //   if (items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)) {
  //     firstOpenKey = items[i]!.key as string
  //     break
  //   }
  // }
  // items.find(findKey)
  const clickSidber = (e: { key: string }) => {
    console.log('点击了菜单', e.key);
    // 点击跳转对应路由  编程导航跳转  利用到一个hook useNavigate
    navigateTo(e.key)
  }
  const [keyArr, setKeyArr] = useState([''])  //展开项  ts内容为string   
  const handleOpenChange = (openKeys: string[]) => {
    console.log(openKeys);  //记录了当前哪一项是展开的 ,用他们的key来记录[]
    // setKeyArr([openKeys[openKeys.length - 1]])  
    setKeyArr([openKeys[openKeys.length - 1]])  // 此处打印无效 因为 setState是异步
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      onClick={clickSidber}
      onOpenChange={handleOpenChange}
      // 当前展开项的数组
      openKeys={keyArr}
    />
  )
}
export default Comp
