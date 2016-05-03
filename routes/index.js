var express = require('express');
var router = express.Router();
var Venue = require('../models/venue');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

//   Venue.find({ name: 'Hotel Vegas' }, 'name address email', function(err, venue) {
//   if (err) console.log(err);
//   console.log(venue);
// });

});


module.exports = router;
