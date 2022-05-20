import React, { useState } from "react";

import axios from "axios";
import { getStorage } from "../../util/storage";

const POST_URL = 'http://127.0.0.1:4300/heka/api/recipes'

function getOwner() {
  let owner = JSON.parse(window.localStorage.getItem('cred')).email
  console.log(owner);
  return owner;
}

function getAuth() {
  let auth = JSON.parse(window.localStorage.getItem('cred')).auth
  console.log(auth);
  return auth;
}

function addRecipe(recipe) {
  let owner = getOwner()
  let token = getAuth()

  let config = {
    headers: {
      'content': 'application/json',
      'auth-token': `${token}`
    }
  }

  axios.post(POST_URL + '/add',
    {
      name: recipe.name,
      owner: recipe.owner,
      description: recipe.description,
      ingredients: recipe.ingredients
    },
    config).then((response) => {
      console.log(response);
    })
}

// async function searchForIngredient() {
//   try {
//     const path = (`http://localhost:4300/heka/api/ingredients?search=${state.search}`);
//     fetch(path).then(async response => {
//       const newData = await response.json();
//       dispatcher({ type: "INGREDIENTS", ingredients: newData });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

function AddNewRecipe() {

  const [recipe, setRecipe] = useState(getStorage("current-recipe"))

  function recipeSubmitHandler(event) {
    event.preventDefault();
    // console.log(formState.inputs)

  }

  return (
    <div className="content">
      <form className="recipe-form" onSubmit={recipeSubmitHandler}>
        <div class="row g-3 ms-3 align-items-center">
          <div class="col-auto">
            <label for="name" class="col-form-label">Name</label>
          </div>
          <div class="col-auto">
            <input type="text" id="name" class="form-control" aria-describedby="name" placeholder="Name" name='name'></input>
          </div>
        </div>
        <div class="row g-3 ms-3 align-items-center">
          <div class="col-auto">
            <label for="description" class="col-form-label">Description</label>
          </div>
          <div class="col-auto">
            <textarea
              id="description"
              rows={3}
            // onChange={changeHandler}
            // onBlur={touchHandler}
            // value={inputState.value}
            />
          </div>
        </div>
      </form>
      {/* <SearchBar type="text" placeholder="Search for an Ingredient" onSearch={handleSearch} /> */}
      {/* {!state.isItem &&
        <IngredientsList
          items={state.ingredients}
          category={state.category}
          hasRecipe={state.hasRecipe}
          selectItem={selectItem}
          addItem={addItem}
          removeItem={removeItem}
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
        />} */}



    </div>
  );
}

export default AddNewRecipe;