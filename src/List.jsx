import React from "react";
import propTypes from 'prop-types';

const List = ({items =[], category = 'Category'}) => {
  const itemList = items;

  itemList.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">
        {itemList.map((element, idx) => {
          return (
            <li key={idx}>
              {element.name} : &nbsp; <b>{element.calories}</b>
            </li>
          );
        })}
      </ul>
    </>
  );
};

List.propTypes = {
    items: propTypes.arrayOf(propTypes.shape(
        {
            name: propTypes.string,
            calories: propTypes.number
        }
    )),
    category: propTypes.string
}

export default List;
