let customers = [];

let initialId = 0;

export function createCustomer({ name, cpf, city, phone }) {
  if (!name || !cpf || !city || !phone)
    return { message: 'All fields are required' };

  const customer = {
    id: (initialId += 1),
    name,
    cpf,
    city,
    phone,
    points: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  customers.push(customer);

  return customer;
}

export function getAllCustomers() {
  return customers;
}

export function getCustomerById(id) {
  const customerById = customers.find(customer => customer.id === Number(id));

  if (!customerById) return { message: 'Customer not found' };

  return customerById;
}

export function editCustomer(id, { name, cpf, city, phone }) {
  const customerIndex = customers.findIndex(
    customer => customer.id === Number(id),
  );

  if (customerIndex === -1) return { message: 'Customer not found' };

  if (!name && !cpf && !city && !phone)
    return { message: 'O campo está vazio.....' };

  if (name) customers[customerIndex].name = name;
  if (cpf) customers[customerIndex].cpf = cpf;
  if (city) customers[customerIndex].city = city;
  if (phone) customers[customerIndex].phone = phone;

  customers[customerIndex].updatedAt = new Date();

  return customers[customerIndex];
}

export function deleteCustomer(id) {
  const customerDeleted = customers.find(
    customer => customer.id === Number(id),
  );

  if (!customerDeleted) return { message: 'Customer not found' };

  customers = customers.filter(customer => customer.id !== Number(id));

  return { maessage: 'Customer has been deleted', id };
}
