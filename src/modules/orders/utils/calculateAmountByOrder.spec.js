const calculateAmountByOrder = require('./calculateAmountByOrder');

describe(':: modules :: orders :: utils :: calculateAmountByOrder', () => {
  it('should not give a discount if currentCustomerCashback equal zero', () => {
    expect(calculateAmountByOrder(100, 0)).toBe(100);
  });

  it('should give 15% off', () => {
    expect(calculateAmountByOrder(100, 15)).toBe(85);
  });
});
