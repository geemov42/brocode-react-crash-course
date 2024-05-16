import React, { useState } from "react";
import PropTypes from "prop-types";

const MyComponent = (props) => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake('');
    setCarModel('');
  };

  const handleRemoveCar = (idx) => {
    setCars(c => c.filter((_, carIdx) => carIdx !== idx));
  };

  const handleChangeYear = (event) => {
    setCarYear(event.target.value);
  };

  const handleChangeMake = (event) => {
    setCarMake(event.target.value);
  };

  const handleChangeModel = (event) => {
    setCarModel(event.target.value);
  };

  return (
    <div>
      <h2>List of car objects</h2>
      <ul>
        {cars.map((car, idx) => <li key={idx} onClick={() => handleRemoveCar(idx)}>{car.year} {car.make} {car.model}</li>)}
      </ul>

      <input type="number" value={carYear} onChange={handleChangeYear} />
      <input
        type="text"
        value={carMake}
        onChange={handleChangeMake}
        placeholder="Enter car make"
      />
      <input
        type="text"
        value={carModel}
        onChange={handleChangeModel}
        placeholder="Enter car model"
      />
      <button onClick={handleAddCar}>Add car</button>
    </div>
  );
};

MyComponent.propTypes = {};

export default MyComponent;
