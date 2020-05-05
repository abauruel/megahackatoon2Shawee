module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Uniforme Escolar',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Linha Esportiva',
          created_at: new Date(),
          updated_at: new Date(),
        },
        { name: 'Camisa Polo', created_at: new Date(), updated_at: new Date() },
        { name: 'EPI', created_at: new Date(), updated_at: new Date() },
        {
          name: 'Uniforme Profissional',
          created_at: new Date(),
          updated_at: new Date(),
        },
        { name: 'Moda', created_at: new Date(), updated_at: new Date() },
        {
          name: 'Camisa Básica',
          created_at: new Date(),
          updated_at: new Date(),
        },
        { name: 'Moda Praia', created_at: new Date(), updated_at: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('categories', null, {});
  },
};
