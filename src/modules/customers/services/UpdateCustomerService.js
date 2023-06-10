const CustomerRepository = require('../repositories/CustomerRepository');

const customerRepository = new CustomerRepository();

module.exports = () => ({
  execute: (customerIndex, { name, cpf, city, phone }) => {
    return customerRepository.update(customerIndex, { name, cpf, city, phone });
  },
});
