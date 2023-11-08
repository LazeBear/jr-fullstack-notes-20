const jwt = require('jsonwebtoken');

// secret -> only store in server -> read from environment variable
const secret = 'secret';

const payload = {
  id: 123,
  name: 'John',
};

// m -> minute
// d -> day
// access token -> 1d, 7d, 30d
// refresh token (30d, 1year) -> access token expires shorter -> 15min/ 1day
const token = jwt.sign(payload, secret, { expiresIn: '1m' });
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJuYW1lIjoiSm9obiIsImlhdCI6MTY5OTA5MDk3OCwiZXhwIjoxNjk5MDkxMDM4fQ.9JLS4rUj1YkIh8ZYtKKzG7ZfkwyJVgF7PwL-SZdkhWU';
// console.log(token);

try {
  const decoded = jwt.verify(token, secret);
  console.log(decoded);
} catch (e) {
  console.log('error', e);
}

// email
// user id
// username
// role
// avatar

// tradeoffs

// jwt
// cross-domain (Single page application)
// third-party login

// private key and public key
// Single sign on SSO

// cookie - session
// session id -> user -> cookie (same domain)
// SSR server side rendering
