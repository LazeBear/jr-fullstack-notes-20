const express = require('express');

const app = express();

// middleware function
// global middleware function
app.use(express.json());

// application.http method(path, callback function => route handler => middleware function)
// req -> request
// res -> response
app.get('/', (req, res) => {
  // res.send('hello world!!!!!!');
  // res.send({ ab: 1 });

  res.json({ ab: 1 });
  // res.sendStatus(204);
  // res.status(204).send();
});
// fetch

/**
 * 如何从request中获取数据
 * 1. req.params (url中的变量) /:id, example: /4 -> id: "4" (route params)
 *    GET, PUT, DELETE, PATCH
 * 2. req.query， query param (url中的变量 ?id=4 -> id: "4")
 *    GET   -> filtering   pageSize, page, q
 * 3. req.body (body中的数据) - must use express.json middleware
 *    POST PUT PATCH
 *
 * from req.headers (authorization token)
 */
app.get('/users/:id/posts/:postId', (req, res) => {
  const { id, username, user } = req.params;
  // const {id} = req.query;
  // data validation
  res.json({ query: req.query, param: { id, username, user } });
});

app.post('/users', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// app.put
// app.patch
// app.delete

// errr -> error
// next(object) -> error === object
// app.use('',(error, req, res, next) => {

// })

app.listen(3000);

// 匹配所有以/users 开头的请求
// /users, /users/123, /users/123/456/789
// app.use('/users', middleware1, middleware2)

// middleware chain
// error middleware chain

// {
//   id: 1,
//   description: 'task 1',
//   done: false,
// },
