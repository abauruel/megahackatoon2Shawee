const routes = require('express').Router();
const Company = require('./app/models/Company');

routes.get('/', async (req, res) => {
  const company = await Company.create({
    name: 'test',
    phone: '1128254840',
    cnpj: '08.330.971/0001-01',
    adress: 'av. test',
    city: 'São Paulo',
    state: 'São Paulo',
    description: 'Isso é um test',
  });
  return res.json(company);
});

module.exports = routes;
