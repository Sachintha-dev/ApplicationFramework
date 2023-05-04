const express = require("express");
const router = express.Router();

const {
  addBreakfastPlan,
  getBreakfastPlanDetails,
  deleteBreakfastDietDetails,
  getAllBreakfastDietPlans,
  updateDietPlan,
} = require("../controllers/breakfastDietPlanController");

//Add new breakfast diet plan
router.post("/breakfast", addBreakfastPlan);

//Get breakfast diet plan details according to user ID
router.get("/getBreakfastPlayerDetails/:playerID", getBreakfastPlanDetails);

//Delete a specific breakfast diet plan
router.delete(
  "/deleteBreakfastPlayerDetails/:playerID/:dietID",
  deleteBreakfastDietDetails
);

//Get all breakfast diet plans
router.get("/getBreakfastPlayerDetails/", getAllBreakfastDietPlans);

//Update diet plan
router.put("/updateBreakfastDetails/:playerID", updateDietPlan);
module.exports = router;
