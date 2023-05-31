/* eslint-disable prefer-const */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
let orders = [];
let initialId = 1;

export function createOrder({ customerId, amount }) {
  const order = {
    id: initialId++,
    customerId,
    amount,
  };

  orders.push(order);

  return order;
}

export function getAllOrders() {
  return orders;
}

export function getOrderById(id) {
  return orders.find(order => order.id === Number(id));
}
