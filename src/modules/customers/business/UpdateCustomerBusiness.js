// Regras de negócio para criar um cliente (validações)
// validações
// formatações

const validateOnEditCustomer = require('../validations/validateOnEditCustomer');
const { FindOneCustomerService } = require('../services');

module.exports = () => ({
  execute: (id, { name, cpf, city, phone }) => {
    const customer = FindOneCustomerService().execute(id);

    if (!customer) throw { status: 404, message: 'Customer not found' };

    validateOnEditCustomer(name, cpf, city, phone);

    return FindOneCustomerService().execute(id);
  },
});
