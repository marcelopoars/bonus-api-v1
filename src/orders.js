const orders = [];
let initialId = 0;

export function createOrder({ customerId, amount }) {
  const order = {
    id: (initialId += 1),
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
