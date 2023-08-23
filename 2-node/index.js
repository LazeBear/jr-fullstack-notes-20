// const moduleA = { exports: {} };

// (function (module) {

// })(moduleA);

// filename, package/module name - built-in module / third-party module (npm)
const { increment: inc, getCount } = require('./counter');

inc();
inc();
inc();
inc();
inc();
console.log(getCount());

function sum(a, b) {}
