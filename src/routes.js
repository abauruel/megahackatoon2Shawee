const routes = require('express').Router();
const Company = require('./app/models/Company');
const Category = require('./app/models/Category');
const Payment_method = require('./app/models/Payment_method');
const Budget = require('./app/models/Budget');
const Category_company = require('./app/models/Category_company');
const Payment_Company = require('./app/models/Payment_Company');
const User = require('./app/models/User');

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'test',
    phone: 1128254840,
    email: 'test@gmail.com',
    password: '123456789',
  });
  return res.json(user);
});

module.exports = routes;
