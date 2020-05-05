module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('budgets', 'subject', {
      type: Sequelize.STRING,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('budgets', 'subject');
  },
};
