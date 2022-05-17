const ingredientModel = require('../models/ingredient');

async function addNewIngredient(req, res, next) {

  const obj = req.body;
  const ingredient = new ingredientModel({
    name: obj.name,
    id: obj.id,
    amount: obj.amount,
    possibleUnits: obj.possibleUnits,
    nutrients: obj.nutrients,
    caloricBreakdown: obj.caloricBreakdown,
    categories: obj.categories
  });

  console.log(ingredient);

  try {
    const result = await ingredient.save();
    res.set('Access-Control-Allow-Origin', '*');
    res.send(result);

  } catch (err) {
    res.status(400).json({ message: err });
    console.log(err);
  }
}

async function getIngredientById(req, res, next) {
  const id = req.params.id;
  try {
    const i = await ingredientModel.find({ id: id });
    res.send(i);
  } catch (err) {
    res.status(400).json({ message: "Category doesn't exist." });
  }
}

async function getSearchResults(req, res, next) {
  const search = req.query.search;

  try {
    const i = await ingredientModel.find({ $or: [{ categories: search }, { name: search }] });
    res.send(i);
  } catch (err) {
    res.status(400).json({ message: "Category doesn't exist." });
  }
}

async function getIngredientsByGrains(req, res, next) {
  let categories = ["beans", "grains"];
  try {
    const i = await ingredientModel.find({ categories: { $in: [categories[0], categories[1]] } });
    res.send(i);
  } catch (err) {
    res.status(400).json({ message: "Category doesn't exist." });
  }
}

async function getIngredientsByMeat(req, res, next) {
  let categories = ["fish", "meat"];
  try {
    const i = await ingredientModel.find({ categories: { $in: [categories[0], categories[1]] } });
    res.send(i);
  } catch (err) {
    res.status(400).json({ message: "Category doesn't exist." });
  }
}

async function getIngredientsByVegetables(req, res, next) {
  try {
    const i = await ingredientModel.find({ categories: "vegetable" });
    res.send(i);
  } catch (err) {
    res.status(400).json({ message: "Category doesn't exist." });
  }
}

async function getIngredientsByFruit(req, res, next) {
  try {
    const i = await ingredientModel.find({ categories: "fruit" });
    res.send(i);
  } catch (err) {
    res.status(400).json({ message: "Category doesn't exist." });
  }
}

async function getIngredientsByDrinks(req, res, next) {
  try {
    const i = await ingredientModel.find({ categories: "drink" });
    res.send(i);
  } catch (err) {
    res.status(400).json({ message: "Category doesn't exist." });
  }
}

async function getIngredientsByDairy(req, res, next) {
  let categories = ["cheese", "cream", "milk", "yogurt", "butter"];
  try {
    const i = await ingredientModel.find(
      {
        categories: {
          $in: [categories[0], categories[1], categories[2], categories[3], categories[4]]
        }
      });
    res.send(i);
  } catch (err) {
    res.status(400).json({ message: "Category doesn't exist." });
  }
}

async function getIngredientsByMiscellaneous(req, res, next) {
  let categories = [
    "cheese",
    "cream",
    "milk",
    "yogurt",
    "butter",
    "drink",
    "fruit",
    "vegetable",
    "fish",
    "meat",
    "beans",
    "grains"
  ];
  try {
    const i = await ingredientModel.find(
      {
        categories: {
          $nin: [categories[0], categories[1], categories[2], categories[3],
          categories[4], categories[5], categories[6], categories[7], categories[8],
          categories[9], categories[10], categories[11]]
        }
      });
    res.send(i);
  } catch (err) {
    res.status(400).json({ message: "Category doesn't exist." });
  }
}

exports.addNewIngredient = addNewIngredient;
exports.getIngredientsByDrinks = getIngredientsByDrinks;
exports.getIngredientsByFruit = getIngredientsByFruit;
exports.getIngredientsByGrains = getIngredientsByGrains;
exports.getIngredientsByVegetables = getIngredientsByVegetables;
exports.getIngredientsByMeat = getIngredientsByMeat;
exports.getIngredientsByDairy = getIngredientsByDairy;
exports.getIngredientsByMiscellaneous = getIngredientsByMiscellaneous;
exports.getSearchResults = getSearchResults;
exports.getIngredientById = getIngredientById;
