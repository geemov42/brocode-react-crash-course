import React from 'react';

const List = () => {

    const fruits = ['Apple', 'Orange', 'Banana', 'Pineapple'];
    fruits.sort();

  return (
    <ul>
        {fruits.map((element, idx) => {
            return <li key={idx}>{element}</li>;
        })}
    </ul>
  )
}

export default List;