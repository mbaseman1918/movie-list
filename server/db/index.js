var mysql = require('mysql2');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movies',
});

db.connect();

module.exports = db;