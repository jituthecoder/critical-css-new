import mysql from 'mysql2';


// Create a connection to the database
const connection = mysql.createConnection({
  host: 'srv1533.hstgr.io', // Replace with your database host
  user: 'u472501341_license',      // Replace with your database username
  password: '7TMj^CWj/*y',      // Replace with your database password
  database: 'u472501341_license'   // Replace with your database name
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