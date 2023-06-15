// Salva os dados independente do lugar: (banco de dados, arquivo, in memory, etc)
const Repository = require('../../commons/repositories/Repository');

class OrderRepository extends Repository {
  _model = 'orders';
}

module.exports = new OrderRepository();
