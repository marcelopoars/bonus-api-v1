// Validações de Regras de negócio

const { FindAllOrderService } = require('../services');

module.exports = () => ({
  execute: () => {
    return FindAllOrderService().execute();
  },
});
