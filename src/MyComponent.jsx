import React, { useState } from "react";
import PropTypes from "prop-types";

const MyComponent = (props) => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const handleAddFood = (e) => {
    const newFood = document.getElementById('foodInput').value;
    document.getElementById('foodInput').value = '';

    setFoods(prevValue => [...prevValue, newFood]);
  };

  const handleRemoveFood = (idx) => {
    setFoods(prevValue => prevValue.filter((_, elIdx) => idx !== elIdx));
  };

  return (
    <div>
      <h2>List of food</h2>
      <ul>
        {foods.map((food, idx) => (
          <li key={idx} onClick={() => handleRemoveFood(idx)}>{food}</li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
};

MyComponent.propTypes = {};

export default MyComponent;
