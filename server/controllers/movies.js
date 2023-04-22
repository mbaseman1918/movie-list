var models = require('../models')

module.exports = {

  get: (req, res) => {
    models.movies.getAll((err, results) => {
      if (err || req.method !== 'GET') {
        console.error('Unable to retrieve movies from the database: ', err);
        res.end('Hello World');
      } else {
        res.json(results)
      }
    })
  }

};