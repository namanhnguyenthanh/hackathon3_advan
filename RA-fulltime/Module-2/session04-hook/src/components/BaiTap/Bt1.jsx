import React, { useState } from "react";

function Bt1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Bt1;
