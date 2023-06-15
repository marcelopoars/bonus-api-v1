const customerRepository = require('../repositories/CustomerRepository');

module.exports = () => ({
  execute: data => {
    return customerRepository.create(data);
  },
});
