const Category = require('../models/Category');

module.exports = {
  async index(req, res) {
    const categories = await Category.findAll();
    return res.json(categories);
  },
  async store(req, res) {
    const { name } = req.body;
    const checkCategoryExist = await Category.findOne({
      where: {
        name,
      },
    });
    if (checkCategoryExist)
      return res.status(400).json({ message: 'Category already exisit' });
    const category = await Category.create(req.body);
    return res.json(category);
  },
  async update(req, res) {
    return res.status(200).send();
  },
  async delete(req, res) {
    return res.status(204).send();
  },
};
