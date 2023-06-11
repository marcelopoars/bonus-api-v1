// Regras de negócio para criar um cliente (validações)
// validações
// formatações

const { FindAllCustomerService } = require('../services');

module.exports = () => ({
  execute: () => {
    return FindAllCustomerService().execute();
  },
});
