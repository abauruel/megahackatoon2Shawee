module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'differentials',
      [
        {
          name: 'Realizar visita no Cliente',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Produz peça piloto',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Atendimento por Vídeo Chamada',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Participar de Licitações Públicas',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('differentials', null, {});
  },
};
