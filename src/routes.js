const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const authMiddleware = require('./app/middlewares/auth');

const upload = multer(multerConfig);

const UserController = require('./app/controllers/userController');
const SessionController = require('./app/controllers/sessionController');

const FileController = require('./app/controllers/fileController');
const CompanyController = require('./app/controllers/companyController');
const CategoryController = require('./app/controllers/categoryController');
const PaymentMethod = require('./app/controllers/paymentMethodController');
const Comment = require('./app/controllers/commentController');
const BudgetRequest = require('./app/controllers/budgetController');
const DifferentialController = require('./app/controllers/differentialController');
const DeliveryController = require('./app/controllers/deliveryController');
const CompanyFiltersController = require('./app/controllers/companyFilterController');

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

routes.post('/file', upload.array('file', 12), FileController.store);
routes.post('/company', CompanyController.store);
routes.get('/company', CompanyController.index);
routes.get('/company/:id', CompanyController.show);
routes.put('/company/:id', CompanyController.update);
routes.delete('/company/:id', CompanyController.delete);
routes.post('/category', CategoryController.store);
routes.get('/category', CategoryController.index);
routes.post('/payment_method', PaymentMethod.store);
routes.get('/payment_method', PaymentMethod.index);
routes.get('/comment', Comment.index);
routes.get('/differential', DifferentialController.index);
routes.get('/delivery', DeliveryController.index);
routes.get('/companies', CompanyFiltersController.index);

routes.use(authMiddleware);

routes.post('/budget', BudgetRequest.store);
routes.post('/comment', Comment.store);

module.exports = routes;
