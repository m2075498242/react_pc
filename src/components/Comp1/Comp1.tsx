import React from 'react'
// import './Comp1.scss'  全局式的引入
import styles from "./Comp1.module.scss"
import { Button, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons'
const Comp1 = () => {
  return (
    <div className={styles.box}>Comp1
      <div>
        <Space wrap>
          <Button>Default Button</Button>
          <Button type="primary">Primary Button</Button>
          <QuestionCircleOutlined style={{ fontSize: '40px', color: 'red' }} />
        </Space>
      </div>
    </div>
  )
}
export default Comp1 
