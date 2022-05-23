import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import IngredientItem from "./IngredientItem";
import { clearStorage, getStorage, isStorage, setStorage } from "../../util/storage";
import { categories } from "../../util/consts";


const POST_URL ='https://boiling-wave-51445.herokuapp.com/heka/api/recipes';



function AddNewRecipe() {



  let value = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
  console.log(value)
  let category = categories[value];
  const name = useRef('');
  const description = useRef('');
  const pub = useRef(false)
  const image = useRef('')
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    ingredients: [],
    image: ''
  })


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
        'mode': 'cors',
        'content': 'application/json',
        'auth-token': `${token}`
      }
    }

    axios.post(POST_URL + '/add',
      {
        name: recipe.name,
        owner: owner,
        public: pub.current.value,
        description: recipe.description,
        ingredients: recipe.ingredients
      },
      config).then((response) => {
        console.log(response);
        console.log('Clearing current recipe session');
        clearStorage('current-recipe')
        window.location.reload()

      })
  }



  function changeHandler(event) {
    event.preventDefault();
    const currentRecipe = getStorage("current-recipe");

    const newState = {
      name: name.current.value,
      description: description.current.value,
      ingredients: currentRecipe.ingredients,
      image: image.current.value
    }
    setRecipe(newState)
    setStorage("current-recipe", newState)
  }

  function recipeSubmitHandler(event) {
    event.preventDefault();
    if (name.current.value !== '' && description.current.value !== '' && recipe.ingredients.length > 0) {
      addRecipe(recipe);

    }
  }

  function selectItem(id) {
    console.log(id);
  }

  useEffect(() => {
    if (!isStorage('current-recipe')) {
      setStorage('current-recipe', {
        name: '',
        description: '',
        ingredients: [],
        image: '',
        public: false
      })
    }
  }, [recipe])

  return (
    <div className="content">
      <form className="recipe-form" onSubmit={recipeSubmitHandler}>
        <div className="row g-3 ms-3 align-items-center">
          <div className="col-auto">
            <label forhtml="name" class="col-form-label">Name</label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="name"
              ref={name}
              class="form-control"
              aria-describedby="name"
              placeholder="Name"
              defaultValue={recipe.name}
              name='name'
              onChange={changeHandler}
              value={recipe.name}></input>
          </div>
        </div>
        <div className="row g-3 ms-3 align-items-center">
          <div className="col-auto">
            <label
              className="col-form-label"
              forhtml="description">
              Description
            </label>
          </div>
          <div className="col-auto">
            <textarea
              className="input"
              id="description"
              ref={description}
              defaultValue={recipe.description}
              rows={3}
              value={recipe.description}
              onChange={changeHandler}
            />
          </div>
          <div className="col-auto">
            <label forhtml="public" class="col-form-label">Public</label>
          </div>
          <div className="col-auto public">
            <select id="public" ref={pub} name='public'>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <button className='button' onClick={recipeSubmitHandler}>SAVE RECIPE</button>
        </div>
        {recipe.ingredients.map(ingredient => (
          <IngredientItem
            key={ingredient.id}
            id={ingredient.id}
            item={ingredient}
            image={ingredient.image}
            category={category}
            name={ingredient.name}
            selectItem={selectItem}
          />
        ))}
      </form>
    </div>
  );
}

export default AddNewRecipe;