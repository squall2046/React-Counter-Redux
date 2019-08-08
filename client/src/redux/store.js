import { createStore } from 'redux'
import { counter } from './reducers'

const store = createStore(counter) //内部第一次调用reducer函数,得到初始state值
console.log(store, store.getState())

export default store 