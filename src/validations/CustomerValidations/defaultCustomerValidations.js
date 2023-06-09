import {
  validateCity,
  validateCpf,
  validateName,
  validatePhone,
} from './validateCustomerFields.js';

export function defaultCustomerValidations(name, cpf, city, phone) {
  validateName(name);
  validateCpf(cpf);
  validateCity(city);
  validatePhone(phone);
}