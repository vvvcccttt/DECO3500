var locations = [
    ['Dad', -27.4975, 153.0137, 4],      
    ['Mom', -27.4975, 153.0250, 5],      
    ['Grandpa', -27.5200, 153.0137, 3],  
    ['Boy', -27.4919, 153.0219, 2]      
  ];
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15, 
    center: new google.maps.LatLng(-27.4975, 153.0137), 
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  var infowindow = new google.maps.InfoWindow();
  
  var marker, i;
  
  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });
  
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  