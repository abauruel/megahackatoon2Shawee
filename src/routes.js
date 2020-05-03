const routes = require('express').Router();
const Company = require('./app/models/Company');
const Category = require('./app/models/Category');
const Payment_method = require('./app/models/Payment_method');

routes.get('/', async (req, res) => {
  const payment_method = await Payment_method.create({
    name: 'test',
  });
  return res.json(payment_method);
});

module.exports = routes;
