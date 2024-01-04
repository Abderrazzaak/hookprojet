import { useState, useEffect } from 'react';

import './App.css';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>hssb lia  {count}</h1>;
  
}




export default Timer;
