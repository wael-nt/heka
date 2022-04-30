const recipeController = require('../controllers/recipecontroller')

const express = require("express");
const router = express.Router({ mergeParams: true });

router.post('/add', recipeController.addNewRecipe)
router.delete('/deleteOne', recipeController.deleteRecipe)  // body : {name: recipe's name}
router.delete('/deleteAll', recipeController.deleteAllRecipes) // body : {owner: user's email}

// GET - a recipe, by name
router.get('/point', recipeController.getRecipe) // body : {name: recipe's name}

// GET - all user's recipes
router.get('/', recipeController.getRecipes) // body : {owner: user's email}


module.exports = router