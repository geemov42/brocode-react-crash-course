import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const MyComponent = (props) => {
  useEffect(() => {
    console.log("Rendering");
  });

  // useRef don't involve re-render
  const ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
  };

  // useState involve re render
  // let [number, setNumber] = useState(0);
  //
  // const handleClick = () => {
  //     setNumber(n => n + 1);
  // };

  const inputRef = useRef(null);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <input ref={inputRef} />
    </div>
  );
};

MyComponent.propTypes = {};

export default MyComponent;
