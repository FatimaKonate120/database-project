'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('equipment', 'equip_type', {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: 'Unknown' // Temporary default value
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('equipment', 'equip_type');
  }
}; 