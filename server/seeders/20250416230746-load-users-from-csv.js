'use strict';

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userData = [];
    
    // Read the CSV file
    await new Promise((resolve, reject) => {
      fs.createReadStream(path.join(__dirname, '../data/users.csv'))
        .pipe(csv())
        .on('data', (row) => {
          // Clean up the data
          const firstName = row.first_name.trim();
          const lastName = row.last_name.trim();
          
          // parse user_id, defaulting to null if invalid
          const userId = row.user_id ? parseInt(row.user_id) : null;
          
          // make sure contact_type is never null
          const contactType = row.contact_type || 'Student';  // Default to Student if contact_type is missing
          
          if (!isNaN(userId)) {  // Only add if we have a valid user_id
            userData.push({
              first_name: firstName,
              last_name: lastName,
              email: row.email,
              contact_type: contactType,
              user_id: userId,
              createdAt: new Date(),
              updatedAt: new Date()
            });
          }
        })
        .on('end', resolve)
        .on('error', reject);
    });

    // Insert the data into the users table
    if (userData.length > 0) {
      await queryInterface.bulkInsert('users', userData, {});
    }
  },

  async down(queryInterface, Sequelize) {
    // Remove all user data
    await queryInterface.bulkDelete('users', null, {});
  }
}; 