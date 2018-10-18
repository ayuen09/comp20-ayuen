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

var S_station = {lat: 42.352271, lng: -71.05524200000001};
  var Andrew = {lat: 42.330154, lng: -71.057655};
  var Porter_sq = {lat: 42.3884, lng: -71.11914899999999};
  var Harvar_sq = {lat: 42.373362 , lng: -71.118956};
  var JFK = {lat: 42.320685 , lng: -71.052391};
  var Savin_Hill = {lat: 42.31129 , lng: -71.053331};
  var Park_St = {lat: 42.3563945 , lng: -71.0624242};
  var Broadway = {lat: 42.342622, lng: -71.056967};
  var N_Quincy = {lat: 42.275275 , lng: -71.029583};
  var Shawmut = {lat: 42.29312583 , lng: -71.06573796000001};
  var Davis = {lat: 42.39674 , lng: -71.121815};
  var Alewife = {lat: 42.395428 , lng: -71.142483};
  var MIT = {lat: 42.36249079 , lng: -71.08617653};
  var MGH = {lat: 42.361166 , lng: -71.070628};
  var Downtown_c = {lat: 42.355518 , lng: -71.060225};
  var Quincy_C = {lat: 42.251809 , lng: -71.005409};
  var Quincy_A = {lat: 42.233391 , lng: -71.007153};
  var Ashmont = {lat: 42.284652 , lng: -71.06448899999999};
  var Wollaston ={lat: 42.2665139 , lng: -71.0203369};
  var Fields_C = {lat: 42.300093 , lng: -71.061667};
  var Central_sq = {lat: 42.365486 , lng: -71.103802};
  var Braintree = {lat: 42.2078543 , lng: -71.0011385};

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