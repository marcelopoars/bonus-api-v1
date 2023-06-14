const customerRepository = require('../repositories/CustomerRepository');

module.exports = () => ({
  execute: ({ name, cpf, city, phone, cashback }) => {
    return customerRepository.create({ name, cpf, city, phone, cashback });
  },
});
