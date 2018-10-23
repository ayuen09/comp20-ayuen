var locationList = [ ['South Station', 42.352271, -71.05524200000001, 'place-sstat'],
				['Andrew'           ,   42.330154 ,         -71.057655 , 'place-andrw'],
				[ 'Porter Square'     ,     42.3884 , -71.11914899999999 , 'place-portr'],
				[ 'Harvard Square'    ,   42.373362 ,         -71.118956 , 'place-harsq'],
				[ 'JFK/UMass'         ,   42.320685 ,         -71.052391 , 'place-jfk'],
				[ 'Savin Hill'        ,    42.31129 ,         -71.053331 , 'place-shmnl'],
				 ['Park Street'       , 42.35639457 ,        -71.0624242 , 'place-pktrm'],
				[ 'Broadway'          ,   42.342622 ,         -71.056967 , 'place-brdwy'],
				[ 'North Quincy '     ,   42.275275 ,         -71.029583 , 'place-nqncy'],
				[ 'Shawmut'           , 42.29312583 , -71.06573796000001 , 'place-smmnl'],
				[ 'Davis'             ,    42.39674 ,         -71.121815 , 'place-davis'],
				[ 'Alewife'           ,   42.395428 ,         -71.142483 , 'place-alfcl'],
				[ 'Kendall/MIT '      , 42.36249079 ,       -71.08617653 , 'place-knncl'],
				[ 'Charles/MGH'       ,   42.361166 ,         -71.070628 , 'place-chmnl'],
				[ 'Downtown Crossing' ,   42.355518 ,         -71.060225 , 'place-dwnxg'],
				[ 'Quincy Center'     ,   42.251809 ,         -71.005409 , 'place-qnctr'],
				 [ 'Quincy Adams'      ,   42.233391 ,         -71.007153 , 'place-qamnl'],
				 ['Ashmont'           ,   42.284652 , -71.06448899999999 , 'place-asmnl'],
				 ['Wollaston'         ,  42.2665139 ,        -71.0203369 ,'place-wlsta'],
				[ 'Fields Corner'     ,   42.300093 ,         -71.061667 , 'place-fldcr'],
				[ 'Central Square'    ,   42.365486 ,         -71.103802 , 'place-cntsq'],
				[ 'Braintree'        ,   42.2078543 ,        -71.0011385 , 'place-brntn']];

var S_station = {lat: 42.352271, lng: -71.05524200000001};

var image = 'beachflag.png';
var myLat = 0;
var myLng = 0;
var map;
var me = new google.maps.LatLng(myLat, myLng);
var infowindow = new google.maps.InfoWindow();

// Initialize and add the map
function initMap() {;
 map = new google.maps.Map(
 document.getElementById('map'), {zoom: 11, center: S_station, map: map, icon: image});
 getMyLocation();
 placeMarker(map);
 redLine(map);
}

//places markers on each of the stations
function placeMarker(map){

	for (i = 0; i < locationList.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locationList[i][1], locationList[i][2]),
        map: map,
        icon:image

      });
      //places a addlistener to each of the stations
      listen_stations(map, marker, locationList[i][0], locationList[i][3]);
  }
}

//adds a redline from Alewife to Ashmont and from JFK to Braintree
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

//get my current location
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

//centers map to my current location once current location is found
//has an addlistener for when marker is clicked on
//finds the closest station to current location then displays station name, station distance from my location 
// 	and a polyline from my location to closest station
function renderMap(myLat, myLng) {
	me = new google.maps.LatLng(myLat, myLng);
	// Update map and go there...
	map.panTo(me);

	var marker = new google.maps.Marker({
		position: me,});
	marker.setMap(map);

	// Open info window on click of marker
	google.maps.event.addListener(marker, 'click', function() {
		var infowindow = new google.maps.InfoWindow();
		var dis_to_me = {station: closest_station(map, myLat, myLng, S_station.lat, S_station.lng), stationName: 'South Station',
		stationLat: S_station.lat, stationLng: S_station.lng };

		var closest_to_me = dis_to_me;
		//loop through all stations
		//finds closest station
		for(i = 0; i <locationList.length; i++){
			var dis_to_me = {station: closest_station(map, myLat, myLng, locationList[i][1], locationList[i][2]), stationName: locationList[i][0],
			stationLat: locationList[i][1], stationLng: locationList[i][2]};
			
			if(dis_to_me.station < closest_to_me.station){
				closest_to_me = dis_to_me;
			}
		}
		//draws polyline from current location to closest station
		var path = [{lat: myLat, lng: myLng}, {lat: closest_to_me.stationLat, lng:closest_to_me.stationLng}];
		var pathTo = new google.maps.Polyline({
		  	path:path,
		  	strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 2
		  });
		  pathTo.setMap(map);

		var content = closest_to_me.stationName +"<br> " +  closest_to_me.station + " m";
		infowindow.setContent(content);
		infowindow.open(map, marker);
	});
}

//calculates the distance between two locations
function closest_station(map, lat1, lon1, lat2, lon2){
	//remember to cite
	Number.prototype.toRad = function() {
   	return this * Math.PI / 180;
	}
	
	var R = 6371; 
	var x1 = lat2-lat1;
	var dLat = x1.toRad();  
	var x2 = lon2-lon1;
	var dLon = x2.toRad();  
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
	                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
	                Math.sin(dLon/2) * Math.sin(dLon/2);  
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	//converts to miles
	var d = (R * c)*.621371; 
	
	return d;
}

//adds event listener
function listen_stations(map, marker, station, stop_id){
	google.maps.event.addListener(marker, 'click', function(){
		var infowindow = stationInfo(station, stop_id);
		infowindow.open(map, marker);
	});
}

function stationInfo(station_name, stop_id){
	//Make instance of XHR object to make XML request
		var request = new XMLHttpRequest();
		var infowindow = new google.maps.InfoWindow();
		// Open the JSON file at remote location
		request.open("GET", "https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place-davis", true);
		infowindow.setContent("<p> Loading... </p>");
	request.onreadystatechange = function(){
			if(request.readyState == 4 && request.status != 200) {
				infowindow.setContent("<p> Something went wrong </p>");
			}
			else if (request.readyState == 4 && request.status == 200) {
				// parse data and send to infowindow
				theData = request.response;
				messages = JSON.parse(theData);
				var content = "<h2>"+ station_name + "</h2>";
				//divide up each attribute to get info 
				messages.data.forEach(function(data){
					var dep, arr; 
					var arr_time = data.attributes.arrival_time;
					var dep_time = data.attributes.departure_time;
					var bound = data.attributes.direction_id;
					var bounded_for;
					if(dep_time == null){
						dep = "Not Available";
					}
					else{
						dep = dep_time.split("T");
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
					content += "<div id = 'content'>"+"<h3>"+ "Arrival time: " + "</h3>" +
					"<h4>" + arr[1]	+ "</h4>" + "<br>" +
					"<h3>"+ "Departure time: " + "</h3>" + 
					"<h4>"+ dep[1]	+ "</h4>" + "<br>" +
					"<h3>"+ "Bounded for: "+ "</h3>" +
					 "<h4>"+ bounded_for+ "</h4>" + "<br>"+ "</div>" ;	
					});
				}

				infowindow.setContent(content);

		}
		request.send();
		return infowindow;
}