import { getAllCustomers } from '../../customers.js';
import { defaultCustomerValidations } from './defaultCustomerValidations.js';

export function validateOnEditCustomer(id, name, cpf, city, phone) {
  const customers = getAllCustomers();

  const customerById = customers.find(customer => customer.id === Number(id));

  if (!customerById) throw { status: 404, message: 'Customer not found' };

  if (!name && !cpf && !city && !phone)
    throw { status: 400, message: 'No field was informed' };

  defaultCustomerValidations(name, cpf, city, phone);
}
