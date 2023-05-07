const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");

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

    // const token = jwt.sign(
    //   {
    //     userId: user._id,
    //     username: user.username,
    //   },
    //   ENV.JWT_SECRET,
    //   { expiresIn: "24h" }
    // );

    return res.status(200).send({
      msg: "Login Successful...!",
      username: user,
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
  res.json("Genarate OTP");
}

async function createRestSession(req, res) {
  res.json("Create Rest Session");
}
async function verifyOTP(req, res) {
  res.json("Verify the OTP");
}

async function resetpassword(req, res) {
  res.json("Reset Password");
}

async function registermail(req, res) {
  res.json("Registermail");
}

module.exports = {
  register,
  login,
  getUser,
  updateUser,
  genarateOTP,
  createRestSession,
  resetpassword,
  registermail,
  verifyOTP,
};
