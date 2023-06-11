function calculateAmountByOrder(amount, currentCustomerBashback) {
  return currentCustomerBashback === 0
    ? amount
    : Number((amount - currentCustomerBashback).toFixed(2));
}

module.exports = calculateAmountByOrder;
