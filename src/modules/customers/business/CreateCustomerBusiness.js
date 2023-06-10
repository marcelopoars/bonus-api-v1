// Regras de negócio para criar um cliente (validações)
// validações
// formatações
const { CreateCustomerService } = require('../services');
const validateOnCreateCustomer = require('../validations/validateOnCreateCustomer');

const { formatString } = require('../../commons/utils');

module.exports = () => ({
  execute: ({ name, cpf, city, phone }) => {
    validateOnCreateCustomer(name, cpf, city, phone);
    
    const customer = {
      name: formatString(name),
      cpf,
      city: formatString(city),
      phone,
      cashback: 0,
    };
    
    return CreateCustomerService().execute(customer);
  },
});
