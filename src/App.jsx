import React from "react";
import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Kev" age={39} isStudent={true} />
      <Student name="Marie" age={37} isStudent={false} />
      <Student name="Quentin" age={'10'} isStudent={true} />
      <Student name="Céleste" age={8} isStudent={true} />
      <Student age={8} isStudent={true} />
    </>
  );
}

export default App;
