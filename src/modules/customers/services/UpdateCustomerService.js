const CustomerRepository = require('../repositories/CustomerRepository');

const customerRepository = new CustomerRepository();

module.exports = () => ({
  execute: (id, { name, cpf, city, phone }) => {
    return customerRepository.update(id, { name, cpf, city, phone });
  },
});
