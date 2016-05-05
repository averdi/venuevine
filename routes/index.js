var express = require('express');
var router = express.Router();
var Venue = require('../models/venue');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

// all images for every venue
// html loop for venues.all
router.get('/images', function(req, res, next) {
  // is there a district in the query string?
  // req.query.district
  var filter = {};

  if (req.query.district) {
    filter = {
      district: req.query.district
    }
  }

  Venue.find(filter, function(err, venue) {
    if (err) console.log(err);
    res.render('images', {venue: venue});
  });

});

module.exports = router;
