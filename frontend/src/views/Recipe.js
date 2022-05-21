import React, { useCallback, useEffect, useState } from "react";

import "./Recipe.css";
import axios from "axios";
import RecipeItem from "../Components/Partials/RecipeItem";
import { useContext } from "react";
import RecipeContext from "../context/RecipeContext";
import addNewRecipe from "../Components/Partials/AddNewRecipe";

const API_URL = "http://127.0.0.1:4300/heka/api/recipes";

function Recipe() {
  const [cond, setCond] = useState(false);
  const [items, setRecipes] = useState([]);
  const recipeCtx = useContext(RecipeContext);

  const getAuth = () => {
    let userObj = window.localStorage.getItem("cred");
    if (userObj == null) {
      return null;
    } else return JSON.parse(userObj);
  };

  useEffect(() => {
    const getUserRecipes = async () => {
      const object = getAuth();
      console.log(object.auth);
      if (object != null) {
        axios
          .get(API_URL + `/${object.email}`, {
            headers: {
              "auth-token": `${object.auth}`,
            },
          })
          .then((res) => {
            let recipes = res.data;

            console.log(recipes);
            if (recipes.length === 0) {
              setCond(false);
            } else {
              console.log("here");
              setCond(true);
              let arr = [];
              Object.keys(recipes).forEach(function (key) {
                arr.push(recipes[key]);
              });
              setRecipes(arr);
            }
          });
      }
    };

    getUserRecipes();
  }, []);

  //recipeCtx.updateRecipe({ name: "test", description: "teststst" })
  addNewRecipe();

  if (cond) {
    return (
      <div className="content">
        <h1>Recipes</h1>
        {items.map((recipe) => (
          <RecipeItem
            name={recipe.name}
            description={recipe.description}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
    );
  } else {
    return (
      <>
        <div className="content">
          <h1>No recipes</h1>
        </div>
      </>
    );
  }
}

export default Recipe;
