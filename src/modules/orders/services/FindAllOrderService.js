// O service serve para fazer integração com outras APIs ou o banco de dados
const OrderRepository = require('../repositories/OrderRepository');

const orderRepository = new OrderRepository();

module.exports = () => ({
  execute: () => {
    return orderRepository.findAll();
  },
});
