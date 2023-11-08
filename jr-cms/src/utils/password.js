const bcrypt = require('bcrypt');

const hashPassword = async (rawPassword) => {
  return bcrypt.hash(rawPassword, 12);
};

module.exports = {
  hashPassword,
};
