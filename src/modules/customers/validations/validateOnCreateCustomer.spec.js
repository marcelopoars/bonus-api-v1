const validateOnCreateCustomer = require('./validateOnCreateCustomer');

describe(':: modules :: customers :: validations :: validateOnCreateCustomer', () => {
  it('should throw an error if any field is empty', () => {
    expect(() => validateOnCreateCustomer('', '123', 'foo', '123')).toThrow(
      'All fields are required',
    );
    expect(() => validateOnCreateCustomer('foo', '', 'foo', '123')).toThrow(
      'All fields are required',
    );
    expect(() => validateOnCreateCustomer('foo', '123', '', '123')).toThrow(
      'All fields are required',
    );
    expect(() => validateOnCreateCustomer('foo', '123', 'foo', '')).toThrow(
      'All fields are required',
    );
  });

  it('should throw an error if name less than 5 characters', () => {
    expect(() =>
      validateOnCreateCustomer(
        'foo',
        '999.999.999-99',
        'Porto Alegre',
        '(99)99999-9999',
      ),
    ).toThrow('Name must be more than 5 characters');
  });
});
