// Validações de Regras de negócio

const { FindAllCustomerService } = require('../services');

module.exports = () => ({
  execute: () => {
    return FindAllCustomerService().execute();
  },
});
