const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

async function verifyUser(req, res, next) {
  try {
    const { email } = req.method == "GET" ? req.query : req.body;

    let exist = await UserModel.findOne({ email });
    if (!exist) return res.status(404).send({ error: "Can't find User!" });
    next();
  } catch (error) {
    return res.status(404).send({ error: "Authentication Error" });
  }
}

async function register(req, res) {
  try {
    const { username, password, email, profile } = req.body;

    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      username,
      password: hashedPassword,
      profile: profile || "",
      email,
    });

    const savedUser = await user.save();
    if (savedUser) {
      return res.status(201).json({ msg: "User registered successfully" });
    } else {
      return res.status(500).json({ error: "Failed to register user" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).send({ error: "Email not found" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return res.status(400).send({ error: "Password does not match" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        username: user.email,
      },
      "key",
      { expiresIn: "24h" }
    );

    return res.status(200).send({
      msg: "Login Successful...!",
      username: user,
      token: token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

async function getUser(req, res) {
  const { username: email } = req.params;

  try {
    if (!email) {
      return res.status(501).send({ error: "Invalid Username" });
    }

    const user = await UserModel.findOne({ email: email }).lean();
    if (!user) {
      return res.status(501).send({ error: "Couldn't Find the User" });
    }

    const { password, ...rest } = user;
    return res.status(201).send(rest);
  } catch (error) {
    return res.status(404).send({ error: "Cannot Find User Data" });
  }
}

async function updateUser(req, res) {
  try {
    const { userId } = req.user;

    if (userId) {
      const body = req.body;

      const updatedUser = await UserModel.updateOne({ _id: userId }, body);

      if (updatedUser.nModified === 0) {
        return res.status(400).json({ error: "No changes made" });
      }

      return res.status(201).json({ msg: "Record updated successfully" });
    } else {
      return res.status(401).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function genarateOTP(req, res) {
  req.app.locals.OTP = await otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  res.status(200).send({ code: req.app.locals.OTP });
}

async function verifyOTP(req, res) {
  console.log(req.app.locals.OTP);
  const { code } = req.query;
  if (parseInt(code) === parseInt(req.app.locals.OTP)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    return res.status(201).send({ msg: "OTP Verified" });
  }
  return res.status(400).send({ error: "OTP Not Verified" });
}

async function createRestSession(req, res) {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false;
    return res.status(201).send({ msg: "Access Granted" });
  }
  return res.status(400).send({ error: "Session Expired" });
}

async function resetPassword(req, res) {
  try {
    if (!req.app.locals.resetSession) {
      return res.status(440).send({ error: "Session expired!" });
    }

    const { email, password } = req.body;

    try {
      const user = await UserModel.findOne({ email });

      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await UserModel.updateOne(
        { username: user.username },
        { password: hashedPassword }
      );

      req.app.locals.resetSession = false; // reset session
      return res.status(201).send({ msg: "Record updated...!" });
    } catch (error) {
      return res.status(500).send({ error: "Unable to update password" });
    }
  } catch (error) {
    return res.status(401).send({ error });
  }
}

module.exports = {
  register,
  verifyUser,
  login,
  getUser,
  updateUser,
  genarateOTP,
  createRestSession,
  resetPassword,
  verifyOTP,
};
