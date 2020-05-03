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
  }
}

module.exports = Company;
