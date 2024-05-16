import React, { useState } from "react";
import PropTypes from "prop-types";

const MyComponent = (props) => {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const handleYearChange = (e) => {
    setCar((prevCar) => ({
      ...prevCar,
      year: e.target.value,
    }));
  };

  const handleMakeChange = (e) => {
    setCar((prevCar) => ({
      ...prevCar,
      make: e.target.value,
    }));
  };

  const handleModelChange = (e) => {
    setCar((prevCar) => ({
      ...prevCar,
      model: e.target.value,
    }));
  };

  return (
    <div>
      <p>
        Your favorite car is : {car.year} {car.make} {car.model}{" "}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
};

MyComponent.propTypes = {};

export default MyComponent;
