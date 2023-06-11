const Router = require('express');

const CustomerController = require('./modules/customers/controllers');
const OrderController = require('./modules/orders/controllers/OrderController');

const routes = Router();

// Customer
routes.post('/customers', CustomerController().create);
routes.get('/customers', CustomerController().findAll);
routes.get('/customers/:id', CustomerController().findOne);
routes.put('/customers/:id', CustomerController().update);
routes.delete('/customers/:id', CustomerController().delete);

// Order
routes.post('/orders', OrderController().create);
routes.get('/orders', OrderController().findAll);
routes.get('/orders/:id', OrderController().findOne);

module.exports = routes;
