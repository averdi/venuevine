var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  title: String,
  comment: String,
  venue_id: String,
  created_at: Date,
  updated_at: Date
});

var Comment = mongoose.model('Comment', commentSchema);

// Make this available to our other files
module.exports = Comment;
