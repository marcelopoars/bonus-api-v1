const {
  validateCity,
  validateCpf,
  validateName,
  validatePhone,
} = require('./validateCustomerFields');

function defaultCustomerValidations(name, cpf, city, phone) {
  validateName(name);
  validateCpf(cpf);
  validateCity(city);
  validatePhone(phone);
}

module.exports = defaultCustomerValidations;
