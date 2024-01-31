// const Pool = require("pg").Pool; // Import Pool from pg

// const pool = new Pool({
//   // Create a new Pool
//   user: "postgres", // Set the user to postgres
//   password: "test", // Set the password to test
//   host: "localhost", // Set the host to localhost
//   port: 5432, // Set the port to 5432
//   database: "blogsite", // Set the database to perntodo
// });

// module.exports = pool; // Export the pool
require("dotenv").config(); // Load environment variables from .env file
const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

module.exports = pool;
