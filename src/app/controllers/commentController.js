const Comment = require('../models/Comment');

module.exports = {
  async index(req, res) {
    const { company_id } = req.body;
    const comments = await Comment.findAll({
      where: {
        company_id,
      },
    });

    return res.json(comments);
  },
  async store(req, res) {
    const { company_id, user_id, rate, comment } = req.body;
    if (!company_id && !user_id)
      return res.status(400).json({ message: 'Company or user invalid' });
    const commentary = await Comment.create({
      company_id,
      user_id,
      rate,
      comment,
    });

    return res.json(commentary);
  },
  async update(req, res) {
    return res.status(200).send();
  },
  async delete(req, res) {
    return res.status(204).send();
  },
};
