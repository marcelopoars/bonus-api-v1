import { customers } from './customers.js';

import {
  calculateAmountByOrder,
  calculateCashback,
  findIndexOnArray,
  getCustomerBashback,
} from './utils/index.js';

import {
  validateIfOrderExists,
  validateOnCreateOrder,
} from './validations/OrderValidations/index.js';

export const orders = [];

let initialOrderId = 0;

// Create Order / POST
export function createOrder(order) {
  const { customerId, amount } = order;

  try {
    validateOnCreateOrder(customerId, amount);

    const customerIndex = findIndexOnArray(customerId, customers);

    const customerBashback = getCustomerBashback(customerId);

    const amountByOrder = calculateAmountByOrder(customerBashback, amount);

    const cashbackByOrder = calculateCashback(amountByOrder);

    customers[customerIndex].cashback = cashbackByOrder;
    customers[customerIndex].updatedAt = new Date();

    const order = {
      id: (initialOrderId += 1),
      customerId,
      amount: amountByOrder,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    orders.push(order);
    return order;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
      ...error,
    };
  }
}

// Get All Orders / GET
export function getAllOrders() {
  try {
    return orders;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
    };
  }
}

// Get Order By ID / GET
export function getOrderById(id) {
  try {
    const orderById = validateIfOrderExists(id);

    return orderById;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
    };
  }
}
