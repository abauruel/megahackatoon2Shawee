const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        phone: Sequelize.INTEGER,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
