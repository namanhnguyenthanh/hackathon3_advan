import React, { useState } from "react";

function Th7() {
  const [Celsius, setCelsius] = useState("");
  const [Fahrenheit, setFahrenheit] = useState("");
  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
    setFahrenheit((e.target.value * 9) / 5 + 32);
  };
  const HandleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    setCelsius((((e.target.value - 32) * 5) / 9).toFixed(2));
  };
  return (
    <div>
      <div>
        <label>Celsius</label>
        <input type="number" value={Celsius} onChange={handleCelsiusChange} />
      </div>
      <div>
        <label>Fahrenheit</label>
        <input
          type="number"
          value={Fahrenheit}
          onChange={HandleFahrenheitChange}
        />
      </div>
    </div>
  );
}

export default Th7;
