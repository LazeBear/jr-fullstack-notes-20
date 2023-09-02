const express = require('express');
// const cors = require('./middleware/cors');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./routes');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
// log
// console.log x
// winston

app.use(router);

app.listen(3000, () => {
  console.log('listening on 3000');
});

// const foo = () => {
//   return (req, res, next) => {}
// }
