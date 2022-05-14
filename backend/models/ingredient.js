const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  id: {
    type: Number,
    default: 0
  },
  amount: {
    type: Number,
    default: 0,
    unique: false
  },
  possibleUnits: {
    type: Array,
    default: []
  },
  nutrients: {
    type: Array,
    default: []
  },
  caloricBreakdown: {
    type: Array,
    default: [] //%protein, %fat, %carbs
  },
  category: {
    type: String,
  }
})

const Ingredient = mongoose.model("Food", ingredientSchema)


module.exports = Ingredient;