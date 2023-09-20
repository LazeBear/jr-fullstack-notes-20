const User = require('../models/user.model');
const register = async (req, res) => {
  const { username, password } = req.body;
  // validation

  const user = new User({ username, password });
  await user.save();

  res.status(201).json({ _id: user._id, username });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).exec();
  if (!user) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }
  if (user.password !== password) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }
  res.json({
    _id: user._id,
    username: user.username,
  });
};

module.exports = {
  register,
  login,
};
