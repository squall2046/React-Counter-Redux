import React, { Component } from "react";
// import API from "./utils/API";
import "./App.css";
import { INCREMENT, DECREMENT } from "./redux/action-types";

export default class App extends Component {

  increment = () => {
    // 1. get <select> option
    const number = this.select.value * 1
    // 注意!!! value*1 是因为 value 是一个 string,
    // 要想让它做 count, 必须是 int 或 float,
    // 所以让它 *1, JavaScript 会把 string 变成 int
    // when string 和 int 两种 type 做加减乘除时.
    // 相当于, parseInt(this.select.value) 的捷径.

    // 2. get state from store, set new count state
    this.props.store.dispatch({ type: INCREMENT, data: number })
  }
  decrement = () => {
    const number = this.select.value * 1
    this.props.store.dispatch({ type: DECREMENT, data: number })

  }
  incrementIfOdd = () => {
    const number = this.select.value * 1
    const count = this.props.store.getState()
    if (count % 2 === 1) {
      this.props.store.dispatch({ type: INCREMENT, data: number })
    }
  }
  incrementAsync = () => {
    const number = this.select.value * 1
    // const count = this.props.store.getState()
    setTimeout(() => {
      this.props.store.dispatch({ type: INCREMENT, data: number })
    }, 1000)
  }

  render() {
    const count = this.props.store.getState()
    return (
      <div>
        <p>clicked {count} time(s)</p>
        <div>
          <select ref={(select => this.select = select)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    );
  }
}