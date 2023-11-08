import handelNum from './index'
let reducer = (state = {
  ...handelNum.state
}, actions: {
  type: string, val: number
}) => {
  // 
  let newState = JSON.parse(JSON.stringify(state))  //拿到的state数据
  // 方案优化
  for (let key in handelNum.actionNames) {
    // 如果相等执行对应的函数
    if (actions.type === handelNum.actionNames[key]) {
      handelNum.actions[handelNum.actionNames[key]](newState, actions)
      break
    }
  }
  return newState
}
export default reducer
