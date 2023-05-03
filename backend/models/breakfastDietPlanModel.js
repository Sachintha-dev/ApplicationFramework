const mongoose = require("mongoose");

//Creating common model for diet plan storing
const breakfastDietPlanScheme = new mongoose.Schema({
  playerID: {
    type: String,
    required: true,
  },

  playerName: {
    type: String,
    required: true,
  },

  dietPlan: [
    {
      date: {
        type: Date,
        default: Date.now,
      },

      type: {
        type: String,
        required: true,
      },

      totalCalories: {
        type: Number,
        required: true,
      },

      totalProtien: {
        type: Number,
        required: true,
      },

      totalFat: {
        type: Number,
        required: true,
      },

      dietDescription: {
        type: String,
        required: true,
      },
      dietID: {
        type: String,
        required: true,
      },
    },
  ],
});

const DietPlan = mongoose.model("DietPlan", breakfastDietPlanScheme);
module.exports = DietPlan;
