'use strict';

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const loanData = [];
    
    // First, get all equipment to map equipment_id to id
    const equipment = await queryInterface.sequelize.query(
      'SELECT id, equipment_id FROM equipment',
      { type: Sequelize.QueryTypes.SELECT }
    );
    const equipmentMap = new Map(equipment.map(e => [e.equipment_id, e.id]));

    // Get all users to map user_id to id
    const users = await queryInterface.sequelize.query(
      'SELECT id, user_id FROM users',
      { type: Sequelize.QueryTypes.SELECT }
    );
    const userMap = new Map(users.map(u => [u.user_id, u.id]));

    // Read the CSV file
    await new Promise((resolve, reject) => {
      fs.createReadStream(path.join(__dirname, '../data/loans.csv'))
        .pipe(csv())
        .on('data', (row) => {
          // Convert date strings to Date objects
          const dateOut = row.date_out ? new Date(row.date_out) : null;
          const dateIn = row.date_in ? new Date(row.date_in) : null;
          
          // Get the equipment_id and user_id from the maps
          const equipmentId = equipmentMap.get(row.equipment_id);
          const userId = userMap.get(parseInt(row.user_id));
          
          // Parse units if it exists
          const units = row.units ? parseInt(row.units) : null;
          
          if (equipmentId && userId) {  // Only add if we found matching equipment and user
            loanData.push({
              equipment_id: equipmentId,
              user_id: parseInt(row.user_id),  // Use the mapped user id
              date_out: dateOut,
              date_in: dateIn,
              location: row.location || null,
              purpose: row.purpose,
              units: units,
              comments: row.comments || null,
              createdAt: new Date(),
              updatedAt: new Date()
            });
          }
        })
        .on('end', resolve)
        .on('error', reject);
    });

    // Insert the data into the loans table
    if (loanData.length > 0) {
      await queryInterface.bulkInsert('loans', loanData, {});
    }
  },

  async down(queryInterface, Sequelize) {
    // Remove all loan data
    await queryInterface.bulkDelete('loans', null, {});
  }
}; 