// Validações de Regras de negócio
const {
  FindOneCustomerService,
  UpdateCustomerService,
} = require('../../customers/services');
const { CreateOrderService } = require('../services');
const { validateOnCreateOrder } = require('../validations');
const { calculateAmountByOrder } = require('../utils');

module.exports = () => ({
  execute: ({ customer_id, amount }) => {
    const customer = FindOneCustomerService().execute(customer_id);

    if (!customer)
      throw {
        status: 404,
        message: 'Customer not found',
        file: 'CreateOrderBusiness.js',
        line: 14,
      };

    validateOnCreateOrder(customer_id, amount, customer.cashback);

    const amount_per_order = calculateAmountByOrder(amount, customer.cashback);

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
