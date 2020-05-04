const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { name, email, phone, password } = req.body;
    const userExist = await User.findOne({
      where: {
        email,
      },
    });
    if (userExist)
      return res.status(400).json({ message: 'User already exist' });

    const user = await User.create({
      name,
      email,
      phone,
      password,
    });
    return res.json(user);
  },
};
