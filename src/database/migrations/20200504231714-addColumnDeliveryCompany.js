module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('delivery_company', 'id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('delivery_company', 'id');
  },
};
