'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients', [{
      name: 'Client 1',
      phone: '1111-1111',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Client 2',
      phone: '2222-2222',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Client 3',
      phone: '3333-3333',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients');
  }
};
