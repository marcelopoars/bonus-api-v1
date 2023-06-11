// Controller somente faz as chamadas para o business e retorna um valor

const {
  CreateOrderBusiness,
  FindAllOrderBusiness,
} = require('../business');

module.exports = () => ({
  create: (req, res) => {
    try {
      const order = CreateOrderBusiness().execute(req.body);

      res.status(201).json(order);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  findAll: (_, res) => {
    try {
      const orders = FindAllOrderBusiness().execute();

      res.json(orders);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  findOne: (req, res) => {
    try {
      res.json({ message: 'GET ORDER BY ID......' });
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },
});
