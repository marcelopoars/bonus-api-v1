// Controller somente faz as chamadas para o business e retorna um valor

const {
  CreateOrderBusiness,
  FindAllOrderBusiness,
  FindOneOrderBusiness,
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
      const { id } = req.params;

      const order = FindOneOrderBusiness().execute(id);

      res.json(order);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  update: (req, res) => {
    try {
      const { id } = req.params;

      res.json({ updatedOrder: id });
    } catch (error) {}
  },

  delete: (req, res) => {
    try {
      const { id } = req.params;

      res.json({ deletedOrder: id });
    } catch (error) {}
  },
});
