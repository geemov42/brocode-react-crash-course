import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "./ComponentA";

const ComponentD = (props) => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
};

ComponentD.propTypes = {};

export default ComponentD;
