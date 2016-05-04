var express = require('express');
var router = express.Router();

var Venue = require('../models/venue');
var Comment = require('../models/comment');

router.get('/:id', function(req, res, next) {
  Venue.findOne({_id: req.params.id }, function(err, venue) {
     if (err) console.log(err);
     Comment.find({ venue_id: venue.id}, function(err, comments) {
        if (err) console.log(err);
        res.render('show', {venue: venue, comments: comments });
      });
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

// get comments

// router.get('/:venue_id/comments', function(req, res, next) {
//  Comment.find({ venue_id: req.params.venue_id}, function(err, comments) {
//     if (err) console.log(err);
//     res.json(comments);
//   });
// });


// post comments

router.post('/:venue_id/comments', function(req, res, next){
  var newComment = new Comment({
      title: req.body.title,
      comment: req.body.content,
      created_at: Date.now(),
      venue_id: req.params.venue_id
  });

  newComment.save(function(err, comment) {
    if (err) console.log(err);
    res.redirect('/venues/' + req.params.venue_id);
  });

});


module.exports = router;
