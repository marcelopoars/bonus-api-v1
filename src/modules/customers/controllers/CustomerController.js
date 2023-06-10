const {
  CreateCustomerBusiness,
  FindAllCustomerBusiness,
  FindOneCustomerBusiness,
  UpdateCustomerBusiness,
  DeleteCustomerBusiness,
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
      const { id } = req.params;

      const editedCustomer = UpdateCustomerBusiness().execute(id, req.body);

      res.status(200).json(editedCustomer);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  delete: (req, res) => {
    try {
      const { id } = req.params;
      
      const deletedCustomer = DeleteCustomerBusiness().execute(id)

      res.json(deletedCustomer);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },
});
