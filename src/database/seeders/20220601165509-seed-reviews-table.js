'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const [clients] = await queryInterface.sequelize.query('SELECT id FROM clients;');

    // await queryInterface.bulkInsert('reviews', 
    // [{
    //   average_stars_given: 4.5,
    //   stars: 4,
    //   // comments: 'Otima comida, gostei bastante',
    //   clients_id: clients[0].id,
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    // {
    //   average_stars_given: 3.5,
    //   stars: 5,
    //   // comments: 'Comida excelente, nada a reclamar',
    //   clients_id: clients[1].id,
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },
    //   {
    //     average_stars_given: 4.4,
    //     stars: 5,
    //     // comments: 'Comida excelente, nada a reclamar',
    //     clients_id: clients[2].id,
    //     created_at: new Date(),
    //     updated_at: new Date()
    //   },
    //   {
    //     average_stars_given: 2.5,
    //     stars: 5,
    //     // comments: 'Comida excelente, nada a reclamar',
    //     clients_id: clients[3].id,
    //     created_at: new Date(),
    //     updated_at: new Date()
    //   }
    // ]
    
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('reviews',  );

  }
};
