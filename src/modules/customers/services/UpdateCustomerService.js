const customerRepository = require('../repositories/CustomerRepository');

module.exports = () => ({
  execute: (id, data) => {
    return customerRepository.update(id, data);
  },
});
