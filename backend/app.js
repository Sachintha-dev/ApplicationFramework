const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const PORT = 5012;

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
