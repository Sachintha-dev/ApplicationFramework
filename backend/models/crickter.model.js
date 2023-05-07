const mongoose = require("mongoose");
const User = require("./User.model");

const cricketerSchema = new mongoose.Schema({
  playingRole: String,
  battingStyle: String,
  bowlingStyle: String,
});

const Cricketer = User.discriminator("Cricketer", cricketerSchema);

module.exports = Cricketer;
