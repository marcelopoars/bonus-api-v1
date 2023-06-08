export function calculateCashback(amountByOrder) {
  return Number((amountByOrder * (15 / 100)).toFixed(2));
}
