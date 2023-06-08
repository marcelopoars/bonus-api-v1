import { validateIfCustomerExists } from '../CustomerValidations/index.js';
import { validateType } from '../commonValidations.js';

export function validateOnCreateOrder(customerId, amount) {
  if (!customerId || !amount)
    throw {
      status: 400,
      message: 'All fields are required',
    };

  validateIfCustomerExists(customerId);

  if (amount <= 0)
    throw {
      status: 422,
      message: 'Amount must be greater than zero',
    };

  validateType(customerId, 'number');
  validateType(amount, 'number');
}
