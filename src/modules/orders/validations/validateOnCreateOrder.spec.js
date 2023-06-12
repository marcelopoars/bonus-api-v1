const validateOnCreateOrder = require('./validateOnCreateOrder');

describe(':: modules :: orders :: validations :: validateOnCreateOrder', () => {
  it('should throw an error if customerId or amount is missing', () => {
    expect(() => validateOnCreateOrder(null, 100, 15)).toThrow(
      'All fields are required',
    );

    // expect(() => validateOnCreateOrder('123', null, 15)).toThrow(
    //   'All fields are required',
    // );
  });

  it('should throw an error if amount is less than or equal to zero', () => {
    expect(() => {
      validateOnCreateOrder('123', 0, 50);
    }).toThrow('Amount must be greater than zero');

    expect(() => {
      validateOnCreateOrder('123', -100, 50);
    }).toThrow('Amount must be greater than zero');
  });

  it('should throw an error if customerBashback is greater than amount', () => {
    expect(() => validateOnCreateOrder('123', 15, 100)).toThrow(
      'Amount must be greater than customerBashback',
    );
  });

  it('should not throw an error if all validations pass', () => {
    expect(() => validateOnCreateOrder('123', 100, 15)).not.toThrow();
  });
});
