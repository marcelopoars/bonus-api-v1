function calculateAmountByOrder(amount, currentCustomerCashback) {
  return currentCustomerCashback === 0
    ? amount
    : Number((amount - currentCustomerCashback).toFixed(2));
}

module.exports = calculateAmountByOrder;
