const { Schema, model } = require('mongoose');
const Joi = require('joi');

const studentSchema = new Schema(
  {
    firstName: {
      type: String, // type: 'string'
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      validate: [
        {
          validator: (email) => {
            // regex
            // Joi, yup, validator.js express-validator
            return Joi.string().email().validate(email).error === undefined;
          },
          // return false -> invalid -> return error msg
          msg: 'Invalid email format',
        },
      ],
    },
    courses: [
      {
        type: String,
        ref: 'Course',
      },
    ],
  },
  {
    timestamps: true,
    // toJSON: {
    //   virtuals: true,
    // },
  }
);

const Student = model('Student', studentSchema);
// 'Student' -> students
module.exports = Student;
