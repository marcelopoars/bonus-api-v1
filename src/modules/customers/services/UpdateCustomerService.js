const customerRepository = require('../repositories/CustomerRepository');

module.exports = () => ({
  execute: (id, { name, cpf, city, phone }) => {
    return customerRepository.update(id, { name, cpf, city, phone });
  },
});
