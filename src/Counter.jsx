import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prevCount => prevCount + 1);
    setCounter(prevCount => prevCount + 1);
    setCounter(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCounter(prevCount => prevCount - 1);
    setCounter(prevCount => prevCount - 1);
    setCounter(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  
  return (
    <div className="counter-container">
      <p className="count-display">{counter}</p>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
