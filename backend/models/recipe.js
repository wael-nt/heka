const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false
  },
  public: {
    type: Boolean,
    required: true,
    default: false
  },
  img: {
    type: String,
    required: false,
    default: " "
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
// recipeSchema.index({ name: 1 }, { unique: true })

module.exports = mongoose.model("recipes", recipeSchema)