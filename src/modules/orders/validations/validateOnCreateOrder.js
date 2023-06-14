const { validateType } = require('../../commons/validations');

function validateOnCreateOrder(customer_id, amount, cashback) {
  if (!customer_id || (!amount && amount !== 0))
    throw {
      status: 400,
      message: 'All fields are required',
    };

  if (amount <= 0)
    throw {
      status: 422,
      message: 'Amount must be greater than zero',
    };

  if (cashback > amount)
    throw {
      status: 422,
      message: 'Amount must be greater than customerBashback',
      cashback: cashback,
    };

  validateType({ value: customer_id, fieldName: 'customer_id' });
  validateType({ value: amount, fieldName: 'amount', type: 'number' });
}

module.exports = validateOnCreateOrder;
