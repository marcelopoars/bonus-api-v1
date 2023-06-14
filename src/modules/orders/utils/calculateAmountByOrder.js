function calculateAmountByOrder(amount, cashback) {
  return cashback === 0 ? amount : Number((amount - cashback).toFixed(2));
}

module.exports = calculateAmountByOrder;
