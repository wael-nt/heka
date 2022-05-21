const recipeController = require('../controllers/recipecontroller')
// Used to verfiy if the user is authinticated
const verify = require('../middleware/verifyToken')
const express = require("express");

const router = express.Router({ mergeParams: true });

//POST - add a new recipe
router.post('/add', verify, recipeController.addNewRecipe)

// DELETE - delete a recipe, by name
router.delete('/deleteOne', verify, recipeController.deleteRecipe) // body : {name: recipe's name}

// DELETE - delete a user recipes, by owner(email)
router.delete('/deleteAll', verify, recipeController.deleteAllRecipes) // body : {owner: user's email}

// GET - all the users private recipes
router.get('/private/:email', recipeController.getPrivateRecipes) // body : {owner: user's email}

// GET - all public recipes
router.get('/public', recipeController.getPublicRecipes)

// GET - a recipe, by name
router.get('/:name', recipeController.getRecipe) // params 'name'




module.exports = router
// const context = createContext({name: })