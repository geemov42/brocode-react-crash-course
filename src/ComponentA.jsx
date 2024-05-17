import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

const ComponentA = (props) => {
  const [user, setUser] = useState("Geemov42");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
};

ComponentA.propTypes = {};

export default ComponentA;
