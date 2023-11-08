const User = require('../models/user.model');
const { generateToken } = require('../utils/jwt');
const register = async (req, res) => {
  const { username, password } = req.body;
  // validation
  // 409 conflicts

  // const hashedPassword = bcrypt.hash(password, 12);
  const user = new User({ username, password });
  // user.password = bcrypt.hash(password, 12);
  await user.hashPassword();
  await user.save();

  const token = generateToken({ _id: user._id, username });

  res.status(201).json({ token });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).exec();
  if (!user) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }
  // const validatedPassword
  if (!(await user.validatePassword(password))) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const token = generateToken({ _id: user._id, username, role: 'admin' });

  res.json({
    token,
  });
};

module.exports = {
  register,
  login,
};

// 明文存储
