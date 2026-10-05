// db.js
const mysql = require('mysql2');
require('dotenv').config();

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Maximum active connections
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: true, // Set to false if you want to trust self-signed certs implicitly
  }
});

// Export the promise-based pool
module.exports = pool.promise();
