const { Op } = require('sequelize');
const Company = require('../models/Company');
const Category = require('../models/Category');
const Payment_methods = require('../models/Payment_method');
const Delivery = require('../models/Delivery');
const Differential = require('../models/Differential');

module.exports = {
  async index(req, res) {
    const {
      categories,
      payment_methods,
      rate,
      deliveries,
      differentials,
      state,
      city,
    } = req.body;
    const companiesfound = await Company.findAll({
      where: {
        state,
        city,
      },
      include: [
        {
          model: Category,
          as: 'categories',
          where: { id: { [Op.in]: categories } },
        },
        {
          model: Payment_methods,
          as: 'payment_methods',
          where: { id: { [Op.in]: payment_methods } },
        },
        {
          model: Delivery,
          as: 'deliveries',
          where: { id: { [Op.in]: deliveries } },
        },
        {
          model: Differential,
          as: 'differentials',
          where: { id: { [Op.in]: differentials } },
        },
      ],
    });

    return res.json(companiesfound);
  },
};
