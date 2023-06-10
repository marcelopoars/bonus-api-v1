const validateType = require('../../commons/validations/validateType');

function validateName(name) {
  if (name) {
    validateType({ value: name, fieldName: 'name' });
  }

  if (name?.length < 5)
    throw {
      status: 422,
      message: 'Name must be more than 5 characters',
    };
}

function validateCpf(cpf) {
  if (cpf) {
    validateType({ value: cpf, fieldName: 'cpf' });
  }

  if (cpf?.length !== 14)
    throw {
      status: 422,
      message: 'CPF needs to be in this format: 999.999.999-99',
    };
}

function validateCity(city) {
  if (city) {
    validateType({ value: city, fieldName: 'city' });
  }

  if (city?.length < 5)
    throw {
      status: 422,
      message: 'City must be more than 5 characters',
    };
}

function validatePhone(phone) {
  if (phone) {
    validateType({ value: phone, fieldName: 'phone' });
  }

  if (phone?.length !== 14)
    throw {
      status: 422,
      message: 'Phone needs to be in this format: (99)99999-9999',
    };
}

module.exports = {
  validateName,
  validateCpf,
  validateCity,
  validatePhone,
};
