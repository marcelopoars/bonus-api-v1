const {
  FindOneCustomerService,
  UpdateCustomerService,
} = require('../../customers/services');
const { CreateOrderService } = require('../services');
const { validateOnCreateOrder } = require('../validations');
const { calculateAmountPerOrder } = require('../utils');

module.exports = () => ({
  execute: ({ customer_id, amount }) => {
    const customer = FindOneCustomerService().execute(customer_id);

    if (!customer) throw { status: 404, message: 'Customer not found' };

    validateOnCreateOrder(customer_id, amount, customer.cashback);

    const amount_per_order = calculateAmountPerOrder(amount, customer.cashback);

    const cashback_per_order = Number(
      (amount_per_order * (15 / 100)).toFixed(2),
    );

    UpdateCustomerService().execute(customer_id, {
      ...customer,
      cashback: cashback_per_order,
    });

    return CreateOrderService().execute({
      customer_id,
      amount_per_order,
      cashback_per_order,
    });
  },
});
