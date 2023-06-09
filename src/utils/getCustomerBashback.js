import { customers } from '../customers.js';
import { findIndexOnArray } from './findIndexOnArray.js';

export function getCustomerBashback(customerId) {
  const customerIndex = findIndexOnArray(customerId, customers);

  return customers[customerIndex].cashback;
}
