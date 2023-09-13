const { Schema, model } = require('mongoose');

module.exports = model(
  'Course',
  new Schema({
    _id: {
      // code
      alias: 'code', // 在mongoose level取了一个别名 -> virtual property
      type: String,
      required: true,
      uppercase: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'Course description',
    },
  })
);
