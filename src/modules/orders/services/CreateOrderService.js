// O service faz integração com outras APIs ou o bancos de dados

const OrderRepository = require('../repositories/OrderRepository');

const orderRepository = new OrderRepository();

module.exports = () => ({
  execute: (
    customerIndex,
    customers,
    { customerId, amount, cashbackByOrder },
  ) => {
    return orderRepository.create(customerIndex, customers, {
      customerId,
      amount,
      cashbackByOrder,
    });
  },
});
