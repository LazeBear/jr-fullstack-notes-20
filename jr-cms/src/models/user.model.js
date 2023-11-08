const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');

const schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // mongoose create unique index in mongodb
  },
  password: {
    type: String,
    required: true,
  },
});

schema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 12);
};

// userDocument.hashPassword();

schema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model('User', schema);
