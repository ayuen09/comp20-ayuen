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

var Alewife = {lat: 42.395428 , lng: -71.142483};
var Davis = {lat: 42.39674 , lng: -71.121815};
var Porter_sq = {lat: 42.3884, lng: -71.11914899999999};
var Harvard_sq = {lat: 42.373362 , lng: -71.118956};
var Central_sq = {lat: 42.365486 , lng: -71.103802};
var MIT = {lat: 42.36249079 , lng: -71.08617653};
var MGH = {lat: 42.361166 , lng: -71.070628};
var Park_St = {lat: 42.3563945 , lng: -71.0624242};
var Downtown_C = {lat: 42.355518 , lng: -71.060225};
var S_station = {lat: 42.352271, lng: -71.05524200000001};
var Broadway = {lat: 42.342622, lng: -71.056967};
var Andrew = {lat: 42.330154, lng: -71.057655};
var JFK = {lat: 42.320685 , lng: -71.052391};
var Savin_Hill = {lat: 42.31129 , lng: -71.053331};
var Fields_C = {lat: 42.300093 , lng: -71.061667};
var Shawmut = {lat: 42.29312583 , lng: -71.06573796000001};
var Ashmont = {lat: 42.284652 , lng: -71.06448899999999};
  
var N_Quincy = {lat: 42.275275 , lng: -71.029583};
var Wollaston ={lat: 42.2665139 , lng: -71.0203369};
var Quincy_C = {lat: 42.251809 , lng: -71.005409};
var Quincy_A = {lat: 42.233391 , lng: -71.007153};
var Braintree = {lat: 42.2078543 , lng: -71.0011385};

/*  var locations = [['andrew', 42.330154, -71.057655, 0 ],
  ['porter_sq', 42.3884, -71.057655, 1],
  ['harvard_sq', 42.373362, -71.118956, 2]];*/
var image = 'beachflag.png';
var myLat = 0;
var myLng = 0;
var map;
var me = new google.maps.LatLng(myLat, myLng);
var infowindow = new google.maps.InfoWindow();
// Initialize and add the map
function initMap() {
  // The location of Uluru
  // The map, centered at Uluru
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: S_station, map: map/*, icon: image*/});
  getMyLocation();
 placeMarker(map);
 redLine(map);

}
function placeMarker(map){
	 var marker = new google.maps.Marker({position: S_station, map: map, icon: image});
  var m_Andrew = new google.maps.Marker({position: Andrew, map: map, icon: image});
  var m_Porter_sq = new google.maps.Marker({position: Porter_sq, map: map, icon: image});
  var m_Harvard_sq = new google.maps.Marker({position: Harvard_sq, map: map, icon: image});
  var m_JFK = new google.maps.Marker({position: m_JFK, map: map, icon: image});
  var m_Savin_Hill = new google.maps.Marker({position: Park_St, map: map, icon: image});
  var m_Park_St = new google.maps.Marker({position: Savin_Hill, map: map, icon: image});
  var m_Broadway = new google.maps.Marker({position: Broadway, map: map, icon: image});
  var m_N_Quincy = new google.maps.Marker({position: N_Quincy, map: map, icon: image});
  var m_Shawmut = new google.maps.Marker({position: Shawmut, map: map, icon: image});
  var m_Davis = new google.maps.Marker({position: Davis, map: map, icon: image});
  var m_Alewife = new google.maps.Marker({position: Alewife, map: map, icon: image});
  var m_MIT = new google.maps.Marker({position: MIT, map: map, icon: image});
  var m_MGH = new google.maps.Marker({position: MGH, map: map, icon: image});
  var m_Downtown_C = new google.maps.Marker({position: Downtown_C, map: map, icon: image});
  var m_Quincy_C = new google.maps.Marker({position: Quincy_C, map: map, icon: image});
  var m_Quincy_A = new google.maps.Marker({position: Quincy_A, map: map, icon: image});
  var m_Ashmont =new google.maps.Marker({position: Ashmont, map: map, icon: image});
  var m_Wollaston = new google.maps.Marker({position: Wollaston, map: map, icon: image});
  var m_Fields_C = new google.maps.Marker({position: Fields_C, map: map, icon: image});
  var m_Central_sq = new google.maps.Marker({position: Central_sq, map: map, icon: image});
  var m_Braintree = new google.maps.Marker({position: Braintree, map: map, icon: image});


}
function redLine(map){
	var roadTripCoor = [{lat: 42.395428 , lng: -71.142483},
	{lat: 42.39674 , lng: -71.121815},
	{lat: 42.3884, lng: -71.11914899999999},
	{lat: 42.373362 , lng: -71.118956},
	{lat: 42.365486 , lng: -71.103802},
	{lat: 42.36249079 , lng: -71.08617653},
	{lat: 42.361166 , lng: -71.070628},
	{lat: 42.3563945 , lng: -71.0624242},
	{lat: 42.355518 , lng: -71.060225},
	{lat: 42.352271, lng: -71.05524200000001},
	{lat: 42.342622, lng: -71.056967},
	{lat: 42.330154, lng: -71.057655},
	{lat: 42.320685 , lng: -71.052391},
	{lat: 42.31129 , lng: -71.053331},
	{lat: 42.300093 , lng: -71.061667},
	{lat: 42.29312583 , lng: -71.06573796000001},
	{lat: 42.284652 , lng: -71.06448899999999},
  ];

  var roadTrip = new google.maps.Polyline({
  	path:roadTripCoor,
  	strokeColor: '#FF0000',
	strokeOpacity: 1.0,
	strokeWeight: 2
  });
    roadTrip.setMap(map);

var roadTripCoor2 = [{lat: 42.320685 , lng: -71.052391},
{lat: 42.275275 , lng: -71.029583},
{lat: 42.2665139 , lng: -71.0203369},
{lat: 42.251809 , lng: -71.005409},
{lat: 42.233391 , lng: -71.007153},
{lat: 42.2078543 , lng: -71.0011385}];

var roadTrip2 = new google.maps.Polyline({
  	path:roadTripCoor2,
  	strokeColor: '#FF0000',
	strokeOpacity: 1.0,
	strokeWeight: 2
  });
  roadTrip2.setMap(map);
}


 function getMyLocation() {
 	console.log("1");
	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
		console.log("2");
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log("3");
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			renderMap(myLat, myLng);
		});
	}
	else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
	}
}

function renderMap(myLat, myLng) {
	me = new google.maps.LatLng(myLat, myLng);
	// Update map and go there...
	map.panTo(me);
	
	// Create a marker
	var marker = new google.maps.Marker({
		position: me,});
	marker.setMap(map);

				// Open info window on click of marker
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.setContent(marker.title);
					infowindow.open(map, marker);
				});
}
  /*for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });*/
