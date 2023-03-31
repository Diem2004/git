// get the client

import mysql from 'mysql2';

// create the connection to database
const connection = mysql. createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejs basic'
});

// // simple query
// connection.query(
//   'SELECT * FROM `diễm` ',
//   function(err, results, fields) {
//     console.log('>>> check mysql')
//     console.log(results); // results contains rows returned by server
//     let rows = results.map((row)=>{return row.id});
//     console.log(rows); // fields contains extra meta data about results, if available
//   }
// );
export default connection;

