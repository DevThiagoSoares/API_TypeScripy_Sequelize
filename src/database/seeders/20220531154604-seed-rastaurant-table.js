'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [{
      name: 'Restaurant 1',
      phone: '1111-1111',
      description: 'restaurant specializing in Mexican food ',
      address: 'street 1, Number 1, district 1, city 1',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Restaurant 2',
      phone: '2222-2222',
      description: 'We serve the best Indian food in town',
      address: 'street 2, Number 2, district 2, city 2',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Restaurant 3',
      phone: '3333-3333',
      description: 'homemade food from Mrs. Zezé',
      address: 'street 3, Number 3, district 3, city 3',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants');
  }
};
