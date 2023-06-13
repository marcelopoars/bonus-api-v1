// Validações de Regras de negócio

const {
  FindOneCustomerService,
  FindAllCustomerService,
} = require('../../customers/services');
const { CreateOrderService } = require('../services');
const { validateOnCreateOrder } = require('../validations');
const { calculateAmountByOrder, calculateCashback } = require('../utils');

module.exports = () => ({
  execute: ({ customerId, amount }) => {
    const customer = FindOneCustomerService().execute(customerId);

    if (!customer) throw { status: 404, message: 'Customer not found' };

    const customers = FindAllCustomerService().execute(customerId);

    const customerIndex = customers.findIndex(
      customer => customer._id === customerId,
    );

    const currentCustomerCashback = customer.cashback;

    validateOnCreateOrder(customerId, amount, currentCustomerCashback);

    const amountByOrder = calculateAmountByOrder(
      amount,
      currentCustomerCashback,
    );

    const cashbackByOrder = calculateCashback(amountByOrder);

    return CreateOrderService().execute(customerIndex, customers, {
      customerId,
      amount: amountByOrder,
      cashbackByOrder,
    });
  },
});
