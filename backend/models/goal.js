const mongoose = require("mongoose");
const goalSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  calories: {
    type: String,
    required: true,
  },
  protein: {
    type: String,
    required: true,
  },
});

//goalSchema.index({ owner: 1 }, { unique: true })

module.exports = mongoose.model("goals", goalSchema);
