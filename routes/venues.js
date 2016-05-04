var express = require('express');
var router = express.Router();

var Venue = require('../models/venue')

router.get('/:id', function(req, res, next) {
    Venue.findOne({_id: req.params.id }, function(err, venue) {
    if (err) console.log(err);
    res.render('show', {venue: venue});
    });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  Venue.find({}, function(err, venues) {
    if (err) console.log(err);
    // console.log(venues);
    res.json(venues);
  });
});



module.exports = router;
