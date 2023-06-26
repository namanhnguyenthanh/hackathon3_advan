import React, { useRef, useState } from "react";

function DemouseRef() {
  const [time, setTime] = useState(60);
  let timer = useRef();
  console.log(timer);
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTime((prevState) => prevState - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timer.current);
  };
  return (
    <div>
      <h2>Demo useReef</h2>
      <p>{time}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default DemouseRef;
