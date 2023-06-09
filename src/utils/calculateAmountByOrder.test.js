const calculateAmountByOrder = require('./calculateAmountByOrder');

describe(':: utils :: calculateAmountByOrder', () => {
  it('customerBashback === 0', () => {
    expect(calculateAmountByOrder(0, 100)).toBe(100);
  });

  it('should return', () => {
    expect(calculateAmountByOrder(15, 100)).toBe(85);
  });
});
