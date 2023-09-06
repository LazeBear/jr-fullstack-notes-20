require('dotenv').config();
const express = require('express');
// const cors = require('./middleware/cors');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const router = require('./routes');
const createLogger = require('./utils/logger');
const swaggerJsDoc = require('./utils/swagger');

const logger = createLogger(__filename);
const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev', {
    stream: logger.stream,
  })
);
// log
// console.log x
// winston
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));
app.use(router);

// NODE_ENV
// development - dev
// staging - stag
// production - prod
// testing

app.listen(PORT, () => {
  logger.info(`listening on ${PORT}`);
});

// const foo = () => {
//   return (req, res, next) => {}
// }

// api doc
// yaml
// yml
