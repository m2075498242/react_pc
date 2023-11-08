// import store from '@/store';  //类型声明文件不要直接使用import
// 使用import('@/store')语法引入
type RootState = ReturnType<typeof import('@/store').getState>
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: function;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function;
}