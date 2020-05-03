const Sequelize = require('sequelize');

class Payment_Company extends Sequelize.Model {
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
    this.belongsTo(models.Payment_method, { foreignKey: 'payment_id' });
    this.belongsTo(models.Company, { foreignKey: 'company_id' });
  }
}

module.exports = Payment_Company;
