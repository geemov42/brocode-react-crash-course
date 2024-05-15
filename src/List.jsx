import React from "react";

const List = () => {
  const fruits = [
    { name: "Apple", calories: 95 },
    { name: "Orange", calories: 45 },
    { name: "Banana", calories: 105 },
    { name: "Pineapple", calories: 37 },
  ];

//   fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order
  fruits.sort((a, b) => a.calories - b.calories); // Numeric order

  return (
    <ul>
      {fruits.map((element, idx) => {
        return <li key={idx}>{element.name} : &nbsp; <b>{element.calories}</b></li>;
      })}
    </ul>
  );
};

export default List;
