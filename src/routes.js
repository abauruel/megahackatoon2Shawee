const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const upload = multer(multerConfig);

const CompanyController = require('./app/controllers/companyController');
const CategoryController = require('./app/controllers/categoryController');
const PaymentMethod = require('./app/controllers/paymentMethodController');
const Comment = require('./app/controllers/commentController');

routes.post('/company', CompanyController.store);
routes.get('/company', CompanyController.index);
routes.get('/company/:id', CompanyController.show);
routes.put('/company/:id', CompanyController.update);
routes.delete('/company/:id', CompanyController.delete);

routes.post('/category', CategoryController.store);
routes.get('/category', CategoryController.index);

routes.post('/payment_method', PaymentMethod.store);
routes.get('/payment_method', PaymentMethod.index);

routes.post('/comment', Comment.store);

module.exports = routes;
