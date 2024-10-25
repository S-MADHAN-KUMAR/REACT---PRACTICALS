import React, { useState } from 'react';

const HookCounter = () => {
  const InitialCount = 0;
  const [count, setCount] = useState(InitialCount);
  const [msg, setMsg] = useState('');

  const increment = () => {
    setCount((prevState) => {
      if (prevState < 5) {
        setMsg('');
        return prevState + 1;
      } else {
        setMsg('Reached the maximum count of 5');
        return prevState=InitialCount;
      }
    });
  };

  const decrement = () => {
    setCount((prevState) => {
      if (prevState > 0) {
        setMsg('');
        return prevState - 1;
      } else {
        setMsg('Count cannot go below zero');
        return prevState;
      }
    });
  };

  return (
    <div>
      Count: {count} <br />
      Message: {msg} <br />
      <br />
      <button onClick={increment}>+</button> 
      <button onClick={decrement}>-</button>
      <button onClick={() => setCount(InitialCount)}>RESET</button>
      <button onClick={() => setCount((prevState) => Math.min(prevState + 5, 5))}>+5</button>
    </div>
  );
};

export default HookCounter;
