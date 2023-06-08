
import {
  validateIfCustomerExists,
  validateOnCreateCustomer,
  validateOnEditCustomer,
} from './validations/CustomerValidations/index.js';

export let customers = [];

let initialId = 0;

// Create customer / POST
export function createCustomer(customer) {
  const { name, cpf, city, phone } = customer;

  try {
    validateOnCreateCustomer(name, cpf, city, phone);

    const customer = {
      id: (initialId += 1),
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
export function getAllCustomers() {
  try {
    return customers;
  } catch (error) {
    throw { status: error.status || 500, message: error.message };
  }
}

// Get Customer By ID / GET
export function getCustomerById(id) {
  try {
    const customerById = validateIfCustomerExists(id);

    return customerById;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
    };
  }
}

// Edit Customer By ID / PUT
export function editCustomer(id, { name, cpf, city, phone }) {
  try {
    const customerIndex = customers.findIndex(
      customer => customer.id === Number(id),
    );

    validateOnEditCustomer(id, name, cpf, city, phone);

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
export function deleteCustomer(id) {
  try {
    const customerDeleted = validateIfCustomerExists(id);

    customers = customers.filter(customer => customer.id !== Number(id));

    return { maessage: 'Customer has been deleted', customerDeleted };
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
    };
  }
}
