var express = require('express');
var router = express.Router();

var Venue = require('../models/venue')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Venue.find({}, function(err, venues) {
    if (err) console.log(err);
    console.log(venues);
    res.json(venues);
  });
});


// router.get('/children', authenticatedUser, function(req, res, next) {
//  User.findOne({ _id: '5727ab3299767b175b7453a7' }, 'local.fname local.lname local.email children', function(err, user) {
//  if (err) console.log(err);

//  // user.name
//  // user.email
//  // user.favorite

//  console.log(user);
// });
//  res.render("children");
// });


module.exports = router;
