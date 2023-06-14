const Repository = require('../../commons/repositories/Repository');

class CustomerRepository extends Repository {
  _model = 'customers';
}

module.exports = new CustomerRepository();
