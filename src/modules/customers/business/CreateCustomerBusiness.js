// Regras de negócio para criar um cliente (validações)
// validações
// formatações
const { CreateCustomerService } = require('../services');
const validateOnCreateCustomer = require('../validations/validateOnCreateCustomer');

module.exports = () => ({
  execute: ({ name, cpf, city, phone }) => {
    validateOnCreateCustomer(name, cpf, city, phone);
    
    const customer = {
      name: name.toUpperCase().trim(),
      cpf,
      city: city.toUpperCase().trim(),
      phone,
      cashback: 0,
    };
    return CreateCustomerService().execute(customer);
  },
});
