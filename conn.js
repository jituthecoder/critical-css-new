import mysql from 'mysql2';


// Create a connection to the database
const connection = mysql.createConnection({
  host: 'srv1439.hstgr.io', // Replace with your database host
  user: 'u845439951_license',      // Replace with your database username
  password: '@As5X6X$c?',      // Replace with your database password
  database: 'u845439951_license'   // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  // console.log('Connected to the database as ID', connection.threadId);
});

// Close the connection (optional, use this when done)
// connection.end();

export default connection;
