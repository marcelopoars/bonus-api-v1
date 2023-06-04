import { getAllCustomers } from './customers.js';

const orders = [];

let initialId = 0;

// Create Order / POST
export function createOrder({ customerId, amount }) {
  try {
    const customers = getAllCustomers();

    const customerIndex = customers.findIndex(
      customer => customer.id === Number(customerId),
    );

    if (!customerId || !amount)
      throw { status: 400, message: 'All fields are required' };

    if (customerIndex === -1)
      throw { status: 404, message: 'Customer not found' };

    if (amount === 0 || amount < 0)
      throw { status: 422, message: 'Amount must be greater than zero' };

    const order = {
      id: (initialId += 1),
      customerId,
      amount,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    orders.push(order);

    return order;
  } catch (error) {
    throw {
      status: error.status || 500,
      name: error.name,
      message: error.message,
    };
  }
}

// Get All Orders / GET
export function getAllOrders() {
  try {
    // Verificar isso com professor
    if (orders.length === 0) {
      throw { status: 404, name: 'Error', message: 'Orders not found' };
    }

    return orders;
  } catch (error) {
    throw {
      status: error.status || 500,
      name: error.name,
      message: error.message,
    };
  }
}

// Get Order By ID / GET
export function getOrderById(id) {
  try {
    const orderById = orders.find(order => order.id === Number(id));

    if (!orderById)
      throw { status: 404, name: 'Error', message: 'Customer not found' };

    return orderById;
  } catch (error) {
    throw {
      status: error.status || 500,
      name: error.name,
      message: error.message,
    };
  }
}
