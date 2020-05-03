const routes = require('express').Router();
const Company = require('./app/models/Company');
const Category = require('./app/models/Category');
const Payment_method = require('./app/models/Payment_method');
const Budget = require('./app/models/Budget');
const Category_company = require('./app/models/Category_company');

routes.get('/', async (req, res) => {
  const category_company = await Category_company.create({
    category_id: 4,
    company_id: 5,
  });
  return res.json(category_company);
});

module.exports = routes;
