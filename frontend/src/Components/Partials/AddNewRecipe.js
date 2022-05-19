import axios from "axios";

const POST_URL = 'http://127.0.0.1:4300/heka/api/recipes'
function addNewRecipe() {


  const addNewRecipe = async ({ name, description, ingredients }) => {

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

    let owner = getOwner()
    let token = getAuth()

    /* let userData = { name, owner, description, ingredients }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'auth-token': `${token}` },
      body: JSON.stringify(userData)
    };
    const response = await fetch(POST_URL + '/add', requestOptions);
    console.log(response); */

    let config = {
      headers: {
        'content': 'application/json',
        'auth-token': `${token}`
      }
    }

    axios.post(POST_URL + '/add',
      {
        name: name,
        owner: owner,
        description: description,
        ingredients: ingredients
      },
      config).then((response) => {
        console.log(response);
      })
  }

  let ingredients = [{ name: "milk", q: 56 }, { name: "powder", q: 67 }]
  let name = 'Milky cuve second return 15'
  let description = 'test description milk x2'
  // addNewRecipe({ name, description, ingredients })


}

export default addNewRecipe