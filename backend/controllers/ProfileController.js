const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");

async function register(req, res) {
  try {
    const { username, password, email, profile } = req.body;

    const existEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email: email }, (err, email) => {
        if (err) reject(new Error(err));
        if (email) reject(new Error("Email already exist"));

        resolve();
      });
    });
    Promise.all([existEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              const user = new UserModel({
                username,
                password: hashedPassword,
                profile: profile || "",
                email,
              });
              user
                .save()
                .then((result) =>
                  res.status(201).send({ msg: "User Register Successfully" })
                )
                .catch((error) => res.status(500).send({ error }));
            })
            .catch((error) => {
              return res.status(500).send({
                error: "Enable to hashed password",
              });
            });
        }
      })
      .catch((error) => {
        return res.status(500).send({ error });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function login(req, res) {
  res.json("Login");
}

async function getUser(req, res) {
  res.json("Get User");
}

async function updateUser(req, res) {
  res.json("Update User");
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
