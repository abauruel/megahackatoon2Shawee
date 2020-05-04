const BudgetRequest = require('../models/Budget');
const Company = require('../models/Company');

module.exports = {
  async index(req, res) {
    const budgetsRequest = await BudgetRequest.findAll({
      where: {
        user_id: req.userID,
      },
      include: [
        {
          model: Company,
          as: 'company',
          through: { attributes: [] },
        },
      ],
    });

    return res.json(budgetsRequest);
  },
};
