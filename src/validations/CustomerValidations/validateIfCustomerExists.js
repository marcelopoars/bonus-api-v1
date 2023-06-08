import { customers } from '../../customers.js';
import { findOneOnArray } from '../../utils/findOneOnArray.js';

export function validateIfCustomerExists(id) {
  const customerById = findOneOnArray(id, customers);

  if (!customerById) throw { status: 404, message: 'Customer not found' };

  return customerById;
}
