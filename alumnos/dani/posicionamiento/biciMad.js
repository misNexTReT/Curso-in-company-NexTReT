function biciMadLocation () {
      
        var url = "http://bicimad-api.herokuapp.com/api-v1/locations/nearest/?lat=40.418889&long=-3.691944&distance=1000000000";
        
        $.ajax({
            dataType: "json",
            url: url,
        })
         .done(function( data, textStatus, jqXHR ) {
             if ( console && console.log ) {
                 console.log( "La solicitud se ha completado correctamente." );
                 console.log(data);
                 
                 
                $(data.locations).each(function( index ) {
                    console.log( "latitud: " + this.latitud + " ---- longitud: " + this.longitud);
                    pintarBici(this.latitud, this.longitud);
                    
                    
                });
             }
         })
         .fail(function( jqXHR, textStatus, errorThrown ) {
             if ( console && console.log ) {
                 console.log( "La solicitud a fallado: " +  textStatus);
             }
        });
      
    }
  
   
    
    
    
var map;
function pintarBici(latitud, longitud) {
  var mapOptions = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('mapa'),
      mapOptions);
    // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(latitud, longitud);
      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'BICI'
      });
      map.setCenter(pos);
      

    
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}



 biciMadLocation();