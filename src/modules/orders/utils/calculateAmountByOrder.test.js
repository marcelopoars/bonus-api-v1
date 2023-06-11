const calculateAmountByOrder = require('./calculateAmountByOrder');

describe(':: utils :: calculateAmountByOrder', () => {
  it('customerBashback === 0', () => {
    expect(calculateAmountByOrder(100, 0)).toBe(100);
  });

  it('should return', () => {
    expect(calculateAmountByOrder(100, 15)).toBe(85);
  });
});
