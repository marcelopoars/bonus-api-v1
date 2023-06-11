// Regras de negócio para criar um cliente (validações)
// validações
// formatações

const { FindAllOrderService } = require('../services');

module.exports = () => ({
  execute: () => {
    return FindAllOrderService().execute();
  },
});
