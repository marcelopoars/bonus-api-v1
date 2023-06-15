const { FindOneCustomerService } = require('../services');

module.exports = () => ({
  execute: id => {
    const customer = FindOneCustomerService().execute(id);

    if (!customer) throw { status: 404, message: 'Customer not found' };

    return customer;
  },
});
