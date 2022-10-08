/* eslint-disable react/prop-types */
import React from 'react';

const Li = ({ nutritions }) => (
  <div className="li">
    <ul>
      <li>
        <p> calories: </p>
        <p>
          {' '}
          {nutritions.calories}
        </p>
      </li>
    </ul>
    <li>
      <p> carbohydrates: </p>
      <p>
        {' '}
        {nutritions.carbohydrates}
        {' '}
      </p>
    </li>
    <li>
      <p> fat: </p>
      <p>
        {' '}
        {nutritions.fat}
        {' '}
      </p>
    </li>
    <li>
      <p> protein: </p>
      <p>
        {' '}
        {nutritions.protein}
        {' '}
      </p>
    </li>
    <li>
      <p>   sugar: </p>
      <p>
        {' '}
        {nutritions.sugar}
        {' '}
      </p>
    </li>
  </div>
);

export default Li;
