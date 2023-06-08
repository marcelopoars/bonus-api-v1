import { customers } from '../../customers.js';
import { findOneOnArray } from '../../utils/findOneOnArray.js';

export function validateIfCustomerExists(id) {
  const customer = findOneOnArray(id, customers);

  if (!customer) throw { status: 404, message: 'Customer not found' };

  return customer;
}
