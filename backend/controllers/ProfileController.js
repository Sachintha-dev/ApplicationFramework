async function register(req, res) {
  res.json("Register");
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
