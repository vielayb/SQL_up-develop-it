const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Huskylock@21',
      database: 'election2'
    },
    console.log('Connected to the election2 database.')
);


module.exports = db;