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
      as: 'companies',
      foreignKey: 'company_id',
    });
  }
}

module.exports = Differential;
