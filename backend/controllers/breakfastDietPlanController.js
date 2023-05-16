const DietPlan = require("../models/breakfastDietPlanModel");
const Breakfast = require("../models/breakfastDietPlanModel");

//Add new Diet Paln
const addBreakfastPlan = async (req, res) => {
  const playerID = req.body.playerID;
  const playerName = req.body.playerName;
  const dietID = req.body.dietID;
  const date = Date(req.body.date);
  const type = req.body.type;
  const dietDescription = req.body.dietDescription;
  const totalCalories = Number(req.body.totalCalories);
  const totalFat = Number(req.body.totalFat);
  const totalProtien = Number(req.body.totalProtien);

  let breakfast = await Breakfast.findOne({ playerID: playerID });
  if (!breakfast) {
    breakfast = new Breakfast({
      playerID,
      playerName,
      dietPlan: [
        {
          dietID,
          date,
          type,
          dietDescription,
          totalCalories,
          totalFat,
          totalProtien,
        },
      ],
    });
  } else {
    breakfast.dietPlan.push({
      dietID,
      date,
      type,
      dietDescription,
      totalCalories,
      totalFat,
      totalProtien,
    });
  }

  breakfast
    .save()
    .then(() => {
      res.json("Breakfast Diet plan Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get breakfast diet plan details which specific to player ID

const getBreakfastPlanDetails = async (req, res) => {
  try {
    const playerID = req.params.playerID;

    const breakfast = await Breakfast.find({ playerID: playerID });

    if (breakfast.length === 0) {
      return res.json("No Breakfast Plan found");
    }

    const breakfastDetails = breakfast.map((breakfastDiet) => {
      const dietPlan = breakfastDiet.dietPlan.map((dietPlan) => {
        return {
          _id: dietPlan._id,
          dietID: dietPlan.dietID,
          date: dietPlan.date,
          type: dietPlan.type,
          dietDescription: dietPlan.dietDescription,
          totalCalories: dietPlan.totalCalories,
          totalFat: dietPlan.totalFat,
          totalProtien: dietPlan.totalProtien,
        };
      });

      return {
        playerID: breakfastDiet.playerID,
        playerName: breakfastDiet.playerName,
        dietPlan: dietPlan,
      };
    });
    res.status(200).json(breakfastDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Get All breakfast diet plans

const getAllBreakfastDietPlans = async (req, res) => {
  Breakfast.find()
    .then((breakfastDetails) => {
      res.json(breakfastDetails);
    })

    .catch((error) => {
      console.log(error);
    });
};

//Delete a diet plan of a user
const deleteBreakfastDietDetails = async (req, res) => {
  try {
    const playerID = req.params.playerID;
    const dietID = req.params.dietID;

    const breakfastDiat = await Breakfast.find({ playerID: playerID });

    if (breakfastDiat.length === 0) {
      return res.json("No Breakfast Plan found");
    }

    // Remove the diet from the breakfastDietPlanScheme dietPlan array
    const newDiatPlan = breakfastDiat[0].dietPlan.filter(
      (dietPlan) => dietPlan.dietID !== dietID
    );

    await Breakfast.updateOne(
      { playerID: playerID },
      { $set: { dietPlan: newDiatPlan } }
    );

    res.json("Diet plan successfully deleted");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

//Update a diet plan of user
const updateDietPlan = async (req, res) => {
  try {
    const dietID = req.params.playerID;
    const updatedDietPlan = req.body;

    const breakfastDiat = await Breakfast.findOneAndUpdate(
      { "dietPlan._id": dietID },
      { $set: { "dietPlan.$": updatedDietPlan } },
      { new: true }
    );

    if (!breakfastDiat) {
      return res.json("Diet Plan not found");
    }

    return res.status(200).json(breakfastDiat);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal server  Rrror");
  }
};

//Search diet plan by ID
const searchDietPlan = async (req, res) => {
  try {
    const dietID = req.params.id;
    const diet = await Breakfast.findOne(
      { "dietPlan._id": dietID },
      { dietPlan: { $elemMatch: { _id: dietID } } }
    );

    if (!diet) {
      return res.json("Search diet is not found");
    }

    return res.status(200).json(diet);
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

//Export functions

module.exports = {
  addBreakfastPlan,
  getBreakfastPlanDetails,
  getAllBreakfastDietPlans,
  deleteBreakfastDietDetails,
  updateDietPlan,
  searchDietPlan,
};
