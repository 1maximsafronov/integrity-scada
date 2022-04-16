const jwt = require("jsonwebtoken");
const {SECRET_KEY} = require("../const")

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "12h" });
};

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

const verifyToken = (token)=> {
  return jwt.verify(token, SECRET_KEY);
}


module.exports = {
  generateToken,
  authenticateToken,
  verifyToken
};
