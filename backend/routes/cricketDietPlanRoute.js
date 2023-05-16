const express = require("express");
const router = express.Router();

const {
  createMealByCricketer,
  getMealByCricketer,
  deleteMeal,
  searchMealById,
  updateMeal,
} = require("../controllers/cricketerDietPlanController");

//Add new Meal taken by cricketer

router.post("/addMeal/", createMealByCricketer);

//Get meal details of cricketer
router.get("/getMealDetails/:playerID", getMealByCricketer);

//Delete a meal
router.delete("/deleteMealDetails/:id", deleteMeal);

//Update meal details
router.put("/updateMealDetails/:id", updateMeal);

//Search meal
router.get("/searchMealDetails/:id", searchMealById);

module.exports = router;
