import React, { Component } from "react";
// import API from "./utils/API";
import "./App.css";
// import { increment, decrement } from "./redux/actions"
import * as action from "./redux/actions"

export default class App extends Component {

  increment = () => {
    // 1. get <select> option
    // const number = parseInt(this.select.value)
    const number = this.select.value * 1
    // 2. get state from store, set new count state
    this.props.store.dispatch(action.increment(number))
  }

  decrement = () => {
    const number = this.select.value * 1
    this.props.store.dispatch(action.decrement(number))
  }

  incrementIfOdd = () => {
    const number = this.select.value * 1
    const count = this.props.store.getState()
    if (count % 2 === 1) {
      this.props.store.dispatch(action.increment(number))
    }
  }

  incrementAsync = () => {
    const number = this.select.value * 1
    // const count = this.props.store.getState()
    setTimeout(() => {
      this.props.store.dispatch(action.increment(number))
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