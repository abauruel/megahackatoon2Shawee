const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        comment: Sequelize.STRING,
        rate: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Company, { foreignKey: 'company_id' });
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

module.exports = Comment;
