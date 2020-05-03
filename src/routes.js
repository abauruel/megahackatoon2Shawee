const routes = require('express').Router();
const Company = require('./app/models/Company');
const Category = require('./app/models/Category');
const Payment_method = require('./app/models/Payment_method');
const Budget = require('./app/models/Budget');
const Category_company = require('./app/models/Category_company');
const Payment_Company = require('./app/models/Payment_Company');

routes.get('/', async (req, res) => {
  const payment_Company = await Payment_Company.create({
    payment_id: 1,
    company_id: 5,
  });
  return res.json(payment_Company);
});

module.exports = routes;
