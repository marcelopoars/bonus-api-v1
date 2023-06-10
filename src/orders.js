const { getAllCustomers } = require('./customers');

const {
  getCustomerBashback,
  calculateAmountByOrder,
  calculateCashback,
} = require('./utils');

const { validateOnCreateOrder } = require('./validations/OrderValidations');

const orders = [];

let initialOrderId = 0;

// Create Order / POST
function createOrder(order) {
  const { customerId, amount } = order;

  try {
    const customers = getCustomerById(customerId)

    // const customer = customers.find(
    //   element => element.id === Number(customerId),
    // );

    // if (!customer) throw { status: 404, message: 'Customer not found' };

    validateOnCreateOrder(customerId, amount);

    const customerIndex = customers.findIndex(
      element => element.id === Number(customerId),
    );

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
function getAllOrders() {
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
function getOrderById(id) {
  try {
    const orderById = orders.find(order => order.id === Number(id));

    if (!orderById) throw { status: 404, message: 'Order not found' };

    return orderById;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
    };
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
};
