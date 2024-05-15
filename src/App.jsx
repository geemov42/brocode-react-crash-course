import React from "react";
import List from "./List";

function App() {
  const fruits = [
    { name: "Apple", calories: 95 },
    { name: "Orange", calories: '45' },
    { name: "Banana", calories: 105 },
    { name: "Pineapple", calories: 37 },
  ];

  const vegetables = [
    { name: "Potatoes", calories: 110 },
    { name: "Celery", calories: 15 },
    { name: "Carrots", calories: 25 },
    { name: "Corn", calories: 63 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" /> }
      {vegetables.length > 0 && <List items={vegetables} category="vegetables" /> }
    </>
  );
}

export default App;
