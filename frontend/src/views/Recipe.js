import React, { useEffect, useState } from 'react'
import axios from "axios";
import RecipeItem from '../Components/Partials/RecipeItem';
import AddNewRecipe from '../Components/Partials/AddNewRecipe';
import Card from '../Components/UIElements/Card';
import "./Recipe.css";
import Ingredients from './Ingredients';
const API_URL = "http://127.0.0.1:4300/heka/api/recipes";


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
  const [moreRecipes, setMoreRecipes] = useState([]);

  function handleAddRecipe(event) {
    event.preventDefault()
    setAddRecipe(true)
  }

  function selectItem() {

  }

  useEffect(() => {

    if (hasRecipes) {

    }
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
              console.log(recipes);
              setRecipes(recipes)
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
  }, [hasRecipes])

  return (
    <div className='content'>
      <h1>Recipes</h1>
      {!hasRecipes &&
        <div className="no-recipe">
          {!addRecipe &&
            <Card className="not-found">
              <h2>Seems you don not have any recipes. Maybe add one?</h2>
              <button className='btn' onClick={handleAddRecipe}> Add Recipe</button>
            </Card>}

        </div>}
      {<div>
        {!addRecipe &&
          <Card className="not-found">
            <h2>Quote of inspiration here</h2>
            <button className='btn' onClick={handleAddRecipe}> Add Recipe</button>
          </Card>}
        {addRecipe &&
          <div>
            <AddNewRecipe />
            <Ingredients />
          </div>
        }
        {hasRecipes && <h1>Your Recipes</h1>}
        {hasRecipes && items.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            name={recipe.name}
            description={recipe.description}
            ingredients={recipe.ingredients}
            image={recipe.image}
            isItem={true}
            selectItem={selectItem}
          />
        ))
        }
        <h1>Public Recipes</h1>
        {moreRecipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            name={recipe.name}
            description={recipe.description}
            ingredients={recipe.ingredients}
            image={recipe.image}
            isItem={true}
            selectItem={selectItem}
          />
        ))
        }

        {/* <Ingredient
          name={state.item.name}
          id={state.item.id}
          amount={state.item.amount}
          possibleUnits={state.item.possibleUnits}
          nutrients={state.item.nutrients}
          caloricBreakdown={state.item.caloricBreakdown}
          categories={state.item.categories}
          hasRecipe={state.hasRecipe}
          handleChange={handleAmount}
          addItem={addItem}
        /> */}
      </div >}
    </div>
  );
}

export default Recipe
