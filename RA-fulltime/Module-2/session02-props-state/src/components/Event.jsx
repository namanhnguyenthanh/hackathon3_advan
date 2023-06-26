import React, { Component } from "react";

export default class Event extends Component {
  // event with arrow funtion
  handleClick01 = () => {
    console.log("Click1");
  };
  // Trong JSSX khi sử dụng 1 sự kiện => nếu suwrw dụn handleClick02()
  // thì hàm sẽ chạy ngay sau khi component render
  handleClick02 = () => {
    console.log("Click2");
  };
  handleClick03 = () => {
    console.log("Click3");
  };
  handleClick04 = (element) => {
    console.log("Click4");
    console.log(element);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick01}>Click1</button>
        <button onClick={this.handleClick02()}>Click2</button>
        <button onClick={() => this.handleClick03}>Click3</button>
        <button onClick={() => this.handleClick04("Hello World")}>
          Click4
        </button>
      </div>
    );
  }
}
