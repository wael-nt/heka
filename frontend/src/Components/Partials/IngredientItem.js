import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../UIElements/Card";

import "./IngredientItem.css"

function IngredientItem(props) {
  let isItem = false;
  const authContext = true;
  const navigate = useNavigate();

  let image = props.image;
  if (props.category.id !== 0) {
    isItem = true
    image = props.category.image;
  }

  function handleView(event) {
    event.preventDefault();
    props.selectItem(props.id);
  }

  function handleAdd(event) {
    event.preventDefault();
    if (authContext === false) {
      navigate("/signin")
    }
    props.addItem(props.id);
  }

  return (
    <Fragment>
      <li className="ingredient-item">
        <Card className="ingredient-item__content">
          <div className="ingredient-item__image">
            <img src={process.env.PUBLIC_URL + image} alt={props.name} />
          </div>
          <div className="ingredient-item__info">
            <h2>{props.name}</h2>
          </div>
          <div className="ingredient-item__actions">
            <button className="button" onClick={handleView}>View</button>
            {isItem && <button className="button" onClick={handleAdd}>Add</button>}
          </div>
        </Card>
      </li>
    </Fragment>
  );
}

export default IngredientItem;