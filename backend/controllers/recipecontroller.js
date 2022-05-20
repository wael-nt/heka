const recipeSchema = require('../models/recipe')

exports.addNewRecipe = async function addNewRecipe(req, res, next) {

  const ingredients = req.body.ingredients
  console.log(ingredients);
  const obj = req.body  // {..., ingredient: [],...}
  console.log(obj);

  const recipe = new recipeSchema({
    name: obj.name,
    owner: obj.owner,
    public: obj.public,
    img: obj.img,
    description: obj.description,
    ingredients: ingredients
  })

  try {
    const r = await recipe.save()
    res.send(extract(r))
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err })
  }
}

function extract(r) {
  const recipe = {
    name: r.name,
    public: r.public,
    img: r.img,
    description: r.description,
    owner: r.owner,
    ingredients: r.ingredients,
  }
  return recipe
}

exports.deleteRecipe = async function deleteRecipe(req, res, next) {
  const deleted = await recipeSchema.findOne({ name: req.body.name }) // by recipe's name

  if (deleted != null) {
    await recipeSchema.deleteOne({ name: req.body.name })
    res.send(extract(deleted))
  } else
    res.status(400).json({ message: "Recipe doesn't exist." })
}

exports.deleteAllRecipes = async function deleteAllRecipes(req, res, next) {
  const deleted = await recipeSchema.find({ owner: req.body.owner })

  if (deleted != null) {
    await recipeSchema.deleteMany({ owner: req.body.owner })
    res.status(204).json({ message: 'Recipes deleted' })
    // res.send(extract(deleted))
  } else
    res.status(400).json({ message: "No recipes to delete." })
}

exports.getRecipe = async function getRecipe(req, res, next) {
  const recipeName = req.params.name
  try {
    const r = await recipeSchema.findOne({ name: recipeName })
    res.send(extract(r))
  } catch (err) {
    res.status(400).json({ message: "Recipe doesn't exist." })
  }
}


// get private recipes
exports.getPrivateRecipes = async function getPrivateRecipes(req, res, next) {
  const owner = req.params.email

  console.log(owner);
  try {
    const r = await recipeSchema.find({ owner: owner, public: false })
    res.send(r)
  } catch (err) {
    res.status(204).json({ message: "No private recipes." })
  }
}

// get public recipes 
exports.getPublicRecipes = async function getPublicRecipes(req, res, next) {
  try {
    const recipes = await recipeSchema.find({ public: true })
    res.send(recipes)
  } catch (err) {
    res.status(204).json({ message: 'No recipes' })
  }
}