const routes = require('express').Router();
const Company = require('./app/models/Company');
const Category = require('./app/models/Category');
const Payment_method = require('./app/models/Payment_method');
const Budget = require('./app/models/Budget');

routes.get('/', async (req, res) => {
  const budget = await Budget.create({
    price: 122,
    description: 'Isso é um teste',
    company_id: 5,
    category_id: 1,
  });
  return res.json(budget);
});

module.exports = routes;
