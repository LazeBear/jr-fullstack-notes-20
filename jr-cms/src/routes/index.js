const { Router } = require('express');
const studentRouter = require('./student.routes.js');
const courseRouter = require('./course.routes.js');

const v1Router = Router();

v1Router.use('/students', studentRouter);
v1Router.use('/courses', courseRouter);

module.exports = v1Router;

// cmd + D
