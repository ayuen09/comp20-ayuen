var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.352271, lng: -71.0552400000001},
          zoom: 13
        });
         /* var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
          var marker = new google.maps.Marker({position: {lat: 42.330154 , lng: -71.057655}, map: map, icon: image});
          var marker1 = new google.maps.Marker({position: {lat: 42.3884 , lng: -71.11914899999999}, map: map, icon: image});
*/
      }