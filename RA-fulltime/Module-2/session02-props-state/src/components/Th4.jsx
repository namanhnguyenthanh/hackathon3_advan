import React, { Component } from "react";

export default class Th4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleCount = this.handleCount.bind(this);
  }
  handleCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <p>Số lần bấm của bạn là : {this.state.count}</p>
        <button onClick={this.handleCountf3}>Click Me</button>
      </div>
    );
  }
}
