const recipeController = require('../controllers/recipecontroller')
// Used to verfiy if the user is authinticated
const verify = require('../middleware/verifyToken')
const express = require("express");

const router = express.Router({ mergeParams: true });

router.post('/add', verify, recipeController.addNewRecipe)
router.delete('/deleteOne', verify, recipeController.deleteRecipe)  // body : {name: recipe's name}
router.delete('/deleteAll', verify, recipeController.deleteAllRecipes) // body : {owner: user's email}

// GET - a recipe, by name
router.get('/point', verify, recipeController.getRecipe) // body : {name: recipe's name}

// GET - all user's recipes
router.get('/:email', verify, recipeController.getRecipes) // body : {owner: user's email}


module.exports = router
// const context = createContext({name: })