const Sequelize = require('sequelize');

class Category_company extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {},
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

module.exports = Category_company;
