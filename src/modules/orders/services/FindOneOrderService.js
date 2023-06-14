// O service faz integração com outras APIs ou o bancos de dados

const orderRepository = require('../repositories/OrderRepository');

module.exports = () => ({
  execute: id => {
    return orderRepository.findOne(id);
  },
});
