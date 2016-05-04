var express = require('express');
var router = express.Router();
var Venue = require('../models/venue');
var secrets = require('../secrets');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.get('/images', function(req, res, next) {
  Venue.find({}, function(err, venue) {
    if (err) console.log(err);
    res.render('images', {venue: venue});
  });

});



// /images
// all images for every venue
// html loop for venues.all

// /images/:neighborhood
// /images/downtown
// req.params.neighborhood



module.exports = router;
