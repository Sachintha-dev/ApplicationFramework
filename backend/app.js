const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const brekfastDiet = require("./routes/breakfastDietPlanRoute");
app.use(express.json());
app.use(cors());

const PORT = 5012;

app.use("/api/breakfastPlan/", brekfastDiet);

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
