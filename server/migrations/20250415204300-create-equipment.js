'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
  await queryInterface.createTable('equipment', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // Equipment identifier (like serial number, inventory code, etc.)
    equipment_id: {
      type: Sequelize.STRING(50),
      allowNull: true,
      unique: true
    },
    make: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    equipment_id: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    purchase_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    checkout_status: {
      type: Sequelize.ENUM('available', 'in use'),
      allowNull: false,
      defaultValue: 'available'
    },
    firmware_update: {
      type: Sequelize.DATE,
      allowNull: true
    },
    health: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    notes: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    total_days_inuse: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0
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


async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('equipment');
}
};
