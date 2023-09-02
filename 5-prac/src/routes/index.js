// const express = require('express');
// const router = express.Router();
const { Router } = require('express');
const taskRouter = require('./tasks.router');

const router = Router();

router.use('/tasks', taskRouter);

module.exports = router;
