import React, { Component } from "react";

export default class Th6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      array: [],
      total: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handeleChangeInput = this.handeleChangeInput.bind(this);
  }
  handeleChangeInput(e) {
    this.setState({
      number: +e.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      array: [...this.state.array, this.state.number],
      total: this.state.total + this.state.number,
      number: "",
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.number}
            onChange={this.handeleChangeInput}
          />
          <button type="submit">Add</button>
        </form>
        <span>Kết quả:</span>
        <div style={{ color: "red" }}>
          {this.state.array.join("+") + "=" + this.state.total}
        </div>
      </div>
    );
  }
}
