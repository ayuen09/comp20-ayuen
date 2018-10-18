/*var myLat = 0;
var myLng = 0;
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {
	zoom: 13, // The larger the zoom number, the bigger the zoom
	center: me,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map;
var marker;
var infowindow = new google.maps.InfoWindow();
map = new google.maps.Map(document.getElementById("map"), myOptions);
console.log("outside fnc");

function init() {
	//map = new google.maps.Map(document.getElementById("map"), myOptions);
	console.log("inside fnc");

	//getMyLocation();
}

function getMyLocation() {
	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			renderMap();
		});
	}
	else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
	}
}

function renderMap() {
	me = new google.maps.LatLng(myLat, myLng);

	// Update map and go there...
	map.panTo(me);
	
	// Create a marker
	marker = new google.maps.Marker({
		position: me,
		title: "Here I Am!"
	});
	marker.setMap(map);
		
	// Open info window on click of marker
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});
}*/

var uluru = {lat: 42.352271, lng: -71.05524200000001};
  var B = {lat: 42.330154, lng: -71.057655};
  var C = {lat: 42.3884, lng: -71.11914899999999};
  var D = {lat: 42.373362 , lng: -71.118956};

// Initialize and add the map
function initMap() {
  // The location of Uluru
  
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
  var B = new google.maps.Marker({position: B, map: map});
  var C = new google.maps.Marker({position: C, map: map});
  var D = new google.maps.Marker({position: D, map: map});
  //var E = new google.maps.Marker({position: E, map: map});
  //var F = new google.maps.Marker({position: F, map: map});
  }