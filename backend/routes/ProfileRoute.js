const express = require("express");
const router = express.Router();
const middleware = require("../middleware/auth");
const controllers = require("../controllers/ProfileController");
const mailer = require("../controllers/mailer");

router.route("/register").post(controllers.register);
router.route("/authenticate").post((Req, res) => {
  res.end();
});
router.route("/login").post(controllers.verifyUser, controllers.login);
router.route("/registermail").post(mailer.registerMail);

router.route("/user/:username").get(controllers.getUser);
router
  .route("/genarateOTP")
  .get(
    controllers.verifyUser,
    middleware.localVariable,
    controllers.genarateOTP
  );
router.route("/verifyOTP").get(controllers.verifyOTP);
router.route("/createRestSession").get(controllers.createRestSession);

router.route("/updateuser").put(controllers.updateUser);
router.route("/resetpassword").put(controllers.resetPassword);
router.route("/registercrickter").post(controllers.registerCrickter);

module.exports = router;
