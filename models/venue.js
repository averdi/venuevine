var mongoose = require('mongoose');

var venueSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  email: String,
  phone: String,
  website: String,
  lat: Number,
  lng: Number,
  district: String,
  imageURL: String,
  created_at: Date,
  updated_at: Date
});

var Venue = mongoose.model('Venue', venueSchema);

// Make this available to our other files
module.exports = Venue;
