import { customers } from './customers.js';
import { findOneOnArray } from './utils/findOneOnArray.js';
import { validateOnCreateOrder } from './validations/OrderValidations/index.js';

export const orders = [];

let initialId = 0;

// Create Order / POST
export function createOrder(order) {
  const { customerId, amount } = order;

  try {
    validateOnCreateOrder(customerId, amount);

    const customerIndex = customers.findIndex(
      customer => customer.id === Number(customerId),
    );

    // Descobrir quanto de cashback o usuário tem
    const currentCustomerBashback = customers[customerIndex].cashback;

    if (currentCustomerBashback > amount)
      throw {
        status: 404,
        message: 'Amount precisa ser maior que o cashback do cliente',
        cashback: currentCustomerBashback,
      };

    // Calcula o valor da venda baseado no cashback do cliente
    const amountByOrder =
      currentCustomerBashback === 0
        ? amount
        : Number((amount - currentCustomerBashback).toFixed(2));

    // Calcula o valor do cashback desta venda
    const cashbackByOrder = Number((amountByOrder * (15 / 100)).toFixed(2));

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
    const orderById = findOneOnArray(id, orders);

    if (!orderById) throw { status: 404, message: 'Order not found' };

    return orderById;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
    };
  }
}
