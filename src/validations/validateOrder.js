import { getAllCustomers } from '../customers.js';
import { validateType } from './commonValidations.js';

export function validateOrder(customerId, amount) {
  const customers = getAllCustomers();

  const customer = customers.find(c => c.id == customerId);

  if (!customer) throw { status: 404, message: 'Customer not found' };

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
