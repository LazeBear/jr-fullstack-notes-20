const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // wildcard
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
};

module.exports = cors;
