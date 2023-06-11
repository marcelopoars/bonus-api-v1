const validateOnEditCustomer = require('./validateOnEditCustomer');

describe(':: modules :: customers :: validations :: validateOnEditCustomer', () => {
  it('should throw an error if all fields are empty', () => {
    expect(() => validateOnEditCustomer()).toThrow('No field was informed');
  });

  it('should throw an error if name less than 5 characters', () => {
    expect(() => validateOnEditCustomer('foo', '', '', '')).toThrow(
      'Name must be more than 5 characters',
    );
  });
});
