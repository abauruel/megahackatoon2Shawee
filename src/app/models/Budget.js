const Sequelize = require('sequelize');

class Budget extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        price: Sequelize.INTEGER,
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
  }
}

module.exports = Budget;
