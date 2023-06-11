const CreateOrderBusiness = require('../business/CreateOrderBusiness');

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

  findAll: (req, res) => {
    try {
      res.json({ message: 'GET ALL ORDERS......' });
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
