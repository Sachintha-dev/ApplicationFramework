async function Auth(req, res, next) {
  try {
    const token = req.Header("Authorization").split(" ")[1];
    res.json(token);
    const decodedToken = await jwt.verify(token, "key");
    req.user = decodedToken;
    res.json(decodedToken);
    next();
  } catch (error) {
    res.status(401).json({ error: "UnAuthorized" });
  }
}

function localVariable(req, res, next) {
  req.app.locals = {
    OTP: null,
    resetSession: false,
  };
  next();
}

module.exports = { Auth, localVariable };
