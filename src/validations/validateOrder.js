import { validateType } from './commonValidations.js';

export function validateOrder(customerId, amount) {
  if (!customerId || !amount)
    throw {
      status: 400,
      message: 'All fields are required',
    };

  validateType(customerId, 'number');
  validateType(amount, 'number');

  if (amount <= 0)
    throw {
      status: 422,
      message: 'Amount must be greater than zero',
    };
}
