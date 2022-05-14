const ingredientModel = require('../models/ingredient')

async function addNewIngredient(req, res, next) {

  const obj = req.body
  const ingredient = new ingredientModel({
    name: obj.name,
    id: obj.id,
    amount: obj.amount,
    possibleUnits: obj.possibleUnits,
    nutrients: obj.nutrients,
    caloricBreakdown: obj.caloricBreakdown,
    category: obj.category
  })

  console.log(ingredient)

  try {
    const result = await ingredient.save();
    res.set('Access-Control-Allow-Origin', '*');
    res.send(result);

  } catch (err) {
    res.status(400).json({ message: err })
    console.log(err);
  }
}

async function getIngredientsByCategory(req, res, next) {
  const ingredientCategory = req.body.category
  try {
    const i = await recipeName.find({ category: ingredientCategory })
    res.send(extract(i))
  } catch (err) {
    res.status(400).json({ message: "Category doesn't exist." })
  }
}

exports.getIngredientsByCategory = getIngredientsByCategory;
exports.addNewIngredient = addNewIngredient;