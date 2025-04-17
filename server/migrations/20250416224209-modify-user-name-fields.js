'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Add the new columns
    await queryInterface.addColumn('users', 'first_name', {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: '' // Temporary default value
    });
    
    await queryInterface.addColumn('users', 'last_name', {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: '' // Temporary default value
    });
    
    // 2. Remove the old column
    await queryInterface.removeColumn('users', 'name');
    
    
    await queryInterface.changeColumn('users', 'last_name', {
      type: Sequelize.STRING(50),
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Add the name column back
    await queryInterface.addColumn('users', 'name', {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: 'Unknown' // Temporary default
    });
    
    // Remove the first_name and last_name columns
    await queryInterface.removeColumn('users', 'first_name');
    await queryInterface.removeColumn('users', 'last_name');
  }
};