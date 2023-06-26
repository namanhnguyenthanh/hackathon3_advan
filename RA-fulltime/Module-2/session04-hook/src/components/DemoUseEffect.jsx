import React, { useEffect, useState } from "react";

function DemoUseEffect() {
  // useState dùng để thực hiện: callAPI, listen DOM event, update DOM, ...
  // useEffect được thay thế cho componentDidMount and componentDidUpdate:
  // Trong useEffect có 3 trường hợp:
  ////
  // 1. useEffect với (callback)
  // tính chất:
  // + useEffect sẽ luôn được gọi mỗi khi componentMount
  // + useEffect sẽ được gọi mỗi khi component được re-render
  // + Gọi callback ngay sau khi cmponent thêm element vào DOM
  ///
  // 2. useEffect (callback,[]
  // => ở phiên bản cũ:[] CleanUp, còn ở phiên bản mới deps)
  // Tính chất :
  // + useEffect ( or Callback) sẽ luôn được gọi khi componentMount
  // + Callback sẽ chỉ được gọi 1 lần khi component được re-render
  ///
  // 3. useEffect (callback,[deps]) // dependencies
  // Tính chất:
  // + useEffect ( or Callback) sẽ luôn được gọi khi componentMount
  // + Callback sẽ được gọi mỗi khi deps thay đổi

  const [text, setText] = useState("");
  //TH1
  //   useEffect(() => {
  //     console.log("Hello World");
  //   });

  //TH2
  //   useEffect(() => {
  //     console.log("useEffect đang được chạy");
  //   }, []);

  //TH3
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect đang được chạy");
  }, [text, count]);

  return (
    <div>
      <h2>Demo UseEffect</h2>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      {console.log("Component  đang được re-render")}
    </div>
  );
}

export default DemoUseEffect;
