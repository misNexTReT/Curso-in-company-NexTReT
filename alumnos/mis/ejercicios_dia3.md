#Ejercicios día 3

**AJAX**

**Ejercicios**

1 - Sacar en el html la respuesta de OMDB para la pelicula Hackers

```javascript
function peticionJqueryAjax (url) {

    $.ajax({
        dataType: "json",
        url: url,
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
             console.log( "La solicitud se ha completado correctamente." );
             console.log( data );
             
             document.body.innerHTML  = data.Title;
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  textStatus);
         }
    });

}

peticionJqueryAjax ("http://www.omdbapi.com/?t=Hackers");
```

2 - Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. 
Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401

```javascript
function peticionJqueryAjax (city) {

	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",es&appid=bd82977b86bf27fb59a04b61b657fb6f";
    $.ajax({
        dataType: "json",
        url: url,
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
             console.log( "La solicitud se ha completado correctamente." );
             console.log( data );
             --console.log( data.name + " tiene un tiempo " + data.weather[0].description);
              
             document.body.innerHTML  = data;
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  textStatus);
         }
    });

}

peticionJqueryAjax ("Madrid");
peticionJqueryAjax ("Barcelona");
peticionJqueryAjax ("Valencia");
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
  var http = require('http'),
      url = require('url');

var miTanque = null;
var miCama = null;

  http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var data,cuantos;
    var query = url.parse(req.url).query;
    console.log("La parametro: "+query);
    if (query != null){
         data = query.split("=");
         cuantos = data[1];
         console.log("Cuantos: "+cuantos);
    }
    if (pathname === '/') {
        res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      miTanque = new tanque(40,51,25.5,30.5,"Gris Claro",29);
      miCama = new cama(10,51,25.5,10,"Rojo",5,"Piedra volcánica");
      res.end('Index!\nCreamos Tanque y Cama\n');

    } else if (pathname === '/llenar/tanque') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end(miTanque.llenado(parseInt(cuantos)));
    } else if (pathname === '/llenar/cama') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end(miCama.llenado(parseInt(cuantos))));
    } else if (pathname === 'llenar/peces') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end(miTanque.addPeces(parseInt(cuantos))));
    } else if (pathname === '/llenar/plantas') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end(miCama.addPlantas(parseInt(cuantos))));
    } else if (pathname === '/alindex') {
        res.writeHead(301, {
        'Location': '/'
      });
      res.end();    

    } else {
        res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.end('Querido... 404!');
    }

  }).listen(process.env.PORT, process.env.IP);

  console.log('Servidor funcionando en http://'+process.env.IP+':'+process.env.PORT+'/');
  
  var tanque = function (capacidad, largo, ancho, alto, color,nivelMaxAgua){
    this.capacidad = capacidad;
    this.largo = largo;
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
    this.nivelMaxAgua = nivelMaxAgua;
    
    this.agua = 0;
    
    this.llenado = function (cuanta){
        var ret = "";
        console.log("LLenado - Tenia " + this.agua + " litros de agua");
        ret = "LLenado - Tenia " + this.agua + " litros de agua\n"
        this.agua+=cuanta;
        console.log("LLenado - Ahora tengo " + this.agua + " litros de agua");
        ret += "LLenado - Ahora tengo " + this.agua + " litros de agua\n";
        ret += this.desague();
        return ret;
    }
    
    this.desague = function (){
        if (this.nivelMaxAgua < this.agua) {
            var ret = "";
            console.log("Vaciado - Tenia " + this.agua + " litros de agua");
            ret = "Vaciado - Tenia " + this.agua + " litros de agua\n";
            this.agua=this.nivelMaxAgua;
            console.log("Vaciado - Ahora tengo " + this.agua + " litros de agua");
            ret += "LLenado - Ahora tengo " + this.agua + " litros de agua\n";
            return ret;
        } else 
            return ""
    }
};
var cama = function (capacidad, largo, ancho, alto, color,nivelMaxAgua,sustrato){
    this.capacidad = capacidad;
    this.largo = largo;
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
    this.nivelMaxAgua = nivelMaxAgua;
    this.sustrato = sustrato;
    
    this.agua = 0;
    
    this.llenado = function (cuanta){
        var ret = "";
        console.log("LLenado - Tenia " + this.agua + " litros de agua");
        ret = "LLenado - Tenia " + this.agua + " litros de agua\n";
        this.agua+=cuanta;
        console.log("LLenado - Ahora tengo " + this.agua + " litros de agua");
        ret += "LLenado - Ahora tengo " + this.agua + " litros de agua\n";
        ret += this.desague();
        return ret;
    }
    
    this.desague = function (){
        if (this.nivelMaxAgua < this.agua) {
            var ret = "";
            console.log("Vaciado - Tenia " + this.agua + " litros de agua");
            ret = "Vaciado - Tenia " + this.agua + " litros de agua\n";
            this.agua=this.nivelMaxAgua;
            console.log("Vaciado - Ahora tengo " + this.agua + " litros de agua");
            ret += "Vaciado - Ahora tengo " + this.agua + " litros de agua\n";
            return ret;
        } else 
            return ""
    }
};

tanque.prototype.peces=0;
tanque.prototype.addPeces = function(cuanto){
    var ret = "";
    console.log("LLenado - Tenia " + this.peces + " peces");
    ret = "LLenado - Tenia " + this.peces + " peces\n";
    this.peces+=cuanto;
    console.log("LLenado - Ahora tengo " + this.peces + " peces");
    ret += "LLenado - Ahora tengo " + this.peces + " peces\n";
    return ret;
}
cama.prototype.plantas=0;
cama.prototype.addPlantas = function(cuanto){
    var ret = "";
    console.log("LLenado - Tenia " + this.plantas + " plantas");
    ret = "LLenado - Tenia " + this.plantas + " plantas\n";
    this.plantas+=cuanto;
    console.log("LLenado - Ahora tengo " + this.plantas + " plantas");
    ret += "LLenado - Ahora tengo " + this.plantas + " plantas\n";
    return ret;
}
```