import React, { useState } from "react";

function Bt2() {
  const [length, setLength] = useState(0);
  return (
    <div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setLength(e.target.value.length)}
      ></textarea>
      <h2>Số ký tự là: {length}</h2>
    </div>
  );
}

export default Bt2;
