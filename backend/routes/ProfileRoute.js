const express = require("express");
const router = express.Router();

const controllers = require("../controllers/ProfileController");

router.route("/register").post((req, res) => {
  res.json("Register");
});
//router.route("/registermail").post(controllers.register);
router.route("/authenticate").post((Req, res) => {
  res.end();
});
router.route("/login").post(controllers.login);
//router.route("/registermail").post();

router.route("/user/:username").get(controllers.getUser);
router.route("/genarateOTP").get(controllers.genarateOTP);
router.route("/verifyOTP").get(controllers.verifyOTP);
router.route("/createRestSession").get(controllers.createRestSession);

router.route("/updateuser").put(controllers.updateUser);
router.route("/resetpassword").put(controllers.resetpassword);

module.exports = router;
