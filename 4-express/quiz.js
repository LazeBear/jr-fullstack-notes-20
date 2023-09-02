const express = require('express');
const app = express();
function m1(req, res, next) {
  console.log('m1');
  next();
}
function m2(req, res, next) {
  console.log('m2');
  next();
}
function m3(req, res, next) {
  console.log('m3');
  next();
}
function m4(req, res, next) {
  console.log('m4');
  // next();
  res.json({ msg: 'm4' });
}
function m5(req, res, next) {
  console.log('m5');
  // if (xxxx) {
  res.json({ msg: 'm5' });
  // return;
  // }
  // next();
}
app.use(m1);
app.use('/v1', m2);
app.get('/v1/tasks', m3, m4);
app.get('/v1/tasks/:id', m5, (req, res) => {
  console.log('m6');
  res.json(req.params);
});
app.listen(3000, () => console.log('listen on 3000'));
// quiz (what's get logged in the terminal and what's the response?)
// 1. GET /v1
// 2. GET /v1/tasks
// 3. GET /v1/tasks/1
// 4. GET /v1/tasks/2/description
