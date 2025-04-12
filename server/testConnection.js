const mysql = require('mysql2');
require('dotenv').config();

// Log the connection details (without password) for debugging
console.log('Attempting to connect with these settings:');
console.log('Host:', process.env.DB_HOST);
console.log('User:', process.env.DB_USERNAME);
console.log('Database:', process.env.DB_NAME);
console.log('Port: 3306 (default MySQL port)');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Successfully connected to the database!');
  connection.end();
}); 