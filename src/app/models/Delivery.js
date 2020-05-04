const Sequelize = require('sequelize');

class Delivery extends Sequelize.Model {
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
      through: 'delivery_company',
      as: 'companies',
      foreignKey: 'company_id',
    });
  }
}

module.exports = Delivery;
