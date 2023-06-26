import React from "react";

function DemoReducer() {
  // Trong hook  useReducer được cung cấp như 1 sự lựa chọn để thay thế cho useState
  // useState được sủ dụng trong các compenents đơn giản
  // useRedecer được sử dụng các component phức tạp hơn
  // Khi sử dụng với useState:
  // B1: Khai báo giá trị ban đầu
  // B2: Action (up: count + 1, down: count - 1)
  // Khi sử dụng với reducer:
  // B1: Khai báo giá trị ban đầu
  // B2: Action (up: count + 1, down: count - 1)
  // B3: Reducer
  // B4: Dispatch
  // Ví dụ:
  // B1: Khai báo giá trị ban dầu (initialState)
  const initialState = 0;
  // B2: Khai báo các action
  const ACTION_UP = "UP";
  const ACTION_DOWN = "DOWN";
  // B3: Reducer
  // Tham số 1: là state hiện tại
  // Tham só 2: là action
  const reducer = (state, action) => {
    switch (action) {
      case ACTION_UP:
        return state + 1;
      case ACTION_DOWN:
        return state - 1;
      default:
        break;
        count[(count, dispatch)] = useReducer(reducer, initialState);
    }
  };
  return (
    <div>
      <h2> Demo useReducer</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(ACTION_UP)}>UP</button>
      <button onClick={() => dispatch(ACTION_DOWN)}>DOWN</button>
    </div>
  );
}

export default DemoReducer;
