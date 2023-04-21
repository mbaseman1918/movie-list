var controller = require('./controllers');
var router = require('express').Router();

// Connect controller methods to their corresponding routes
router.get('/api/movies', controller.movies.get);

module.exports = router;