import React from "react";

const UserGreeting = (props) => {
  if (props.isLoggedIn) {
    return <h2>Welcome {props.username}</h2>;
  }
  return <h2>Please log in to continue</h2>;
};

export default UserGreeting;
