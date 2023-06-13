// Salva os dados independente do lugar: (banco de dados, arquivo, in memory, etc)

// https://nodejs.org/api/crypto.html#crypto
const { randomUUID } = require('node:crypto');

let customers = [];

class CustomerRepository {
  create(data) {
    const customer = {
      _id: randomUUID(), // "RFC 4122" / "UUID v4"
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

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

    customers[customerIndex] = {
      ...customers[customerIndex],
      ...data,
      updatedAt: new Date(),
    };

    return customers[customerIndex];
  }

  delete(id) {
    customers = customers.filter(customer => customer._id !== id);

    return { maessage: 'Customer has been deleted' };
  }
}

module.exports = CustomerRepository;
