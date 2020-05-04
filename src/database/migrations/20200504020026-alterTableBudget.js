module.exports = {
  up: (queryInterface) => {
    return queryInterface.removeColumn('budgets', 'price');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('budgets', 'price', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
