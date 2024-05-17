import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const MyComponent = (props) => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');

//   // Runs after every re-render
//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   });

//   // Runs only on mount
//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, []);

  // Runs on mount and when the value changes
  // In that case, if count change, title updated, when color change, nothing happened
  useEffect(() => {
    document.title = `Count: ${count} - ${color}`;

    return () => {
        // Some cleanup code
    };
  }, [count]);

  // If we don't use useEffect, this line is executed each time the component re-render. So with useEffect, we can control that behavior
//   document.title = `Count: ${count} - ${color}`;

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const substractCount = () => {
    setCount((c) => c - 1);
  };

  const changeColor = () => {
    setColor(c => c === 'green' ? 'red' : 'green');
  }

  return (
    <>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={substractCount}>Substract</button><br />
      <button onClick={changeColor}>Change color</button>
    </>
  );
};

MyComponent.propTypes = {};

export default MyComponent;
