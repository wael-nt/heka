import React, { useEffect, useState, useReducer } from 'react'
import axios from "axios";

import RecipeItem from '../Components/Partials/RecipeItem';
import AddNewRecipe from '../Components/Partials/AddNewRecipe';
import Card from '../Components/UIElements/Card';

import "./Recipe.css";
import Ingredients from './Ingredients';

const API_URL = "http://127.0.0.1:4300/heka/api/recipes";

const defaultState = {
  hasRecipes: false,
  recipes: [],
  currentRecipe: {},

};

const getAuth = () => {
  let userObj = window.localStorage.getItem('cred')
  if (userObj == null) {
    return null
  } else
    return JSON.parse(userObj)
}

function Recipe() {
  const [addRecipe, setAddRecipe] = useState(false)
  const [hasRecipes, setHasRecipes] = useState(false)
  const [items, setRecipes] = useState([]);
  const [moreRecipes, setMoreRecipes] = useState([])

  function handleAddRecipe(event) {
    event.preventDefault()
    setAddRecipe(true)
  }

  useEffect(() => {
    const getUserRecipes = async () => {
      const userObj = getAuth()
      if (userObj != null) {
        axios.get(API_URL + `/private/${userObj.email}`, { headers: { 'auth-token': `${userObj.auth}` } })
          .then((res) => {
            let recipes = res.data
            if (recipes.length === 0) {
              setHasRecipes(false)
            } else {
              setHasRecipes(true);
              let arr;
              Object.keys(recipes).forEach(function (key) {
                arr.push(recipes[key]);
              });
              setRecipes(arr)
            }
          });
      }
    }

    const getPublicRecipes = async () => {
      const userObj = getAuth()
      if (userObj != null) {
        axios.get(API_URL + `/public`, { headers: { 'auth-token': `${userObj.auth}` } })
          .then((res) => {
            let recipes = res.data
            if (recipes.length === 0) {
              setHasRecipes(false)
            } else {
              let arr = [];
              Object.keys(recipes).forEach(function (key) {
                arr.push(recipes[key]);
              });
              setMoreRecipes(arr)
            }
          });
      }
    }

    getUserRecipes();
    getPublicRecipes();
  }, [addRecipe])

  return (
    <div className='content'>
      <h1>Recipes</h1>
      {!hasRecipes &&
        <div className="no-recipe">
          {!addRecipe &&
            <Card className="not-found">
              <h2>Seems you don not have any recipes. Maybe add one?</h2>
              <button onClick={handleAddRecipe}> Add Recipe</button>
            </Card>}
          {addRecipe &&
            <div>
              <AddNewRecipe />
              <Ingredients />
            </div>
          }
        </div>}
      {<div>
        {hasRecipes && <h1>Your Recipes</h1>}
        {hasRecipes && items.map((recipe) => (
          <RecipeItem
            name={recipe.name}
            description={recipe.description}
            ingredients={recipe.ingredients}
            image={recipe.image}
            isItem={false}
          />
        ))
        }
        <h1>Public Recipes</h1>
        {moreRecipes.map((recipe) => (
          <RecipeItem
            name={recipe.name}
            description={recipe.description}
            ingredients={recipe.ingredients}
            image={recipe.image}
            isItem={false}
          />
        ))
        }
      </div >}
    </div>
  );
}

export default Recipe
