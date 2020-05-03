const Sequelize = require('sequelize');

class Category extends Sequelize.Model {
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

module.exports = Category;
