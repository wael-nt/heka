import React, { Fragment } from 'react'
import Card from '../UIElements/Card'
import IngredientItem from './IngredientItem'

import '../Partials/RecipeItem.css'

function RecipeItem(props) {
  return (
    <Fragment>
      <div className='recipe-item'>
        <div className='recipe-name'>
          <h5>Name: <span>{props.name}</span></h5>
        </div>
        <div className='recipe-desc'>
          <h6>Description:</h6>
          <blockquote>
            <span>{props.description}</span>
          </blockquote>
        </div>
        <div className='recipe-ingredients-list'>
          {props.ingredients.map(ingredient => (
            <IngredientItem
              key={ingredient.id}
              id={ingredient.id}
              ingredient={ingredient}
              image={ingredient.image}
              category={{ id: -2, name: "MEAT", image: "/meatandfish.jpg" }}
              name={ingredient.name}
              selectItem={props.selectItem}
              addItem={props.addItem}
              removeItem={props.removeItem}
              hasRecipe={props.hasRecipe}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default RecipeItem