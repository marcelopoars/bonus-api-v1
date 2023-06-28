const { validateOnEditCustomer } = require('../validations');
const {
  FindOneCustomerService,
  UpdateCustomerService,
} = require('../services');

const { formatString } = require('../../commons/utils');

module.exports = () => ({
  execute: (id, { name, cpf, city, phone }) => {
    const customer = FindOneCustomerService().execute(id);

    if (!customer) throw { status: 404, message: 'Customer not found' };
    
    validateOnEditCustomer(name, cpf, city, phone);

    return UpdateCustomerService().execute(id, {
      name: !!name ? formatString(name) : customer.name,
      cpf: cpf || customer.cpf,
      city: !!city ? formatString(city) : customer.city,
      phone: phone || customer.phone,
    });
  },
});
