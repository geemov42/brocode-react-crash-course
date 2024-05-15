import React from "react";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Geemov42" />
    </>
  );
}

export default App;
