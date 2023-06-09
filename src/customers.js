const {
  validateOnCreateCustomer,
} = require('./validations/CustomerValidations');

let customers = [];
let initialCustomerId = 0;

// Create customer / POST
function createCustomer(customer) {
  const { name, cpf, city, phone } = customer;

  try {
    validateOnCreateCustomer(name, cpf, city, phone);

    const customer = {
      id: (initialCustomerId += 1),
      name: name.toUpperCase(),
      cpf,
      city: city.toUpperCase(),
      phone,
      cashback: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    customers.push(customer);

    return customer;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
    };
  }
}

// Get All Customers / GET
function getAllCustomers() {
  try {
    return customers;
  } catch (error) {
    throw { status: error.status || 500, message: error.message };
  }
}

// Get Customer By ID / GET
function getCustomerById(id) {
  try {
    const customerById = customers.find(customer => customer.id === Number(id));

    if (!customerById) throw { status: 404, message: 'Customer not found' };

    return customerById;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
    };
  }
}

// Edit Customer By ID / PUT
function editCustomer(id, { name, cpf, city, phone }) {
  try {
    const editedCustomer = customers.find(customer => customer.id === Number(id));

    if (!editedCustomer) throw { status: 404, message: 'Customer not found' };

    const customerIndex = customers.findIndex(customer => customer.id === Number(id));

    if (name) customers[customerIndex].name = name;
    if (cpf) customers[customerIndex].cpf = cpf;
    if (city) customers[customerIndex].city = city;
    if (phone) customers[customerIndex].phone = phone;

    customers[customerIndex].updatedAt = new Date();

    return customers[customerIndex];
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
    };
  }
}

// Delete Customer By ID / DELETE
function deleteCustomer(id) {
  try {
    const customerDeleted = customers.find(
      element => element.id === Number(id),
    );

    if (!customerDeleted) throw { status: 404, message: 'Customer not found' };

    customers = customers.filter(customer => customer.id !== Number(id));

    return { maessage: 'Customer has been deleted', customerDeleted };
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
    };
  }
}

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  editCustomer,
  deleteCustomer,
};
