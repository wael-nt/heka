const ingredientController = require('../controllers/ingredientcontroller');

const express = require("express");
const router = express.Router({ mergeParams: true });

// GET
router.get('/grains', ingredientController.getIngredientsByGrains);
router.get('/meat', ingredientController.getIngredientsByMeat);
router.get('/vegetables', ingredientController.getIngredientsByVegetables);
router.get('/fruit', ingredientController.getIngredientsByFruit);
router.get('/drinks', ingredientController.getIngredientsByDrinks);
router.get('/dairy', ingredientController.getIngredientsByDairy);
router.get("/miscellaneous", ingredientController.getIngredientsByMiscellaneous);
router.get("/", ingredientController.getSearchResults);
router.get("/:id", ingredientController.getIngredientById);

router.post('/add', ingredientController.addNewIngredient);

module.exports = router;