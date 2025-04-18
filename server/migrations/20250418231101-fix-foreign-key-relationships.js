'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // First, drop all existing foreign key constraints
    try {
      await queryInterface.removeConstraint('loans', 'loans_ibfk_1');
      await queryInterface.removeConstraint('loans', 'loans_ibfk_2');
      await queryInterface.removeConstraint('loans', 'loans_user_id_fkey');
      await queryInterface.removeConstraint('loans', 'loans_equipment_id_fkey');
    } catch (error) {
      console.log('Some constraints did not exist');
    }

    // Add the correct foreign key constraints
    await queryInterface.addConstraint('loans', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'loans_user_id_fkey',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addConstraint('loans', {
      fields: ['equipment_id'],
      type: 'foreign key',
      name: 'loans_equipment_id_fkey',
      references: {
        table: 'equipment',
        field: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the constraints
    try {
      await queryInterface.removeConstraint('loans', 'loans_user_id_fkey');
      await queryInterface.removeConstraint('loans', 'loans_equipment_id_fkey');
    } catch (error) {
      console.log('Some constraints did not exist');
    }
  }
};
