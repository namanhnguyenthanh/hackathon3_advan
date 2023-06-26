import React, { Component } from "react";
import ChildrenComp from "./ChildrenComp";

export default class ParentComp extends Component {
  // Props:
  // Props là viết tắt cẩu properties
  // Props dùng để lưu trữ các attribute
  // Giá trị props không thể thay đổi
  // Props dùng để giao tiếp giữa các component với nhau ( ví dụ: từ cha xuống con )

  //ParentComp => ChildrenComp
  render() {
    const title ="Rikkei Academy"
    return (
      <div>
        <ChildrenComp titleParent = {title} course = {"ReactJS"} >
          Time: 15 buổi
        </ChildrenComp>
      </div>
    );
  }
}
