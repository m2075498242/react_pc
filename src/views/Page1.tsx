import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import stateNum from '../store/NumStatus/index'
import { Button } from 'antd';
export default function Page1() {
  // 获取仓库数据
  let { num, arr } = useSelector((state: RootState) => ({
    num: state.NumStatusReduces.num,
    arr: state.ArrStatusReduces.arr,
  }))
  // 修改state数据
  const dispatch = useDispatch()
  const add = () => {
    // 异步调用
    dispatch(stateNum.asyncActions.asyncAdd)
  }
  const chageArr = () => {
    dispatch({ type: 'arrPush', val: 200 })
  }

  return (
    <div>Page1{num}
      <Button type="primary" onClick={add}>
        修改state数据
      </Button>
      <Button type="primary" onClick={chageArr}>
        修改stateArr数据{arr}
      </Button>
    </div>
  )
}
