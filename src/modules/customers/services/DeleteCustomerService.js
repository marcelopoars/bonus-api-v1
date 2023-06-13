// O service faz integração com outras APIs ou o bancos de dados

const CustomerRepository = require('../repositories/CustomerRepository');

module.exports = () => ({
  execute: id => {
    return new CustomerRepository().delete(id);
  },
});
