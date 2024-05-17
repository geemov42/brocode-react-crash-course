import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const DigitalClock = (props) => {

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => {
        clearInterval(intervalId);
    }
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = padZero(time.getMinutes());
    const seconds = padZero(time.getSeconds());
    const meridiem = (hours >= 12 ? 'PM' : 'AM');
    hours = padZero(hours % 12 || 12);

    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  }

  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
};

DigitalClock.propTypes = {};

export default DigitalClock;
