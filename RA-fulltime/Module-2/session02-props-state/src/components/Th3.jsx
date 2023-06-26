import React, { Component } from "react";

export default class Th3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          Click Mee
        </button>
        <br />
        <label>{this.state.value}</label>
      </div>
    );
  }
}
