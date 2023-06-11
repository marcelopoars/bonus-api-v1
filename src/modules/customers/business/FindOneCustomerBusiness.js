// Regras de negócio para criar um cliente (validações)
// validações
// formatações

const { FindOneCustomerService } = require('../services');

module.exports = () => ({
  execute: id => {
    const customer = FindOneCustomerService().execute(id);

    if (!customer) throw { status: 404, message: 'Customer not found' };

    return FindOneCustomerService().execute(id);
  },
});
