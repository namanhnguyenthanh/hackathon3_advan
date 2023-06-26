import React, { Component } from "react";

export default class ChildrenComp extends Component {
  // State:
  // State dùng để lưu trữ dữ liệu trong component đó => có thể tháy đổi được thông dử liệu
  // Để sử dụng được state cần khai báo lớp bằng constructor
  // và sử dụng super để gọi lớp
  // Để cập nhật lại state  => sử dụng setState
  constructor() {
    super();
    this.state = {
      studentA: "Nam Anh",
      question: " Có hay trốn không ?",
      anwser: "Không",
      display: true,
    };
    this.handleChangeState = this.handleChangeState.bind(this);
  }
  // Sử dụng Arrow function
  // handleChangeState = () => {
  //   this.setState({
  //     anwser: "Có",
  //   });
  // };

  //Sử dụng với function thường
  handleChangeState() {
    this.setState({
      anwser: "Có",
    });
  }

  handleToggleDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  };
  render() {
    return (
      <div>
        <h2>
          {this.props.titleParent} - Khóa học:{this.props.course}
        </h2>
        <p>{this.props.children}</p>
        <h2>State</h2>
        <p>{this.state.studentA}</p>
        <p>
          {this.state.question} - {this.state.anwser}
        </p>
        {/* Quy tắc đặt tên
        với các hàm sử lý 1 việc gì đó sẽ có tiền tố trươc là handle
        với các hàm xử lý 1 sự kiện gì đó sẽ có tiền tố là on */}
        <button onClick={this.handleChangeState}>Click</button>
        {/* Cập nhật State liên tục */}

        {this.state.display ? (
          <div>
            <p>Anh Bách cọp sp có nhiệt tình không </p>
            <p>Có</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        ) : (
          <div>
            <p>Anh Bách cọp sp có nhiệt tình không </p>
            <p>Rất nhiệt tình</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        )}
      </div>
    );
  }
}
