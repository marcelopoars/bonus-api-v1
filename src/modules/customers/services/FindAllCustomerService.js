// O service serve para fazer integração com outras APIs ou o banco de dados
const CustomerRepository = require('../repositories/CustomerRepository');

const customerRepository = new CustomerRepository();

module.exports = () => ({
  execute: () => {
    return customerRepository.findAll();
  },
});
