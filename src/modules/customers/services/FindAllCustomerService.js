const customerRepository = require('../repositories/CustomerRepository');

module.exports = () => ({
  execute: () => {
    return customerRepository.findAll();
  },
});
