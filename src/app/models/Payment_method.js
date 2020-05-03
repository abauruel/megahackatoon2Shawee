const Sequelize = require('sequelize');

class Payment_method extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Company, {
      through: 'payment__companies',
      as: 'company',
      foreignKey: 'payment_id',
    });
  }
}

module.exports = Payment_method;
