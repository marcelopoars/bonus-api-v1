const { getCustomerBashback } = require('../../utils');

const validateType = require('../commons/validateType');

function validateOnCreateOrder(customerId, amount) {
  if (!customerId || !amount)
    throw {
      status: 400,
      message: 'All fields are required',
    };

  const customerBashback = getCustomerBashback(customerId);

  if (customerBashback > amount)
    throw {
      status: 404,
      message: 'Amount precisa ser maior que o cashback do cliente',
      cashback: customerBashback,
    };

  if (amount <= 0)
    throw {
      status: 422,
      message: 'Amount must be greater than zero',
    };

  validateType({ value: customerId, name: 'customerId', type: 'number' });
  validateType({ value: amount, name: 'amount', type: 'number' });
}

module.exports = validateOnCreateOrder;
