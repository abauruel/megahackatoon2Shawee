const Sequelize = require('sequelize');

class Company extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        phone: Sequelize.INTEGER,
        email: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        adress: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        social_media: Sequelize.STRING,
        website: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Category, {
      through: 'category_companies',
      as: 'categories',
      foreignKey: 'company_id',
    });
    this.belongsToMany(models.Payment_method, {
      through: 'payment__companies',
      as: 'payment_methods',
      foreignKey: 'company_id',
    });
  }
}

module.exports = Company;
