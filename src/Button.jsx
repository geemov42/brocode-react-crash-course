import React from 'react'

const Button = () => {

    let count = 0;
    const handleClick = (name) => {

        if (count < 3) {
            count += 1;
            console.log(`${name} You click me ${count} times`);
        } else {
            console.log(`${name} stop clicking me`);
        }
    };

  return (
    <button onClick={() => handleClick('Geemov42')}>Click me</button>
  )
}

export default Button