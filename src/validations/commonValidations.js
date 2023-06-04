export function validateType(value, type) {
  if (typeof value !== type)
    throw {
      status: 422,
      message: 'Invalid type',
    };
}
