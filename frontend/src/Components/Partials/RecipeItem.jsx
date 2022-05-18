import React, { Fragment } from 'react'
import Card from '../UIElements/Card'

import '../Partials/RecipeItem.css'

function RecipeItem(props) {
  return (
    <Fragment>
      <Card className='recipe-item'>
        <div className='recipe-name'>
          <h5>Name: <span>{props.name}</span></h5>
        </div>
        <div className='recipe-desc'>
          <h6>Description:</h6>
          <blockquote>
            <span>{props.description}</span>
          </blockquote>
        </div>
        <div className='recipe-incredients'>
          {props.ingredients.map(ingredient => (
            <div className='recipe-ing-item'>
              <span>{ingredient.name} {ingredient.q}</span>
            </div>
          ))}
        </div>
      </Card>
    </Fragment>
  )
}

export default RecipeItem