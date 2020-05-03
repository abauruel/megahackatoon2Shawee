module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payment_methods', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('payment_methods');
  },
};
