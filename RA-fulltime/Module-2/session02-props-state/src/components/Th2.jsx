import React, { Component } from "react";

export default class Th2 extends Component {
  render() {
    return (
      <div>
        <button
          style={{
            background: this.props.background,
            color: this.props.color,
          }}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}
