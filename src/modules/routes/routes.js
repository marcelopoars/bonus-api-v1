const Router = require('express');

const routes = Router();

const { CustomerController } = require('../customers/controllers');
const { OrderController } = require('../orders/controllers');

const { validateId } = require('../commons/middlewares/middlewares');

const customerController = CustomerController();
const orderController = OrderController();

// Customer
routes.post('/customers', customerController.create);
routes.get('/customers', customerController.findAll);
routes.get('/customers/:id', validateId, customerController.findOne);
routes.put('/customers/:id', validateId, customerController.update);
routes.delete('/customers/:id', validateId, customerController.delete);

// Order
routes.post('/orders', validateId, orderController.create);
routes.get('/orders', orderController.findAll);
routes.get('/orders/:id', validateId, orderController.findOne);
routes.put('/orders/:id', orderController.update);
routes.delete('/orders/:id', orderController.delete);

module.exports = routes;
