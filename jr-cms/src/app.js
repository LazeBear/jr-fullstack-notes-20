const express = require('express');
require('express-async-errors');
const v1Router = require('./routes');
const unknownError = require('./middleware/error/unknownError');
const validationError = require('./middleware/error/validationError');
const notFoundError = require('./middleware/error/notFoundError');

const app = express();

app.use(express.json());
app.use('/v1', v1Router);

app.use(validationError);
app.use(notFoundError);
app.use(unknownError);

module.exports = app;
