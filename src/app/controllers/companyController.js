const { Op } = require('sequelize');
const Company = require('../models/Company');
const Category = require('../models/Category');
const Payment_method = require('../models/Payment_method');

module.exports = {
  async store(req, res) {
    const { categories, payment_methods, ...data } = req.body;
    const checkEmailExist = await Company.findOne({
      where: {
        [Op.or]: [{ email: req.body.email }, { cnpj: req.body.cnpj }],
      },
    });
    if (checkEmailExist)
      return res.status(400).json({ message: 'Email or CNPJ already exists' });

    const company = await Company.create(data);
    if (categories && categories.length > 0) {
      company.setCategories(categories);
    }
    if (payment_methods && payment_methods.length > 0) {
      company.setPayment_methods(payment_methods);
    }

    return res.json(company);
  },

  async index(req, res) {
    const companies = await Company.findAll({
      include: [
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
        {
          model: Payment_method,
          as: 'payment_methods',
          through: { attributes: [] },
        },
      ],
    });
    return res.json(companies);
  },

  async show(req, res) {
    const { id } = req.params;
    const company = await Company.findByPk(id);

    return res.json(company);
  },

  async update(req, res) {
    const idcompany = req.params.id;

    if (!idcompany)
      return res.status(400).json({ message: 'company not found' });

    const companyExist = await Company.findByPk(idcompany);
    if (!companyExist)
      return res.status(400).json({ message: 'company not found' });

    companyExist.update(req.body);
    companyExist.save();

    return res.json(companyExist);
  },

  async delete(req, res) {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: 'company not found' });

    const companyExist = await Company.findByPk(id);
    if (!companyExist)
      return res.status(400).json({ message: 'company not found' });
    companyExist.destroy();
    return res.status(201).send();
  },
};
