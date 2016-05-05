var express = require('express');
var router = express.Router();
var Venue = require('../models/venue');



// all images for every venue
// html loop for venues.all
router.get('/', function(req, res, next) {
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
    res.render('index', {venue: venue});
  });

});

/* GET home page. */
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Express' });

});

module.exports = router;
