const Differential = require('../models/Differential');

module.exports = {
  async index(req, res) {
    const differetial = await Differential.findAll();

    return res.json(differetial);
  },
};
