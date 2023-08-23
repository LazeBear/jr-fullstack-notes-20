let count = 0;

function increment() {
  count++;
}

function getCount() {
  return count;
}

module.exports = {
  increment,
  getCount,
};

// console.log(__filename, __dirname);

// exports = module.exports

// exports.increment = increment;
// exports = {} x

// Commonjs
// Es modules
