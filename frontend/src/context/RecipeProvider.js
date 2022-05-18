import RecipeContext from "./RecipeContext";
import { useReducer } from "react";


function RecipeProvider(props) {

  const defaultRecipeContext = {
    name: '',
    description: '',
    ingredients: []
  }
  const recipeReducer = (state, action) => {
    if (action.type === 'UPDATE_STR') {
      return {
        ...state,
        name: action.name,
        description: action.description
      }
    }

    if (action.type === 'ADD_ING') {
      let ingredient = action.object;
      state.ingredients.push(ingredient)

      return {
        ...state
      }
    }

    if (action.type === 'REMOVE_ING') {
      let id = action.id
      const existingIngredientIndex = state.ingredients.findIndex(ingredient => ingredient.id === id)
      //const existingIngredient = state.ingredients[existingIngredientIndex]
      state.ingredients.splice(existingIngredientIndex, 1)
      let updatedIngredients = state.ingredients
      return {
        ...state,
        ingredients: updatedIngredients
      }
    }

    if (action.type === 'CLR') {
      return defaultRecipeContext
    }
  }

  const [recState, dispatchRecipeAction] = useReducer(recipeReducer, defaultRecipeContext)

  function updateRecipeHandler(recipe) {
    dispatchRecipeAction({ type: 'UPDATE_STR', name: recipe.name, description: recipe.description })
  }

  function addIngredientHandler(ing) {
    dispatchRecipeAction({ type: 'ADD_ING', object: ing })
  }

  function removeIngredientHandler(id) {
    dispatchRecipeAction({ type: 'REMOVE_ING', id: id })
  }

  function clearIngsHandler() {
    dispatchRecipeAction({ type: 'CLR' })
  }

  const recipeContext = {
    name: recState.name,
    description: recState.description,
    ingredients: recState.ingredients,
    addIngredient: addIngredientHandler,
    removeIngredient: removeIngredientHandler,
    clearRecipe: clearIngsHandler,
    updateRecipe: updateRecipeHandler
  }

  return <RecipeContext.Provider value={recipeContext}>{props.children}</RecipeContext.Provider>
}

export default RecipeProvider