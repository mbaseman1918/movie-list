var models = require('../models')

module.exports = {

  get: (req, res) => {
    console.log('I was invoked')
    res.json(movies)
  }

};