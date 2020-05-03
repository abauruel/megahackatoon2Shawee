const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const upload = multer(multerConfig);

const CompanyController = require('./app/controllers/companyController');

routes.post('/company', CompanyController.store);
routes.get('/company', CompanyController.index);
routes.get('/company/:id', CompanyController.show);
routes.put('/company/:id', CompanyController.update);
routes.delete('/company/:id', CompanyController.delete);

module.exports = routes;
