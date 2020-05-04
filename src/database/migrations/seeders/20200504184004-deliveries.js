module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'deliveries',
      [
        {
          name: 'Entrega Grátis',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Retirada no Local',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('deliveries', null, {});
  },
};
