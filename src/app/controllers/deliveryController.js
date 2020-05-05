const Delivery = require('../models/Delivery');

module.exports = {
  async index(req, res) {
    const deliveries = await Delivery.findAll();

    return res.json(deliveries);
  },
};
