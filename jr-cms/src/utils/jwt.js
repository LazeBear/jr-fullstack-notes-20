const jwt = require('jsonwebtoken');

// secret
const secret = process.env.JWT_KEY;

const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '1d' });
};

const validateToken = (token) => {
  // return jwt.verify(token, secret);
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (e) {
    return null;
  }
};

module.exports = {
  generateToken,
  validateToken,
};
