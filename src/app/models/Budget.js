const Sequelize = require('sequelize');

class Budget extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id' });
    this.belongsTo(models.Company, { foreignKey: 'company_id' });
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsToMany(models.File, {
      through: 'budget_files',
      as: 'files',
      foreignKey: 'budget_id',
    });
  }
}

module.exports = Budget;
