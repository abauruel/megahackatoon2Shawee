module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('budgets', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('budgets', 'user_id');
  },
};
