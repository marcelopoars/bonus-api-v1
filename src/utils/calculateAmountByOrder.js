export function calculateAmountByOrder(currentCustomerBashback, amount) {
  return currentCustomerBashback === 0
    ? amount
    : Number((amount - currentCustomerBashback).toFixed(2));
}
