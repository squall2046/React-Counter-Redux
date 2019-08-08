import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from './redux/store'


function render() {
    ReactDOM.render(<App store={store} />, document.getElementById("root"));
}
// render 渲染, render()初始化渲染
render()

// 监听store, store 中的 state 一旦发生变化,就会自动重绘
store.subscribe(render)