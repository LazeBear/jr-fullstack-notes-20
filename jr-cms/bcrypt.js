const bcrypt = require('bcrypt');

const password = '123';

// const salt = bcrypt.genSaltSync(12);
// console.log(salt);
const salt = '$2b$12$sBlJKuts0CWtqcQr4Ai9cu';
const hashedPassword = bcrypt.hashSync(password, salt);
console.log(hashedPassword);

// $2b$12$NwnxOMt1akrZDApGHrP0t.QyE7NVsr9EICKMEjEO5fGcaLXNODbZ.
// $2b$12$eXlwPrF0Vgy9WjnFVIKAauekWx9ofNAhopN3tCgUU9Q7W4.Sc39v6

// $2b$12$sBlJKuts0CWtqcQr4Ai9cu

// console.log(bcrypt.compareSync('1234', hashedPassword));
