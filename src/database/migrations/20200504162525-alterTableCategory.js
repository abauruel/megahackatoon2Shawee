module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('categories', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'files',
        key: 'id',
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('categories', 'avatar_id');
  },
};
