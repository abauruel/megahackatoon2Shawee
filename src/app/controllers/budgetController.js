const Budget = require('../models/Budget');
const File = require('../models/File');

module.exports = {
  async show(req, res) {
    const budget = await Budget.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: File, as: 'files', through: { attributes: [] } }],
    });
    return res.json(budget);
  },

  async store(req, res) {
    const { company_id, category_id, description } = req.body;

    const user_id = req.userId;
    console.log(user_id);
    const budget = await Budget.create({
      category_id,
      company_id,
      description,
      user_id,
    });

    return res.json(budget);
  },
};
