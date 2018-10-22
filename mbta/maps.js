
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

var location = [Alewife, Davis, Porter_sq, Harvard_sq, Central_sq, MIT, 
MGH,Park_St,Downtown_C,S_station,Broadway,Andrew,JFK,Savin_Hill,
Fields_C,Shawmut,Ashmont,N_Quincy,Wollaston,Quincy_C,Quincy_A,Braintree];
var image = 'beachflag.png';
var myLat = 0;
var myLng = 0;
var map;
var me = new google.maps.LatLng(myLat, myLng);
var infowindow = new google.maps.InfoWindow();
//var request = new XMLHttpRequest();

// Initialize and add the map
function initMap() {
  // The location of Uluru
  // The map, centered at Uluru
 map = new google.maps.Map(
 document.getElementById('map'), {zoom: 11, center: S_station, map: map, icon: image});
 getMyLocation();
 placeMarker(map);
 redLine(map);


}


function placeMarker(map){
	/*location.forEach(
		function (station){
			console.log(station);
			var marker = new google.maps.Marker({position: station, map:mymap, icon: image*/
	var marker = new google.maps.Marker({position: S_station, map: map, icon: image});
  listen_stations(map, marker, 'South Station', 'place-sstat');
  var m_Andrew = new google.maps.Marker({position: Andrew, map: map, icon: image});
   listen_stations(map, m_Andrew, 'Andrew', 'place-andrw');
  var m_Porter_sq = new google.maps.Marker({position: Porter_sq, map: map, icon: image});
   listen_stations(map, m_Porter_sq, 'Porter Square', 'place-portr');
  var m_Harvard_sq = new google.maps.Marker({position: Harvard_sq, map: map, icon: image});
     listen_stations(map, m_Harvard_sq, 'Harvard Square', 'place-harsq');
  var m_JFK = new google.maps.Marker({position: m_JFK, map: map, icon: image});
     listen_stations(map, m_JFK, 'JFK/Umass', 'place-jfk');
  var m_Savin_Hill = new google.maps.Marker({position: Park_St, map: map, icon: image});
     listen_stations(map, m_Savin_Hill, 'Savin Hill', 'place-shmnl');
  var m_Park_St = new google.maps.Marker({position: Savin_Hill, map: map, icon: image});
     listen_stations(map, m_Park_St, 'Park Street', 'place-pktrm');
  var m_Broadway = new google.maps.Marker({position: Broadway, map: map, icon: image});
     listen_stations(map, m_Broadway, 'Broadway', 'place-brdwy');
  var m_N_Quincy = new google.maps.Marker({position: N_Quincy, map: map, icon: image});
     listen_stations(map, m_N_Quincy, 'North Quincy', 'place-nqncy');
  var m_Shawmut = new google.maps.Marker({position: Shawmut, map: map, icon: image});
     listen_stations(map, m_Shawmut, 'Shawmut', 'place-smmnl');
  var m_Davis = new google.maps.Marker({position: Davis, map: map, icon: image});
     listen_stations(map, m_Davis, 'Davis', ' place-davis');
  var m_Alewife = new google.maps.Marker({position: Alewife, map: map, icon: image});
     listen_stations(map, m_Alewife, 'Alewife', 'place-alfcl');
  var m_MIT = new google.maps.Marker({position: MIT, map: map, icon: image});
     listen_stations(map, m_MIT, 'Kendall/MIT', 'place-knncl');
  var m_MGH = new google.maps.Marker({position: MGH, map: map, icon: image});
     listen_stations(map, m_MGH, 'Charles/MGH', 'place-chmnl');
  var m_Downtown_C = new google.maps.Marker({position: Downtown_C, map: map, icon: image});
     listen_stations(map, m_Downtown_C, 'Downtown crossing', 'place-dwnxg');
  var m_Quincy_C = new google.maps.Marker({position: Quincy_C, map: map, icon: image});
     listen_stations(map, m_Quincy_C, 'Quincy Center', 'place-qnctr');
  var m_Quincy_A = new google.maps.Marker({position: Quincy_A, map: map, icon: image});
     listen_stations(map, m_Quincy_A, 'Quincy Adams', 'place-qamnl');
  var m_Ashmont =new google.maps.Marker({position: Ashmont, map: map, icon: image});
     listen_stations(map, m_Ashmont, 'Ashmont', 'place-asmnl');
  var m_Wollaston = new google.maps.Marker({position: Wollaston, map: map, icon: image});
     listen_stations(map, m_Wollaston, 'Wollaston', 'place-wlsta');
  var m_Fields_C = new google.maps.Marker({position: Fields_C, map: map, icon: image});
     listen_stations(map, m_Fields_C, 'Field Corner', 'place-fldcr');
  var m_Central_sq = new google.maps.Marker({position: Central_sq, map: map, icon: image});
     listen_stations(map, m_Central_sq, 'Central Square', 'place-cntsq');
  var m_Braintree = new google.maps.Marker({position: Braintree, map: map, icon: image});
     listen_stations(map, m_Braintree, 'Braintree', 'place-brntn');


	//google.maps.event.addListener(marker, 'click', stationInfo('South Station', 'place-sstat'));

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
	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
		navigator.geolocation.getCurrentPosition(function(position) {
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
		var infowindow = new google.maps.InfoWindow();
		//loop through all stations
		var closest_to_me;
		var dis_to_me1 = {station: closest_station(map, myLat, myLng, Alewife.lat, Alewife.lng), stationName: "Alewife"};
		var dis_to_me2 = {station:closest_station(map, myLat, myLng, Porter_sq.lat, Porter_sq.lng), stationName: "Porter_sq"};
		var dis_to_me3 = {station:closest_station(map, myLat, myLng, S_station.lat, S_station.lng), stationName: "south station"};
		var dis_to_me4 = {station:closest_station(map, myLat, myLng, Broadway.lat, Broadway.lng), stationName: "Broadway"};
		closest_to_me = dis_to_me1; 
		if(dis_to_me2.station < (closest_to_me.station)){
			closest_to_me = dis_to_me2;
		}
		else if(dis_to_me3.station < closest_to_me.station){
			closest_to_me = dis_to_me3;
		}
		else if(dis_to_me4.station < closest_to_me.station){
			closest_to_me = dis_to_me4;
		}

		var content = closest_to_me.stationName +"<br> " +  closest_to_me.station;
		infowindow.setContent(content);
		infowindow.open(map, marker);
	});
}


