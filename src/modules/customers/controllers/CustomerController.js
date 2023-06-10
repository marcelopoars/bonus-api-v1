const {
  CreateCustomerBusiness,
  FindAllCustomerBusiness,
  FindOneCustomerBusiness,
} = require('../business');

// Controller somente faz as chamadas para o business e retorna um valor
module.exports = () => ({
  create: (req, res) => {
    try {
      const customer = CreateCustomerBusiness().execute(req.body);

      res.status(201).json(customer);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  findAll: (_, res) => {
    try {
      const customers = FindAllCustomerBusiness().execute();
      res.json(customers);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  findOne: (req, res) => {
    try {
      const { id } = req.params;

      const customer = FindOneCustomerBusiness().execute(id);

      res.json(customer);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  update: (req, res) => {
    try {
      const { _id } = req.params;
      const { name, cpf, city, phone } = req.body;
      const customer = CreateCustomerBusiness.execute({
        _id,
        name,
        cpf,
        city,
        phone,
      });

      res.status(200).json(customer);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  delete: () => {},
});
