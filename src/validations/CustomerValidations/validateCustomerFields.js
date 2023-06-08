import { validateType } from '../commonValidations.js';

export function validateName(name) {
  if (name) {
    validateType(name, 'string');
  }

  if (name && name.length < 5)
    throw {
      status: 422,
      message: 'Name must be more than 5 characters',
    };
}

export function validateCpf(cpf) {
  if (cpf) {
    validateType(cpf, 'string');
  }

  if (cpf && cpf.length !== 14)
    throw {
      status: 422,
      message: 'CPF needs to be in this format: 999.999.999-99',
    };
}

export function validateCity(city) {
  if (city) {
    validateType(city, 'string');
  }

  if (city && city.length < 5)
    throw {
      status: 422,
      message: 'City must be more than 5 characters',
    };
}

export function validatePhone(phone) {
  if (phone) {
    validateType(phone, 'string');
  }

  if (phone && phone.length !== 14)
    throw {
      status: 422,
      message: 'Phone needs to be in this format: (99)99999-9999',
    };
}
