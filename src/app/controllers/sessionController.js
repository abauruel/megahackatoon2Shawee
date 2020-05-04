const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authConfig = require('../../config/auth');

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) return res.status(403).json({ message: 'User is not exits' });

    if (!(await user.checkPassword(password))) {
      return res.status(403).json({ message: 'Password does not match' });
    }
    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  },
};
