const { FindAllCustomerService } = require('../services');

module.exports = () => ({
  execute: () => {
    return FindAllCustomerService().execute();
  },
});
