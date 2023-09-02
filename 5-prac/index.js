const express = require('express');
// const cors = require('cors');
const app = express();
const router = require('./router');

const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // wildcard
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
};

// app.use(cors());
app.use(express.json()); // body-parser
app.use(cors);
// app.use('/v1', router);
// router.get('/tasks', routeHandler);
// GET /v1/tasks
app.use(router);

app.listen(3000, () => {
  console.log('listening on 3000');
});

// A.com(server) -> actual data (NO CORS headers)
// B.com -> A.com (CORS issue)
// C.com(server) -> A.com (server)
// B.com -> C.com (include CORS header)
// cors-anywhere
