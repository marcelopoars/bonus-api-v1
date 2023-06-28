const regexExp =
  /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

const validateId = (req, res, next) => {
  const { id } = req.params;
  const { customer_id } = req.body;

  const currentId = id ? id : customer_id

  const isValidId = regexExp.test(currentId);

  if (!isValidId)
    return res.status(400).send({ message: 'Invalid id' });

  next();
};

module.exports = { validateId };
