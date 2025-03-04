const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

// Set up Sequelize with MariaDB dialect
const sequelizeDB = new Sequelize({
  dialect: 'mariadb',
  host: process.env.DB_HOST, 
  username: process.env.DB_USER,  
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,  
  database: process.env.DB_NAME,  
  logging: false
});

// Test the connection
sequelizeDB.authenticate()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error.message);
    process.exit(1); // Exit the process if the connection fails
  });

module.exports = sequelizeDB;
