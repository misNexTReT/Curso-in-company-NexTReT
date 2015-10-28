#Ejercicios día 3

**AJAX**

**Ejercicios**

1 - Sacar en el html la respuesta de OMDB para la pelicula Hackers

```javascript
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
  <script>
    $(document).ready(function(){
      $.ajax({
            dataType: "json",
            url: "http://www.omdbapi.com/?t=hackers&y=&plot=short&r=json"
      })
      .done(function( data, textStatus, jqXHR ) {
            $("#resultados").text(data.Title);
       })
       .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  textStatus);
         }
      });// Write JavaScript here 
    });
  </script>
<title>HTML5, CSS3 and JavaScript demo</title>
</head>
<body>
<!-- Start your code here -->

  <div id="resultados"></div>

<!-- End your code here -->
</body>
</html>
```

2 - Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. 
Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401

```
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
  <script>
    $(document).ready(function(){
      $.ajax({
            dataType: "json",
        url: "http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=bd82977b86bf27fb59a04b61b657fb6f"
      })
      .done(function( data, textStatus, jqXHR ) {
            $("#resultados").text(data);
       })
       .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  textStatus);
         }
      });// Write JavaScript here 
    });
  </script>
<title>HTML5, CSS3 and JavaScript demo</title>
</head>
<body>
<!-- Start your code here -->

  <div id="resultados"></div>

<!-- End your code here -->
</body>
</html>
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