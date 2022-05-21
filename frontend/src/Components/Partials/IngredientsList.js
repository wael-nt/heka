import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../UIElements/Card';
import IngredientItem from './IngredientItem';

import './IngredientsList.css';

function IngredientsList(props) {
  const navigate = useNavigate()

  if (props.items.length === 0) {
    return (
      <div className="not-found">
        <Card className="not-found">
          <h2>Ingredient not found. Maybe add one?</h2>
          <button onClick={() => { navigate("/add-ingredient") }}>Add an Ingredient</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="ingredients-list">
      {props.items.map(ingredient => (
        <IngredientItem
          key={ingredient.id}
          id={ingredient.id}
          item={ingredient}
          image={ingredient.image}
          category={props.category}
          name={ingredient.name}
          selectItem={props.selectItem}
        />
      ))}
    </ul>
  );
}

export default IngredientsList;