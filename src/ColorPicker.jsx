import React, { useState } from "react";
import PropTypes from "prop-types";

const ColorPicker = (props) => {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected color: {color}</p>
      </div>
      <label>Select a color</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

ColorPicker.propTypes = {};

export default ColorPicker;
