export function calculateAmountByOrder(customerBashback, amount) {
  return customerBashback === 0
    ? amount
    : Number((amount - customerBashback).toFixed(2));
}
