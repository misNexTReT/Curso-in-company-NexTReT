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
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Te pille! :-)'
      });
      map.setCenter(pos);


      peticionJqueryAjax (position.coords.latitude,position.coords.longitude);

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
    position: new google.maps.LatLng(60, 105),
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

function peticionJqueryAjax (lat,long) {

	var url = "http://bicimad-api.herokuapp.com/api-v1/locations/nearest/?lat=" + lat + "&long=" + long + "&distance=1000000000";
   console.log("funcion init")
    $.ajax({
        dataType: "json",
        url: url,
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
             console.log( "La solicitud se ha completado correctamente." );
             console.log( data);
             muestraBicis(data);
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  textStatus);
         }
    });
    
    console.log("funcion terminada")

}

function muestraBicis(bicis){
  $(bicis.locations).each(function(){
      var pos = new google.maps.LatLng(this.latitud,
                                       this.longitud);
    
      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'HOla'
      });
  });
}
//datos Actualizacion
a.onclick = function() {
        initialize();
        return false;
}

    
})();
        