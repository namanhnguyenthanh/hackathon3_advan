import React, { Component } from 'react'

export default class MD02S01BTBai02 extends Component {
    
  render() {
    const number = {
        number1: 3,
        number2: 4
      };
      let sum = number.number1 + number.number2;
    return (
        <div>
        <h1>Tổng của {number.number1} và {number.number2} là: {sum}</h1>
      </div>
    )
  }
}
