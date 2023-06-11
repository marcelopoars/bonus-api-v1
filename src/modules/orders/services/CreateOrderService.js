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
