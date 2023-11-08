// 专门存放数据
const store = {
  state: {
    num: 20000,
    name: '孙悟空'
  },
  actions: {  // 只用来放同步方法
    add(newState: { num: number }, actions:
      { type: string }) {
      // setTimeout(() => {
      newState.num++
      // }, 2000);
    },
    add2(newState: { num: number }, actions:
      { type: string, val: number }) {
      newState.num += actions.val
    },
    add3(newState: { num: number }, actions:
      { type: string, val: number }) {
      newState.num += actions.val
    },
  },
  asyncActions: { // 用来放异步方法
    asyncAdd(dispatch: Function) {
      setTimeout(() => {
        dispatch({ type: 'add' })
      }, 1000)
    }
  },
  // 名字统一管理
  actionNames: {
  }
}
let actionNames = {}
for (let key in store.actions) {
  actionNames[key] = key
}
store.actionNames = actionNames
export default store