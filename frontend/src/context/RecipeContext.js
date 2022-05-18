import React from "react";
import Ingredient from "../views/Ingredient";

const RecipeContext = React.createContext({
  name: '',
  description: '',
  ingredients: [],
  addIngredient: (ingredient) => { },
  removeIngredient: (id) => [],
  clearRecipe: () => { },
  updateRecipe: (recipe) => { }
})

export default RecipeContext