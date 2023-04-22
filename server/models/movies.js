var db =require('../db');

module.exports = {
  getAll: (callback) => {
    var movies = [
      {title: 'Mean Girls', watched: false},
      {title: 'Hackers', watched: false},
      {title: 'The Grey', watched: false},
      {title: 'Sunshine', watched: false},
      {title: 'Ex Machina', watched: false},
    ];
    var sqlString = 'SELECT * FRom movies'
    db.query(sqlString, (err, results) => {
      callback(err, results);
    })
  }
}