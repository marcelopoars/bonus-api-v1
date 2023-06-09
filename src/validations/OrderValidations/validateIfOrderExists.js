import { orders } from '../../orders.js';
import { findOneOnArray } from '../../utils/index.js';

export function validateIfOrderExists(id) {
  const order = findOneOnArray(id, orders);

  if (!order) throw { status: 404, message: 'Order not found' };

  return order;
}
