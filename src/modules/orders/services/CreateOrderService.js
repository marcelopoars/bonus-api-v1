const orderRepository = require('../repositories/OrderRepository');

module.exports = () => ({
  execute: data => {
    return orderRepository.create(data);
  },
});
