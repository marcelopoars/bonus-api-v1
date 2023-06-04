import { list } from './customers.js';

const orders = [];

let initialId = 0;

export function createOrder({ customerId, amount }) {
  const customers = list();

  const customerIndex = customers.findIndex(
    customer => customer.id === Number(customerId),
  );

  if (customerIndex === -1) return { message: 'Customer not found' };

  if (amount === 0 || amount < 0)
    return { message: 'Amount must be greater than zero' };

  if (!customerId || !amount) return { message: 'All fields are required' };

  const order = {
    id: (initialId += 1),
    customerId,
    amount,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  orders.push(order);

  return order;
}

export function getAllOrders() {
  return orders;
}

export function getOrderById(id) {
  return (
    orders.find(order => order.id === Number(id)) || {
      message: 'Order not found',
    }
  );
}
