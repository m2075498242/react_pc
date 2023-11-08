import handelArr from './index'
let reducer = (state = {
  ...handelArr.state
}, actions: {
  type: string, val: number
}) => {
  // 
  let newState = JSON.parse(JSON.stringify(state))  //拿到的state数据
  // 方案优化
  for (let key in handelArr.actionNames) {
    // 如果相等执行对应的函数
    if (actions.type === handelArr.actionNames[key]) {
      handelArr.actions[handelArr.actionNames[key]](newState, actions)
      break
    }
  }
  for (let key in handelArr.actionNames) {
    if (actions.type === handelArr.actionNames[key]) {
      handelArr.actions[handelArr.actionNames[key]](newState, actions)
      break
    }
  }
  return newState
}
export default reducer
