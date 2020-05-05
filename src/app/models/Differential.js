const Sequelize = require('sequelize');

class Differential extends Sequelize.Model {
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
      through: 'company_differential',
      as: 'company',
      foreignKey: 'differential_id',
    });
  }
}

module.exports = Differential;
