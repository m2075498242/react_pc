// 专门存放数据
const store = {
  state: {
    arr: [1, 2, 3, 4, 5, 6,]
  },
  actions: {
    arrPush(newState: { arr: number[] }, actions:
      { type: string, val: number }) {
      newState.arr.push(actions.val)
    },
  },
  actionNames: {},
  // 名字统一管理
}
let actionNames = {}
for (let key in store.actions) {
  actionNames[key] = key
}
store.actionNames = actionNames
export default store