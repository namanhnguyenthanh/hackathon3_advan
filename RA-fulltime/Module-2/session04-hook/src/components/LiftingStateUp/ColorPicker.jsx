import React from "react";

function ColorPicker(props) {
  console.log(props);
  const handleColor = (e) => {
    props.changeColor(e.target.value);
  };
  return (
    <div>
      <input type="color" onChange={handleColor} />
    </div>
  );
}

export default ColorPicker;
