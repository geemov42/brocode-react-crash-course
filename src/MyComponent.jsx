import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Sponge Bob");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployed = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>set name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>increment age</button>

      <p>Is employed: {isEmployed ? 'Yes' : 'No'}</p>
      <button onClick={toggleEmployed}>Toggle employed</button>
    </div>
  );
};

export default MyComponent;
