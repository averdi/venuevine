$(function() {
});

function addMarker(map, myLatLng){
  new google.maps.Marker({
    map: map,
    position: myLatLng,
    icon: 'http://i.imgur.com/4tAq9f4.png'
  });
}

function initMap() {
  var myLatLng = {lat: 30.262565, lng: -97.727010}

  var map = new google.maps.Map(document.getElementById('map'), {zoom: 14, center: myLatLng});
  var geocoder = new google.maps.Geocoder;
  geocoder.geocode({'address': 'Austin'}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      // test
      // addMarker(map, {lat: 30.262565, lng: -97.727010});


      // AJAX to get lats and lngs from list of venues
      $.ajax({
        method: "GET",
        url: "/venues",
      });
      .done(function(venues) {
          venues.forEach(function(venue){
            addMarker(map, {lat: venue.lat, lng: venue.lng});

            // console.log(venue.name);
            var contentString = '<h2><a href="/venues/' + venue._id + '">' + venue.name + '</a></h2>' + venue.address + '<div class="bookingContact"><h3>Booking Contact: </h3>' + '<p>' + venue.contact + '</p></div>' + '<h3>email: </h3>' + venue.email + '<h3>Phone: </h3>' + venue.phone + '<h3>Website: </h3>' + '<a href="http://' + venue.website + '" target="_blank">' + venue.name + '</a>';
      var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 220
  });


  var image = 'http://i.imgur.com/4tAq9f4.png';
  var marker = new google.maps.Marker({
    position: (map, {lat: venue.lat, lng: venue.lng}),
    map: map,
    icon: image
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


          });
      });
      // end AJAX

    } else {
      window.alert('Geocode was not successful for the following reason: ' +
          status);
    }
  });
}
