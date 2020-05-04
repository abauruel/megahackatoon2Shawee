module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'payment_methods',
      [
        { name: 'Faturado', created_at: new Date(), updated_at: new Date() },
        {
          name: 'Cartão de Debito',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Desconto a Vista',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cartão de Credito',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Pagamento Online',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('payment_methods', null, {});
  },
};
