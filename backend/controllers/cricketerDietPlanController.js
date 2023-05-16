const Meal = require("../models/cricketerDietPlanModel");

//Add meal taken by cricketer to DB
const createMealByCricketer = async (req, res) => {
  const {
    playerID,
    date,
    type,
    mealDescription,
    caloriesMeasure,
    protienMeasure,
    fatMeasure,
    note,
  } = req.body;

  const newMeal = new Meal({
    playerID,
    date,
    type,
    mealDescription,
    caloriesMeasure,
    protienMeasure,
    fatMeasure,
    note,
  });

  newMeal
    .save()
    .then(() => {
      res.json("Meal Added");
    })
    .catch((error) => {
      console.log(error);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with get payment", error: err.message });
    });
};

//Get All Meals per specific cricketre

const getMealByCricketer = async (req, res) => {
  let playerID = req.params.playerID;
  const meal = await Meal.find({ playerID: playerID });

  if (meal.length === 0) {
    return res.json("No meal plan found");
  }
  res.status(200).json(meal);
};

//Update Meal
const updateMeal = async (req, res) => {
  try {
    const mealID = req.params.id;
    const meal = await Meal.findByIdAndUpdate({ _id: mealID }, { ...req.body });
    if (!meal) {
      return res.json("Meal Plan not found");
    }

    return res.status(200).json(meal);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal server  Rrror");
  }
};

//Delete user taken meal

const deleteMeal = async (req, res) => {
  let mealID = req.params.id;

  await Meal.findByIdAndDelete(mealID)
    .then(() => {
      res.status(200).send({ status: "Meal deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error with delete data" });
    });
};

// Search for meal by id

const searchMealById = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }
    res.json(meal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server noy fiund" });
  }
};

module.exports = {
  createMealByCricketer,
  getMealByCricketer,
  updateMeal,
  deleteMeal,
  searchMealById,
};
