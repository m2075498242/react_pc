// 专门存放数据
const store = {
  state: {
    // 发数据
  },
  actions: {  // 只用来放同步方法
  },
  asyncActions: { // 用来放异步方法
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