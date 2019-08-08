import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createStore } from 'redux'
import { counter } from './redux/reducers'

const store = createStore(counter) //内部第一次调用reducer函数,得到初始state值
console.log(store, store.getState())

function render() {
    ReactDOM.render(<App store={store} />, document.getElementById("root"));
}
// render 渲染, render()初始化渲染
render()

// 监听store, store 中的 state 一旦发生变化,就会自动重绘
store.subscribe(render)