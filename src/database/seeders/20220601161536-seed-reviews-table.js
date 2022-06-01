'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const [companies] = await queryInterface.sequelize.query('SELECT id FROM companies;');

    await queryInterface.bulkInsert('reviews', [{
      average_stars_given: 'Full-stack Javascript Developer',
      stars: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      limit_date: '2022-03-31',
      clients_id: clients[0].id,
      created_at: new Date(),
      updated_at: new Date()
    }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
