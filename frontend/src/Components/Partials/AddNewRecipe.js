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

function AddNewRecipe() {

  const [recipe, setRecipe] = useState(getStorage("current-recipe"))

  function recipeSubmitHandler(event) {
    event.preventDefault();
    // console.log(formState.inputs)

  }

  return (
    <div className="content">
      <form className="recipe-form" onSubmit={recipeSubmitHandler}>
        <div className="row g-3 ms-3 align-items-center">
          <div className="col-auto">
            <label forhtml="name" class="col-form-label">Name</label>
          </div>
          <div className="col-auto">
            <input type="text" id="name" class="form-control" aria-describedby="name" placeholder="Name" name='name'></input>
          </div>
        </div>
        <div className="row g-3 ms-3 align-items-center">
          <div className="col-auto">
            <label forhtml="description" className="col-form-label">Description</label>
          </div>
          <div className="col-auto">
            <textarea
              className="input"
              id="description"
              placeholder="Description of the recipe"
              rows={3}
            // onChange={changeHandler}
            // onBlur={touchHandler}
            // value={inputState.value}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNewRecipe;