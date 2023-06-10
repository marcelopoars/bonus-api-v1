const Router = require('express');

const customerController =
  require('./modules/customers/controllers/CustomerController')();

const routes = Router();

routes.post('/customers', customerController.create);
routes.get('/customers', customerController.findAll);
routes.get('/customers/:id', customerController.findOne);

module.exports = routes;
