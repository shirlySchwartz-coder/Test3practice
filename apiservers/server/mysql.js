const mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'adu',
  password        : '123456',
  database        : 'server_api'
});
 
pool.on('connection', (connection) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
     
      console.log('connected as id ' + connection.threadId);
    //console.log('The server concted to mysl', pool.database);
  });
module.exports = {pool};