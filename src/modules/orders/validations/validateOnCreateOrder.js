const { validateType } = require('../../commons/validations');

function validateOnCreateOrder(customerId, amount, customerBashback) {
  if (!customerId || !amount)
    throw {
      status: 400,
      message: 'All fields are required',
    };

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

  // validateType({ value: customerId, name: 'customerId' });
  validateType({ value: amount, name: 'amount', type: 'number' });
}

module.exports = validateOnCreateOrder;
