#Ejercicios día 3

**AJAX**

**Ejercicios**

1 - Sacar en el html la respuesta de OMDB para la pelicula Hackers

```javascript
  
   function petionAxajPelicula (nombre_pelicula) {
       var _url ="http://www.omdbapi.com/?t='"+nombre_pelicula+"'";
      var xmlHttp = new XMLHttpRequest();

                xmlHttp.onreadystatechange = function () {

                    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                        console.info(JSON.parse(xmlHttp.responseText));
                    } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                        console.error("ERROR! 404");
                        console.info(JSON.parse(xmlHttp.responseText));
                    }
                };

                xmlHttp.open( "GET", _url, true );
                xmlHttp.send();
    };

 
    petionAxajPelicula("Madrid");
    
```

2 - Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. 
Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401

```javascript

 
 function petionAxajClimaCiudad (nombre_ciudad) {
       var _url ="http://api.openweathermap.org/data/2.5/weather?q='"+nombre_ciudad+"'";
      var xmlHttp = new XMLHttpRequest();

                xmlHttp.onreadystatechange = function () {

                    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                        console.info(JSON.parse(xmlHttp.responseText));
                    } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                        console.error("ERROR! 404");
                        console.info(JSON.parse(xmlHttp.responseText));
                    }
                };

                xmlHttp.open( "GET", _url, true );
                xmlHttp.send();
    };

 
    petionAxajClimaCiudad("Madrid");
 
 
 
```


3 - Jugando con datos abiertos, saquemos los detalles de todos los cuadros eléctricos de Gijón por consola.
Encontraremos problemas de CORS


```javascript

(function() {
// Google Maps        
google.maps.visualRefresh = true; // Refresco Constante

var map;
function initialize() {
  var mapOptions = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map("http://bicimad-api.herokuapp.com/api-v1/locations/",
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


//datos Actualizacion
a.onclick = function() {
        initialize();
        return false;
}

    
})();
 
 
 
 
```


4 - Jugando con la geolocalización y Google Maps:

- Posicionate en un mapa y también todas las estaciones de BiciMad:

![Captura de localizaciones](https://github.com/UlisesGascon/bicimad-api/blob/master/ejemplos/img/gmaps_bicimad_station.png?raw=true)

```javascript
  // tu solución aqui
```

- [BiciMad Cercania](http://bicimad-api.herokuapp.com/api-v1/locations/nearest/?lat=40.418889&long=-3.691944&distance=1000000000)
- [BiciMad Localizaciones](http://bicimad-api.herokuapp.com/api-v1/locations/)
- [Ejemplo posicionamiento con GMaps](otros/posicionamiento)


5 - Práctica llamadas AJAX usando la API Pública de RTVE.

```javascript
  // tu solución aqui
```

6 - Desarrolla una versión mejorada de [MovieFire](https://github.com/arvindr21/movieFire) (Backbone y JS) incluyendo llamadas AJAX a la base de datos de IMBD para enriquecer los datos, usando [OMDb API](http://omdbapi.com/). 
El ejercicio original utiliza Firebase como base de datos. Puedes encontrar la documentación [aqui](https://www.firebase.com/docs/)

```javascript
  // tu solución aqui o en tu carpeta
```


**NODE**


**Ejercicio**

1 - Manejar nuestro sistema acuapónico o nuestro cajero a traves de peticiones HTTP de una manera rudimentaria.

```javascript
    // Tu solución
```