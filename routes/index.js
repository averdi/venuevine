var express = require('express');
var router = express.Router();
var Venue = require('../models/venue');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

// /images
// all images for every venue
// html loop for venues.all
router.get('/images', function(req, res, next) {
  Venue.find({}, function(err, venue) {
    if (err) console.log(err);
    res.render('images', {venue: venue});
  });

});

// /images/:district
// /images/downtown
// req.params.district



module.exports = router;
