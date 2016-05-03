$(function() {
});

function addMarker(map, myLatLng){
  new google.maps.Marker({
    map: map,
    position: myLatLng
  });
}

function initMap() {
  var myLatLng = {lat: 30.262565, lng: -97.727010}

  var map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: myLatLng});
  var geocoder = new google.maps.Geocoder;
  geocoder.geocode({'address': 'Austin'}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      // addMarker(map, {lat: 30.262565, lng: -97.727010});

      // AJAX to get lats and lngs from list of venues
      $.ajax({
        method: "GET",
        url: "/venues",
      })
      .done(function(venues) {
          venues.forEach(function(venue){
            addMarker(map, {lat: venue.lat, lng: venue.lng});
          });
      });
      // end AJAX

    } else {
      window.alert('Geocode was not successful for the following reason: ' +
          status);
    }
  });
}
