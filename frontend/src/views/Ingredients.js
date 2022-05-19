import React, { useEffect, useReducer } from "react";

import IngredientsList from "../Components/Partials/IngredientsList";
import SearchBar from "../Components/Partials/SearchBar";

import "./Ingredients.css";

import Ingredient from "./Ingredient";

const categories = [{ id: -1, name: "Grains", image: "/grains.jpg" },
{ id: -2, name: "Meat", image: "/meatandfish.jpg" },
{ id: -3, name: "Vegetables", image: "/vegetables.jpg" },
{ id: -4, name: "Fruit", image: "/fruits.jpg" },
{ id: -5, name: "Beverages", image: "/drinks.jpg" },
{ id: -6, name: "Dairy", image: "/dairy.jpg" },
{ id: -7, name: "Miscellaneous", image: "/miscellaneous.jpg" }];

const defaultState = {
  search: "",
  title: "Ingredients",
  item: {},
  ingredients: categories,
  isItem: false,
  category: { id: 0, name: "", image: "" },
  newRecipe: []
};

const reducer = (state, action) => {

  switch (action.type) {
    case 'ADD_ITEM': { }
    case 'REMOVE_ITEM': { }
    case 'ITEM': { return { ...state, isItem: action.bool } }
    case 'TITLE': { return { ...state, title: action.title } }
    case 'SEARCH': { return { ...state, search: action.search } }
    case 'INGREDIENTS': { return { ...state, ingredients: action.ingredients } }
    case 'SET_INGREDIENT': { return { ...state, item: action.item } }
    case "CATEGORY": { return { ...state, category: action.category } }
    case "DEFAULT": { return defaultState }
    default:
      throw new Error();
  };
}
function Ingredients() {
  const [state, dispatcher] = useReducer(reducer, defaultState);

  async function selectItem(id) {
    if (state.category.id === 0) {
      categories.filter((category) => {
        if (category.id === id) {
          dispatcher({ type: "CATEGORY", category: category })
          dispatcher({ type: "TITLE", title: category.name });
        }
      });
    } else if (state.category.id < 0) {
      state.ingredients.filter(ingredient => {
        if (id === ingredient.id) {
          dispatcher({ type: "SET_INGREDIENT", item: ingredient });
          dispatcher({ type: "TITLE", title: ingredient.name.toUpperCase() });
        }
      });
    }
  }

  async function handleSearch(value) {
    dispatcher({ type: "CATEGORY", category: categories[6] });
    if (value.length > 0) {
      dispatcher({ type: "SEARCH", search: value });
    } else {
      dispatcher({ type: "DEFAULT" });
    }
  }

  function addItem(item) {

  }

  async function searchForIngredient() {
    try {
      const path = (`http://localhost:4300/heka/api/ingredients?search=${state.search}`);
      fetch(path).then(async response => {
        const newData = await response.json();
        dispatcher({ type: "INGREDIENTS", ingredients: newData });
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchIngredientsByCategory(name) {
    console.log(name)
    try {
      const path = (`http://localhost:4300/heka/api/ingredients/${name}`);
      fetch(path).then(async response => {
        const newData = await response.json();
        console.log(newData);
        dispatcher({ type: "INGREDIENTS", ingredients: newData })
      });
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    if (state.search.length > 0) {
      dispatcher({ type: "ITEM", bool: false });
      searchForIngredient();
    } else if (state.category.id < 0 && !state.isItem) {
      let name;
      switch (state.category.id) {
        case -1: {
          name = "grains";
          break;
        }
        case -2: {
          name = "meat";
          break;
        }
        case -3: {
          name = "vegetables";
          break;
        }
        case -4: {
          name = "fruit";
          break;
        }
        case -5: {
          name = "drinks"
          break;
        }
        case -6: {
          name = "dairy";
          break;
        }
        case -7: {
          name = "miscellaneous";
          break;
        }
        default:
          throw new Error();
      };
      fetchIngredientsByCategory(name);
      console.log(state.ingredients);
    }

    if (state.item.id > 0) {
      dispatcher({ type: "ITEM", bool: true });
    }

  }, [state.category, state.isItem, state.ingredient, state.search.length, state.item.id])



  return (
    <div className="ingredients">
      <h1 className="title">{state.title}</h1>
      <SearchBar type="text" placeholder="Search for an Ingredient" onSearch={handleSearch} />
      {!state.isItem &&
        <IngredientsList
          items={state.ingredients}
          category={state.category}
          selectItem={selectItem}
          addItem={addItem}
        />}
      {state.isItem &&
        <Ingredient
          name={state.item.name}
          id={state.item.id}
          amount={state.item.amount}
          possibleUnits={state.item.possibleUnits}
          nutrients={state.item.nutrients}
          caloricBreakdown={state.item.caloricBreakdown}
          categories={state.item.categories}
          selectItem={selectItem}
          addItem={addItem}
        />}
    </div>
  );
}

export default Ingredients;