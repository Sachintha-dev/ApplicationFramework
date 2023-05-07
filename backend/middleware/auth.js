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

const adminMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, key);
    req.user = decoded.user;
    console.log("user access done");
    if (req.user.userrole !== "Admin" || req.user.userrole !== "admin") {
      return res.status(403).send({ message: "Admin Access denied" });
    }
  } catch {
    return res.status(401).send({ message: "Invalid token" });
  }
  next();
};
const cricketerMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, key);
    req.user = decoded.user;
    // Check user role
    if (toLowerCase(req.user.userrole) !== "cricketer") {
      return res.status(403).send({ message: "Cricketer Access denied" });
    }
  } catch {
    return res.status(401).send({ message: "Invalid token" });
  }
  next();
};

module.exports = { Auth, localVariable };