function closest_station(map, lat1, lon1, lat2, lon2){
	//remember to cite
	Number.prototype.toRad = function() {
   	return this * Math.PI / 180;
	}
	
	// var lat2 = 42.741; 
	// var lon2 = -71.3161; 
	// var lat1 = 42.806911; 
	// var lon1 = -71.290611; 
	
	var R = 6371; // km 
	//has a problem with the .toRad() method below.
	var x1 = lat2-lat1;
	var dLat = x1.toRad();  
	var x2 = lon2-lon1;
	var dLon = x2.toRad();  
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
	                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
	                Math.sin(dLon/2) * Math.sin(dLon/2);  
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; 
	
	return d;
}

function listen_stations(map, marker, station, stop_id){
	console.log("got here");
	google.maps.event.addListener(marker, 'click', function(){
		var infowindow = stationInfo(station, stop_id);
		infowindow.open(map, marker);
	});
}

function stationInfo(station_name, stop_id){
	/* Step 1: Make instance of XHR object...
		...to make HTTP request after page is loaded*/
		var request = new XMLHttpRequest();
		var infowindow = new google.maps.InfoWindow();
		console.log("Hit me 1");
		// Step 2: Open the JSON file at remote location
		request.open("GET", "https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place-davis", true);
		console.log(stop_id);
		infowindow.setContent("<p> Loading... </p>");
	request.onreadystatechange = function(){
			console.log("Hit me 3");
			if(request.readyState == 4 && request.status != 200) {
				infowindow.setContent("<p> Something went wrong </p>");
			}
			else if (request.readyState == 4 && request.status == 200) {
				// Step 5: when we get all the JSON data back, parse it and use it
				theData = request.response;
				messages = JSON.parse(theData);
				var content = "<h2>"+ station_name + "</h2>";

				messages.data.forEach(function(data){
					var dep, arr; 
					var arr_time = data.attributes.arrival_time;
					var dep_time = data.attributes.departure_time;
					var bound = data.attributes.direction_id;
					var bounded_for;
					//console.log(arr_time);
					if(dep_time == null){
						dep = "Not Available";
					}
					else{
						dep = dep_time.split("T");
						console.log(dep[1]);
					}
					if(arr_time == null){
						arr = "Not Available";
					}
					else{
						arr = arr_time.split("T");
					}
					if(bound == 0){
						bounded_for = "Southbound";
					}
					else {
						bounded_for = "Northbound";
											}
					content += "<h3>"+ "Arrival time: " + "</h3>" +
					"<h4>" + arr[1]	+ "</h4>" + "<br>" +
					"<h3>"+ "Departure time: " + "</h3>" + 
					"<h4>"+ dep[1]	+ "</h4>" + "<br>" +
					"<h3>"+ "Bounded for: "+ "</h3>" +
					 "<h4>"+ bounded_for+ "</h4>" ;	
					});
				}
				else{
					console.log("In progress...");
				}

				console.log(content);
				infowindow.setContent(content);



		}
		request.send();
		return infowindow;
}