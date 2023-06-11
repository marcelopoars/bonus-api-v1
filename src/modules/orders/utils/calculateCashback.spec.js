const calculateCashback = require("./calculateCashback");

describe(':: modules :: orders :: utils :: calculateCashback', () => {
  it('should return the cashback amount', () => {
    expect(calculateCashback(100)).toBe(15);
  });
});
