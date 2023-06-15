const orderRepository = require('../repositories/OrderRepository');

module.exports = () => ({
  execute: () => {
    return orderRepository.findAll();
  },
});
