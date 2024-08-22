const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const signtoken = (paypload) => {
  return jwt.sign(paypload, secretKey);
};

const verifytoken = (token) => {
  return jwt.verify(token, secretKey)
};

module.exports = { signtoken, verifytoken}