import React, { Component } from 'react'

 class DemoJSX extends Component {
  render() {
    const greeting = "Hello world !!!"
    const people = {
        name: "Nam Anh",
        course: "ReactJS"
    }
    return (
    <div>
        {/* phép nội suy trong JSX */}
        {/*  Lưu ý:
        + class => className ví dụ className = ""
        + cá thuộc tính sẽ được viết theo camelCase ví dụ: background-color => backgroundColor
        + các sự kiện cũng sẽ viết theo camelCase ví dụ: onclick => onClick, onchange => onChange
        */}
      <h2 style={{backgroundColor:"pink", color:"white"}}>{greeting}</h2>
      <p>studentName:{people.name} - Khóa học:{people.course}</p>
    </div>
    )
  }
}
export default DemoJSX
