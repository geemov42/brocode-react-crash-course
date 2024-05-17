import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const MyComponent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // Without useEffect, each time the component re-render, we add an event listener, so we will have thousands of event listener in the end.
  // window.addEventListener("resize", handleResize);
  // console.log('Event listener added');

  // With useEffect, only on event listener is added
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event listener added");

    return () => {
        window.removeEventListener('resize', handleResize);
        console.log("Event listener removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  return (
    <>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </>
  );
};

MyComponent.propTypes = {};

export default MyComponent;
