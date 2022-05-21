import React, { useEffect, useReducer } from "react";

import IngredientsList from "../Components/Partials/IngredientsList";
import SearchBar from "../Components/Partials/SearchBar";
import Ingredient from "./Ingredient";

import { categories, defaultIngredientState, ingredientReducer } from "../util/consts";
import { getStorage, setStorage } from "../util/storage";

import "./Ingredients.css";

function Ingredients(props) {
  const authCtx = true;
  const [state, dispatcher] = useReducer(ingredientReducer, defaultIngredientState);

  async function selectItem(id) {
    if (state.category.id === 0) {
      categories.filter((category) => {
        if (category.id === id) {
          dispatcher({ type: "CATEGORY", category: category })
          dispatcher({ type: "TITLE", title: category.name });
          dispatcher({ type: "HAS_IS", id: 1, bool: true });
        } else {
          dispatcher({ type: "HAS_IS", id: 1, bool: false });
        }
      });
    } else if (state.category.id < 0) {
      state.ingredients.filter(ingredient => {
        if (id === ingredient.id) {
          dispatcher({ type: "SET_INGREDIENT", item: ingredient });
          dispatcher({ type: "TITLE", title: ingredient.name.toUpperCase() });
        }
      });
      console.log(state.item)
    } else if (state.isItem) {
      addItem();
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

  function handleAmount(value) {
    const item = state.item
    const newItem = { ...item, amount: value }
    dispatcher({ type: "SET_INGREDIENT", item: newItem });
  }

  function addItem() {
    const item = state.item;
    console.log(item)
    let currentRecipe = getStorage("current-recipe");
    if (!state.hasRecipe) {
      let items = []
      items.push(item);
      let newRecipe = {
        name: '',
        description: '',
        ingredients: items,
        image: ""
      };
      dispatcher({ type: "SET_RECIPE", items: newRecipe });
      dispatcher({ type: "HAS_IS", id: 3, bool: true });
      setStorage("current-recipe", newRecipe)
    } else if (currentRecipe.ingredients.length > 0) {
      let items = currentRecipe.ingredients;
      let newList = [];
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        if (element.id !== null || element.id !== item.id) {
          newList.push(element)
        }
      }
      newList.push(item);
      let newRecipe = {
        name: currentRecipe.name,
        description: currentRecipe.description,
        ingredients: newList,
        image: currentRecipe.image
      }
      dispatcher({ type: "SET_RECIPE", items: newList });
      setStorage("current-recipe", newRecipe);
    }
  }

  function removeItem(id) {
    if (id === state.item.id) {
      let currentRecipe = getStorage("current-recipe");
      if (currentRecipe === null && currentRecipe === undefined) {
        let items = []

        const ingredients = currentRecipe.ingredients
        for (let index = 0; index < ingredients.length; index++) {
          const element = ingredients[index];
          if (element.id !== id) {
            items.push(element);
          }
        }
        let newRecipe = {
          name: currentRecipe.name,
          description: currentRecipe.description,
          ingredients: items,
          image: currentRecipe.image
        };
        dispatcher({ type: "SET_RECIPE", items: newRecipe });
        setStorage("current-recipe", newRecipe)
      }
    }
  }

  function goBack(event) {
    event.preventDefault()
    if (!state.isItem) {
      dispatcher({ type: "CATEGORY", category: { id: 0, name: "", image: "" } });
      dispatcher({ type: "INGREDIENTS", ingredients: categories });
      dispatcher({ type: "TITLE", title: "Ingredients" })
      dispatcher({ type: "HAS_IS", id: 1, bool: true });
    } else {
      dispatcher({ type: "HAS_IS", id: 2, bool: false });
      dispatcher({ type: "TITLE", title: state.category.name.toUpperCase() })
      dispatcher({ type: "SET_INGREDIENT", item: {} });
    }
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
    try {
      const path = (`http://localhost:4300/heka/api/ingredients/${name}`);
      fetch(path).then(async response => {
        const newData = await response.json();
        setStorage(name, newData);
        dispatcher({ type: "INGREDIENTS", ingredients: newData });
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    let skip = false;
    let ingredients = [];
    if (state.search.length > 0) {
      dispatcher({ type: "HAS_IS", id: 2, bool: false });
      searchForIngredient();
    } else if (state.category.id < 0 && !state.isItem) {
      let name;
      switch (state.category.id) {
        case -1: {
          name = "grains";
          if (state.hasGrains) {
            ingredients = getStorage("grains");
            skip = true;
          }
          break;
        }
        case -2: {
          name = "meat";
          if (state.hasMeat) {
            ingredients = getStorage("meat");
            skip = true;
          }
          break;
        }
        case -3: {
          name = "vegetables";
          if (state.hasVeggies) {
            ingredients = getStorage("vegetables");
            skip = true;
          }
          break;
        }
        case -4: {
          name = "fruit";
          if (state.hasFruit) {
            ingredients = getStorage("fruit");
            skip = true;
          }
          break;
        }
        case -5: {
          name = "drinks"
          if (state.hasBeverages) {
            ingredients = getStorage("drinks");
            skip = true;
          }
          break;
        }
        case -6: {
          name = "dairy";
          if (state.hasDairy) {
            ingredients = getStorage("dairy");
            skip = true;
          }
          break;
        }
        case -7: {
          name = "miscellaneous";
          if (state.hasMisc) {
            ingredients = getStorage("miscellaneous");
            skip = true;
          }
          break;
        }
        default:
          throw new Error();
      };

      if (!skip) {
        console.log("fetch");
        fetchIngredientsByCategory(name);
        dispatcher({ type: "HAS_IS", id: state.category.id, bool: true });
      } else {
        console.log("local");
        dispatcher({ type: "INGREDIENTS", ingredients: ingredients });
      }
    }

    if (state.item.id > 0) {
      dispatcher({ type: "HAS_IS", id: 2, bool: true });
      if (authCtx) {
        dispatcher({ type: "HAS_IS", id: 4, bool: true });
        if (state.hasRecipe) {
          let ingredientList = state.currentRecipe.ingredients
          for (let index = 0; index < ingredientList.length; index++) {
            const element = ingredientList[index];
            if (element.id === state.item.id) {
              dispatcher({ type: "HAS_IS", id: 5, bool: true });
            }
          }
        }
      }
    } else {
      dispatcher({ type: "HAS_IS", id: 4, bool: false });
      dispatcher({ type: "HAS_IS", id: 5, bool: false })
    }

  }, [state.category, state.isItem, state.ingredient, state.search.length, state.item.id]);

  return (
    <div className="ingredients">
      <h1 className="title">{state.title}</h1>
      {!state.isItem && < SearchBar type="text" placeholder="Search for an Ingredient" onSearch={handleSearch} />}
      <div className="inline-buttons">
        {!state.isCategory && <button className="button" onClick={goBack}>BACK</button>}
        {state.canAdd && < button className="button" onClick={addItem}>ADD</button>}
        {state.canRemove && < button className="button" onClick={removeItem}>REMOVE</button>}
        {!state.hasRecipe && <button className="button" onClick={goBack}>VIEW RECIPE</button>}
      </div>
      {!state.isItem &&
        <IngredientsList
          items={state.ingredients}
          category={state.category}
          hasRecipe={state.hasRecipe}
          selectItem={selectItem}
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
          hasRecipe={state.hasRecipe}
          handleChange={handleAmount}
          addItem={addItem}
        />}
    </div>
  );
}

export default Ingredients;
