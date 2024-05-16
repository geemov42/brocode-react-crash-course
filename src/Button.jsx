import React from 'react'

const Button = () => {

    const handleClick = (event) => {
        event.target.textContent = "Outch";
        console.log(event);
    };

  return (
    <button onClick={handleClick}>Click me</button>
  )
}

export default Button