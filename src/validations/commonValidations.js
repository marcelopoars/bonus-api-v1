export function validateType(value, type) {
  // if (!value) return;

  if (typeof value !== type)
    throw {
      status: 422,
      message: 'Invalid type',
    };
}
