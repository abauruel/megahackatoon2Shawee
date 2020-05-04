module.exports = {
  up: (queryInterface) => {
    return queryInterface.renameColumn('users', 'password', 'password_hash');
  },

  down: (queryInterface) => {
    return queryInterface.renameColumn('users', 'password_hash', 'password');
  },
};
