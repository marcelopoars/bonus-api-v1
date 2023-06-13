// O service faz integração com outras APIs ou o bancos de dados

const CustomerRepository = require('../repositories/CustomerRepository');

module.exports = () => ({
  execute: (id, { name, cpf, city, phone }) => {
    return new CustomerRepository().update(id, { name, cpf, city, phone });
  },
});
