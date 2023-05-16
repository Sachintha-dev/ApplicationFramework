const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide unique Username"],
    unique: [true, "Username Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: true,
  },
  userRole: {
    type: String,
    enum: ["admin", "doctor", "dietitian", "cricketer"],
    default: "cricketer",
  },
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
  birthDay: { type: Date },
  education: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
