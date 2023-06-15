const orderRepository = require('../repositories/OrderRepository');

module.exports = () => ({
  execute: id => {
    return orderRepository.findOne(id);
  },
});
