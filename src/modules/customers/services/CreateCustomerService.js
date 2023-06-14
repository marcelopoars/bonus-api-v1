const customerRepository = require('../repositories/CustomerRepository');

module.exports = () => ({
  execute: (data) => {
    console.log(data);
    return customerRepository.create(data);
  },
});
