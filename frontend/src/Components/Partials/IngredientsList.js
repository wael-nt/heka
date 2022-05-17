import React from 'react';

import Card from '../UIElements/Card';
import IngredientItem from './IngredientItem';

import './IngredientsList.css';

function IngredientsList(props) {

  if (props.items.length === 0) {
    return (
      <div className="ingredients-list center">
        <Card>
          <h2>Ingredient not found. Maybe add one?</h2>
          <button onClick={() => { }}>Add an Ingredient</button>
        </Card>
      </div>
    );
  }
  console.log(props.category)
  return (
    <ul className="ingredients-list">
      {props.items.map(ingredient => (
        <IngredientItem
          key={ingredient.id}
          id={ingredient.id}
          image={ingredient.image}
          category={props.category}
          name={ingredient.name}
          onClick={props.onClick}
        />
      ))}
    </ul>
  );
}

export default IngredientsList;