(function() {
// Google Maps        
google.maps.visualRefresh = true; // Refresco Constante

var map;
function initialize() {
  var mapOptions = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('mapa'),
      mapOptions);
    // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    
      var latBici = 0;
      var longBici = 0;

      $.getJSON("http://bicimad-api.herokuapp.com/api-v1/locations/", function(result){
        $.each(result.locations, function(i, result) {
          latBici = result.latitud;
          longBici = result.longitud;
          //console.log(result.latitud);
          //console.log(result.longitud);
       
          var pos = new google.maps.LatLng(latBici,
                                         longBici);
          var image = 'http://lh5.googleusercontent.com/-cfI-ekOjts8/AAAAAAAAAAI/AAAAAAAAAB4/SkI2irn9ZoI/photo.jpg';                               
          var infowindow = new google.maps.InfoWindow({
            map: map,
            position: pos,
            icon: image
          });
          map.setCenter(pos);
        
        });
      });
      

      //datos Primer Arranque
      muestraDatos(x ,position);

    
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: El Servicio de Geolocalización esta fallando.';
  } else {
    var content = 'Error: Tu navegador no soprota la Geolocalización.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(latBici, longBici),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);


// Datos (Core)

var x = document.getElementById("datos");
var a = document.getElementById("recarga");

function muestraDatos(div, position){        
        x.innerHTML = "Latitud: " + position.coords.latitude + 
        "<br>Longitud: " + position.coords.longitude +
        "<br>Precisión: " + position.coords.accuracy +
        "<br>Altitud: " + position.coords.altitude +
        "<br>Altitud Precisa: " + position.coords.altitudeAccuracy +
        "<br>Grados Norte: " + position.coords.heading +
        "<br>Velocidad m/s: " + position.coords.speed + 
        "<br>Última Conexión: " + position.timestamp;
};


//datos Actualizacion
a.onclick = function() {
        initialize();
        return false;
}

    
})();

      