/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
let customers = [];
let initialId = 1;

export function createCustomer({ name, cpf, city, phone }) {
  const customer = {
    id: initialId++,
    name,
    cpf,
    city,
    phone,
    points: 0,
  };

  customers.push(customer);

  return customer;
}

export function list() {
  return customers;
}

export function getCustomerById(id) {
  const customer = customers.find(customer => customer.id === Number(id));

  return customer;
}

export function editCustomer(id, { name, cpf, city, phone }) {
  const customerIndex = customers.findIndex(
    customer => customer.id === Number(id),
  );

  if (name) customers[customerIndex].name = name;
  if (cpf) customers[customerIndex].cpf = cpf;
  if (city) customers[customerIndex].city = city;
  if (phone) customers[customerIndex].phone = phone;

  return customers[customerIndex];
}

export function deleteCustomer(id) {
  customers = customers.filter(customer => customer.id !== Number(id));
}
