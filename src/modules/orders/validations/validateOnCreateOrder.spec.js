const { validateType } = require('../../commons/validations');
const validateOnCreateOrder = require('./validateOnCreateOrder');

describe(':: modules :: orders :: validations :: validateOnCreateOrder', () => {
  it('should throw an error if customerId is empty', () => {
    expect(() => validateOnCreateOrder('', 100, 0)).toThrow(
      'All fields are required',
    );
  });

  it('should throw an error if amount is empty', () => {
    expect(() => validateOnCreateOrder('123', '', 0)).toThrow(
      'All fields are required',
    );
  });

  it('should throw an error if amount less than customerBashback', () => {
    expect(() => validateOnCreateOrder('123', 15, 100)).toThrow(
      'Amount must be greater than customerBashback',
    );
  });

  it('should throw an error if amount less than customerBashback', () => {
    expect(() => validateOnCreateOrder('123', -1, 0)).toThrow(
      'Amount must be greater than zero',
    );
  });
});
