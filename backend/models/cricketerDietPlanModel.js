const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  playerID: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  type: {
    type: String,
    required: true,
  },

  mealDescription: {
    type: String,
    required: true,
  },
  caloriesMeasure: {
    type: Number,
    required: true,
  },

  protienMeasure: {
    type: Number,
    required: true,
  },
  fatMeasure: {
    type: Number,
    required: true,
  },

  note: {
    type: String,
    required: true,
  },
});

const meal = mongoose.model("meal", mealSchema);
module.exports = meal;
