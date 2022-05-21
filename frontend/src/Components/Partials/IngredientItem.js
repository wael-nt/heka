import React, { Fragment } from "react";
import { getStorage } from "../../util/storage";

import Card from "../UIElements/Card";

import "./IngredientItem.css"

function IngredientItem(props) {
  const currentRecipe = getStorage("current-recipe");
  let isItem = false;
  let inRecipe = false;

  let image = process.env.PUBLIC_URL + props.image;
  if (props.category.id !== 0) {
    isItem = true;
    image = process.env.PUBLIC_URL + props.category.image;
    if (props.hasRecipe) {
      const ingredients = currentRecipe.ingredients;
      for (let index = 0; index < ingredients.length; index++) {
        if (props.id === ingredients[index].id) {
          console.log("here")
          inRecipe = true;
          isItem = false;
        }
      }
    }
  }

  function handleView(event) {
    event.preventDefault();
    console.log(props.id);
    props.selectItem(props.id);

  }

  return (
    <Fragment>
      <li className="ingredient-item">
        <Card className="ingredient-item__content">
          <div className="ingredient-item__image">
            <img src={image} alt={props.name} />
          </div>
          <div className="ingredient-item__info">
            <h2>{props.name}</h2>
          </div>
          <div className="ingredient-item__actions">
            <button className="button" onClick={handleView}>View</ button>
          </div>
        </Card>
      </li>
    </Fragment>
  );
}

export default IngredientItem;