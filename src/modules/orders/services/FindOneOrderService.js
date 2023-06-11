const OrderRepository = require('../repositories/OrderRepository');

const orderRepository = new OrderRepository();

module.exports = () => ({
  execute: id => {
    return orderRepository.findOne(id);
  },
});
