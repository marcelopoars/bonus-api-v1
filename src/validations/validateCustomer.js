import { validateType } from './commonValidations.js';

export function validateCustomer(name, cpf, city, phone) {
  if (!name || !cpf || !city || !phone)
    throw {
      status: 400,
      message: 'All fields are required',
    };

  validateType(name, 'string');
  validateType(cpf, 'string');
  validateType(city, 'string');
  validateType(phone, 'string');

  if (name.length < 5)
    throw {
      status: 422,
      message: 'Name must be more than 5 characters',
    };

  if (cpf.length !== 14)
    throw {
      status: 422,
      message: 'CPF needs to be in this format: 999.999.999-99',
    };

  if (city.length < 5)
    throw {
      status: 422,
      message: 'City must be more than 5 characters',
    };

    if (phone.length !== 14)
    throw {
      status: 422,
      message: 'Phone needs to be in this format: (99)99999-9999',
    };
}
