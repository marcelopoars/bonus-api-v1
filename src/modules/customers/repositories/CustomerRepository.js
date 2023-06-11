// Salva os dados independente do lugar ou tecnolia (banco de dados, arquivo, in memory, etc)

// https://nodejs.org/api/crypto.html#crypto
const { randomUUID } = require('node:crypto');

let customers = [];
let initialId = 0;
class CustomerRepository {
  // _customers = []

  create(data) {
    const customer = {
      _UUID: randomUUID(), // Gera um "RFC 4122" versão 4 "UUID" aleatório
      _id: (initialId += 1).toString(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    customers.push(customer);

    // return this._customer;
    return customer;
  }

  findAll() {
    return customers;
  }

  findOne(id) {
    const customer = customers.find(customer => customer._id === id);

    return customer;
  }

  update(id, data) {
    const customerIndex = customers.findIndex(customer => customer._id === id);

    if (data.name) customers[customerIndex].name = data.name;
    if (data.cpf) customers[customerIndex].cpf = data.cpf;
    if (data.city) customers[customerIndex].city = data.city;
    if (data.phone) customers[customerIndex].phone = data.phone;

    customers[customerIndex].updatedAt = new Date();

    return customers[customerIndex];
  }

  delete(id) {
    const deletedCustomer = customers.find(customer => customer._id === id);

    customers = customers.filter(customer => customer._id !== id);

    return { maessage: 'Customer has been deleted', deletedCustomer };
  }
}

module.exports = CustomerRepository;
