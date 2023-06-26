// rfce và rfc

import React, { useState } from "react";

function DemouseState() {
  // có 2 loại components: class component & functional component
  // từ phiên bản 16.8.x đã chuyển sang sử dụng function component
  // Cách khai báo State trong function component

  //   const [nameState, setNameState] = useState("Hello World");
  //   console.log(nameState);

  // Trong đó:
  // + nameState: là tên state
  // + setNameState: là 1 hàm để thay đổi lại giá trị cho nameState
  // + initState: là giá trị khởi tạo ban đầu
  // Kiểu dữ liệu:
  // Kiểu dữ liệu nguyên thủy: number, string, bolean, ...
  // number:
  const [count, setCount] = useState(0);
  // String :
  const [text, setText] = useState("Hello World");
  const handleChangeState = () => {
    setText("Hello React");
  };
  // Boolean:
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  // Các kiểu dữ liệu phức tạp:
  // Array:
  const [arrList, setArrList] = useState([1, 2, 3, 4]);
  const handleRandomNumber = () => {
    setArrList([...arrList, Math.floor(Math.random() * 10)]);
  };
  //Array + Object:
  const [listUser, setListUser] = useState([
    {
      id: 1,
      name: "Nguyen Van A",
      age: 20,
    },
    {
      id: 2,
      name: "Nguyen Van B",
      age: 24,
    },
    {
      id: 3,
      name: "Nguyen Van C",
      age: 30,
    },
  ]);
  // Object:
  const [objList, setObjList] = useState({
    objCount: 10,
    objArray: [1, 3, 5, 7],
  });
  const handleRandom = () => {
    setObjList({
      objCount: objList.objCount,
      objArray: [...objList.objArray, Math.floor(Math.random() * 10)],
    });
  };

  return (
    <div>
      <h2>Demo useState</h2>
      <h3>Number:</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <h3>String:</h3>
      <p>{text}</p>
      <button onClick={handleChangeState}>Change State</button>
      <h3>Boolean:</h3>
      <p>{toggle ? <div>Hello World</div> : <div>Hello React</div>}</p>
      <button onClick={handleToggle}>Click</button>
      <h3>Array:</h3>
      <p>{arrList.toString()}</p>
      <button onClick={handleRandomNumber}>Random Number</button>
      <hr />
      <h3> Array + Object:</h3>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>

        {listUser.map((e, i) => (
          <tr key={i}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
          </tr>
        ))}
      </table>
      <h3>Object:</h3>
      <p>{objList.objCount}</p>
      <button
        onClick={() =>
          setObjList({
            objCount: objList.objCount + 1,
            objArray: objList.objArray,
          })
        }
      >
        Up
      </button>
      <button
        onClick={() =>
          setObjList({
            objCount: objList.objCount - 1,
            objArray: objList.objArray,
          })
        }
      >
        Down
      </button>
      <p>{objList.objArray.toString()}</p>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}

export default DemouseState;
