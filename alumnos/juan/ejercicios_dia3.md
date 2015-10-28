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

 
    petionAxajPelicula("Hackers");
    
```

2 - Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. 
Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401

```javascript
  // Tu solución
```


3 - Jugando con datos abiertos, saquemos los detalles de todos los cuadros eléctricos de Gijón por consola.
Encontraremos problemas de CORS


```javascript
  // Tu solución
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