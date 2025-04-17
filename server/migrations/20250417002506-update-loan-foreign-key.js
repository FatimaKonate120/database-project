'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Drop the existing foreign key constraint
    await queryInterface.removeConstraint('loans', 'loans_ibfk_2');
    
    // Add the new foreign key constraint pointing to users.user_id
    await queryInterface.addConstraint('loans', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'loans_user_id_fkey',
      references: {
        table: 'users',
        field: 'user_id'  // This is the "99 number" field
      },
      onDelete: 'restrict',
      onUpdate: 'cascade'
    });
  },

  async down(queryInterface, Sequelize) {
    // Restore the original constraint if needed
    await queryInterface.removeConstraint('loans', 'loans_user_id_fkey');
    
    await queryInterface.addConstraint('loans', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'loans_ibfk_2',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'cascade'
    });
  }
};