const { FindOneOrderService } = require('../services');

module.exports = () => ({
  execute: id => {
    const order = FindOneOrderService().execute(id);

    if (!order) throw { status: 404, message: 'Order not found' };

    return FindOneOrderService().execute(id);
  },
});
