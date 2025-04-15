'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipment_id: {
        type: Sequelize.STRING(50),
        allowNull: true, 
        references: {
          model: 'equipment',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      date_out: {
        type: Sequelize.DATE,
        allowNull: false
      },
      date_in: {
        type: Sequelize.DATE,
        allowNull: true
      },
      location: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      purpose: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      units: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      comments: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('loans');
  }
};
