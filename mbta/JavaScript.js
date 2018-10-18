
      function initMap() {
          //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
          var broadway = {
		lat: 41.976816,
		long: -87.659916
	};

	var belmont = {
		lat: 41.939670,
		long: -87.655167
	};
	var locations = [
      [broadway.info, broadway.lat, broadway.long, 0],
      [belmont.info, belmont.lat, belmont.long, 1]];

     map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(lat: 42.352271, lng: -71.0552400000001),
          zoom: 13
        });

          	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});
		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
         // var andrew = new google.maps.Marker({position: {lat: 42.330154 , lng: -71.057655}, map: map, icon: image});
         /* var marker1 = new google.maps.Marker({position: {lat: 42.3884 , lng: -71.11914899999999}, map: map, icon: image});
*/
      }