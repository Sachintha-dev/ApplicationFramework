const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const brekfastDiet = require("./routes/breakfastDietPlanRoute");

const mealPlan = require("./routes/cricketDietPlanRoute");
const profileRoute = require("./routes/ProfileRoute");


app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: "http://127.0.0.1:5173", // Replace with the allowed origin
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

const PORT = 5012;

app.use("/api/breakfastPlan/", brekfastDiet);

app.use("/api/MealPlan", mealPlan);

app.use("/", profileRoute);


mongoose.connect(
  "mongodb+srv://senulananayakkara88:gwPB7uWsD8eKIYfO@cricketdb.ozfnpql.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log("Connected to mongo DB")
);

app.listen(PORT, (req, res) => {
  console.log("App is running on port" + PORT);
});
