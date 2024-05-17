import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";

const ComponentC = (props) => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{`Hello again ${user}`}</h2>
      <ComponentD />
    </div>
  );
};

ComponentC.propTypes = {};

export default ComponentC;
