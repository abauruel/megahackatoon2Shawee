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
  }
}

module.exports = Payment_method;
