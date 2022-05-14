import React, { Fragment } from "react";

import Card from "../UIElements/Card";

import "./IngredientItem.css"

function IngredientItem(props) {
  return (
    <Fragment>
      <li className="ingredient-item">
        <Card className="ingredient-item__content">
          <div className="ingredient-item__image">
            <img src={process.env.PUBLIC_URL + props.image} alt={props.name} />
          </div>
          <div className="ingredient-item__info">
            <h2>{props.name}</h2>
          </div>
          <div className="ingredient-item__actions">
            {/* <button onClick={props.onClick(this.id)}>View</button> */}
          </div>
        </Card>
      </li>
    </Fragment>
  );
}

export default IngredientItem;