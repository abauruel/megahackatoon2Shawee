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
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Company, {
      through: 'category_companies',
      as: 'company',
      foreignKey: 'category_id',
    });
  }
}

module.exports = Category;
