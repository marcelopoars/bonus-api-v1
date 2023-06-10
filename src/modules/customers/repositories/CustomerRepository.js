const { randomUUID } = require('node:crypto');

// Salva os dados independente do lugar ou tecnolia (banco de dados, arquivo, in memory, etc)
let customers = [];
let initialCustomerId = 0;
class CustomerRepository {
  //   _customers = [];

  create(data) {
    const customer = {
      //   _id: randomUUID(),
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

  update() {}

  delete() {}
}

module.exports = CustomerRepository;
