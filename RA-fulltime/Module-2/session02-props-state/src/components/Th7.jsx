import React, { Component } from "react";

export default class Th7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      isShow: true,
      fontSize: 12,
      content: "Hello World",
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleToggle() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  handleChange() {
    this.setState({
      color: this.state.color === "black" ? "pink" : "black",
    });
  }
  render() {
    return <div>Th7</div>;
  }
}
