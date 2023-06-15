const { FindAllOrderService } = require('../services');

module.exports = () => ({
  execute: () => {
    return FindAllOrderService().execute();
  },
});
