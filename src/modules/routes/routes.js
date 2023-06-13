const Router = require('express');

const routes = Router();

const { CustomerController } = require('../customers/controllers');
const { OrderController } = require('../orders/controllers');

const customerController = CustomerController();
const orderController = OrderController();

// Customer
routes.post('/customers', customerController.create);
routes.get('/customers', customerController.findAll);
routes.get('/customers/:id', customerController.findOne);
routes.put('/customers/:id', customerController.update);
routes.delete('/customers/:id', customerController.delete);

// Order
routes.post('/orders', orderController.create);
routes.get('/orders', orderController.findAll);
routes.get('/orders/:id', orderController.findOne);
routes.put('/orders/:id', orderController.update);
routes.delete('/orders/:id', orderController.delete);

module.exports = routes;
