let customers = [];

let initialId = 0;

// Create customer / POST
export function createCustomer({ name, cpf, city, phone }) {
  try {
    if (!name || !cpf || !city || !phone)
      throw { status: 400, name: 'Error', message: 'All fields are required' };

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
  } catch (error) {
    throw {
      status: error.status || 500,
      name: error.name,
      message: error.message,
    };
  }
}

// Get All Customers / GET
export function getAllCustomers() {
  try {
    // Verificar como lançar erro 404 quando não encontrar clientes cadastrados
    return customers;
  } catch (error) {
    throw { status: 500, name: error.name, message: error.message };
  }
}

// Get Customer By ID / GET
export function getCustomerById(id) {
  try {
    const customerById = customers.find(customer => customer.id === Number(id));

    if (!customerById)
      throw { status: 404, name: 'Error', message: 'Customer not found' };

    return customerById;
  } catch (error) {
    throw {
      status: error.status || 500,
      name: error.name,
      message: error.message,
    };
  }
}

// Edit Customer By ID / POST
export function editCustomer(id, { name, cpf, city, phone }) {
  try {
    const customerIndex = customers.findIndex(
      customer => customer.id === Number(id),
    );

    if (customerIndex === -1)
      throw { status: 404, name: 'Error', message: 'Customer not found' };

    if (!name && !cpf && !city && !phone)
      throw { status: 400, name: 'Error', message: 'No field was informed' };

    if (name) customers[customerIndex].name = name;
    if (cpf) customers[customerIndex].cpf = cpf;
    if (city) customers[customerIndex].city = city;
    if (phone) customers[customerIndex].phone = phone;

    customers[customerIndex].updatedAt = new Date();

    return customers[customerIndex];
  } catch (error) {
    throw {
      status: error.status || 500,
      name: error.name,
      message: error.message,
    };
  }
}

// Delete Customer By ID / DELETE
export function deleteCustomer(id) {
  try {
    const customerDeleted = customers.find(
      customer => customer.id === Number(id),
    );

    if (!customerDeleted)
      throw { status: 404, name: 'Error', message: 'Customer not found' };

    customers = customers.filter(customer => customer.id !== Number(id));

    return { maessage: 'Customer has been deleted', id };
  } catch (error) {
    throw {
      status: error.status || 500,
      name: error.name,
      message: error.message,
    };
  }
}
