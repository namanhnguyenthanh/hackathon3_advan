import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function IndexColor() {
  // Lifting State Up là nâng ( chuyển ) trạng thái lên
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e);
  };

  return (
    <div>
      <h2>Lifting State Up </h2>
      <ColorPicker changeColor={handleColorChange} />
      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px",
          margin: "0 auto",
          marginTop: "100px",
        }}
      ></div>
    </div>
  );
}

export default IndexColor;
