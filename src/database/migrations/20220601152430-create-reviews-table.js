'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'reviews', {
      clients_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references: {
          model: 'clients',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      average_stars_given: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      stars: {
        type: Sequelize.INTEGER,


      },
      Comment: {
        type: Sequelize.TEXT,

      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('reviews');

  }
};
