import { customers } from './customers.js';

import {
  calculateAmountByOrder,
  calculateCashback,
  findIndexOnArray,
} from './utils/index.js';

import {
  validateIfOrderExists,
  validateOnCreateOrder,
} from './validations/OrderValidations/index.js';

export const orders = [];

let initialId = 0;

// Create Order / POST
export function createOrder(order) {
  const { customerId, amount } = order;

  try {
    validateOnCreateOrder(customerId, amount);

    const customerIndex = findIndexOnArray(customerId, customers);

    // Descobrir quanto de cashback o usuário tem
    const currentCustomerBashback = customers[customerIndex].cashback;

    if (currentCustomerBashback > amount)
      throw {
        status: 404,
        message: 'Amount precisa ser maior que o cashback do cliente',
        cashback: currentCustomerBashback,
      };

    // Valor da venda menos o saldo de chashback do cliente
    const amountByOrder = calculateAmountByOrder(
      currentCustomerBashback,
      amount,
    );

    // 15% sobre o valor da compra
    const cashbackByOrder = calculateCashback(amountByOrder);

    // Atualiza o valor do cashback do usuário
    customers[customerIndex].cashback = cashbackByOrder;
    customers[customerIndex].updatedAt = new Date();

    const order = {
      id: (initialId += 1),
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
