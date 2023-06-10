const { randomUUID } = require('node:crypto');

// Salva os dados independente do lugar ou tecnolia (banco de dados, arquivo, in memory, etc)
let customers = [];
let initialCustomerId = 0;
class CustomerRepository {
  //   _customers = [];

  create(data) {
    const customer = {
      _UUID: randomUUID(), // Gera um "RFC 4122" versão 4 "UUID" aleatório
      _id: (initialCustomerId += 1).toString(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // this._customers.push(customer);
    customers.push(customer);

    return customer;
  }

  findAll() {
    return customers;
  }

  findOne(id) {
    return customers.find(customer => customer._id === id);
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

  delete() {}
}

module.exports = CustomerRepository;
