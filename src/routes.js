const routes = require('express').Router();
const Company = require('./app/models/Company');
const Category = require('./app/models/Category');

routes.get('/', async (req, res) => {
  const category = await Category.create({
    name: 'test',
  });
  return res.json(category);
});

module.exports = routes;
