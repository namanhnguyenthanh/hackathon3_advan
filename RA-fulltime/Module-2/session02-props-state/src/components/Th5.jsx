import React, { Component } from "react";

export default class Th5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
    };
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  handleChangeInputValue(event) {
    this.setState({ textInput: event.target.value });
  }
  handleSubmitForm(event) {
    event.preventDefault();
    alert("Bạn vừa nhập:" + " " + this.state.textInput);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <input
            value={this.state.textInput}
            onChange={this.handleChangeInputValue}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
