// Salva os dados independente do lugar ou tecnolia (banco de dados, arquivo, in memory, etc)

// https://nodejs.org/api/crypto.html#crypto
const { randomUUID } = require('node:crypto');

let initialId = 0;

class OrderRepository {
  _orders = [];

  create(customerIndex, customers, data) {
    const order = {
      _UUID: randomUUID(), // Gera um "RFC 4122" versão 4 "UUID" aleatório
      _id: (initialId += 1).toString(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    customers[customerIndex].cashback = data.cashbackByOrder;
    customers[customerIndex].updatedAt = new Date();

    this._orders.push(order);

    return order;
  }
}

module.exports = OrderRepository;
