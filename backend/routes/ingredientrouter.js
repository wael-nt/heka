const ingredientController = require('../controllers/ingredientcontroller')

const express = require("express");
const router = express.Router({ mergeParams: true });

// GET - a recipe, by name
router.get('/category', ingredientController.getIngredientsByCategory) // body : {category: category name}

router.post('/add', ingredientController.addNewIngredient)

module.exports = router