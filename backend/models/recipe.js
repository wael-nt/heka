const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: false
  },
  owner: {  // user's email
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: false,
    default: []
  }
})
recipeSchema.index({ name: 1 }, { unique: true })

module.exports = mongoose.model("recipes", recipeSchema)