const customerRepository = require('../repositories/CustomerRepository');

module.exports = () => ({
  execute: id => {
    return customerRepository.delete(id);
  },
});
