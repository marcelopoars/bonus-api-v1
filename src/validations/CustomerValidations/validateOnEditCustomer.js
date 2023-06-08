import { defaultCustomerValidations } from './defaultCustomerValidations.js';
import { validateIfCustomerExists } from './validateIfCustomerExists.js';

export function validateOnEditCustomer(id, name, cpf, city, phone) {
  validateIfCustomerExists(id);

  if (!name && !cpf && !city && !phone)
    throw { status: 400, message: 'No field was informed' };

  defaultCustomerValidations(name, cpf, city, phone);
}
