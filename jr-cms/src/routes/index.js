const { Router } = require('express');
const studentRouter = require('./student.routes.js');
const courseRouter = require('./course.routes.js');
const authRouter = require('./auth.routes.js');
const roleGuard = require('../middleware/roleGuard.js');
const authGuard = require('../middleware/authGuard.js');

const v1Router = Router();

v1Router.use('/students', authGuard, studentRouter);
v1Router.use('/courses', roleGuard('admin'), courseRouter);
v1Router.use('/auth', authRouter);

module.exports = v1Router;

// cmd + D
