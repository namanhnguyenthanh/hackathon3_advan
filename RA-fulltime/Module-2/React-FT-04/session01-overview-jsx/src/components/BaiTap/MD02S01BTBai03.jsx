import React, { useState, useEffect } from 'react';

function App() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const formattedTimeString = date.toLocaleTimeString();
      setTimeString(formattedTimeString);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Xin chào các bạn !!!</h1>
      <h6> Bây giờ là: {timeString}</h6>
    </div>
  );
}

export default App;

