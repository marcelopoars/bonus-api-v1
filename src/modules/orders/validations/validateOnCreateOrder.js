const { validateType } = require('../../commons/validations');

function validateOnCreateOrder(customerId, amount, customerBashback) {
  if (!customerId || !amount)
    throw {
      status: 400,
      message: 'All fields are required',
    };

  if (amount <= 0)
    throw {
      status: 422,
      message: 'Amount must be greater than zero',
    };

  if (customerBashback > amount)
    throw {
      status: 422,
      message: 'Amount must be greater than customerBashback',
      cashback: customerBashback,
    };

  validateType({ value: customerId, name: 'customerId' });
  validateType({ value: amount, name: 'amount', type: 'number' });
}

module.exports = validateOnCreateOrder;
