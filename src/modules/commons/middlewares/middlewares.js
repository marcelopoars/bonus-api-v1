// UUID - V4 - pattern
const regexExp =
  /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

const validateId = (req, res, next) => {
  const { id } = req.params;

  const isValidId = regexExp.test(id);

  if (!isValidId) return res.status(422).send({ message: 'Invalid id' });

  next();
};

module.exports = { validateId };
