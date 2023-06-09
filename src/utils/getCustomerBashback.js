const { getAllCustomers } = require('../customers');

function getCustomerBashback(customerId) {
  const customers = getAllCustomers();

  const customerIndex = customers.findIndex(
    element => element.id === Number(customerId),
  );

  return customers[customerIndex].cashback;
}

module.exports = getCustomerBashback;
