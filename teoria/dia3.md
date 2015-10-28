# Día 3

### Trabajando con APIs

*CRUD*

- Create:
  - Method (POST):
    - Respuesta 200 - OK
    - Respuesta 204 - Sin contenido
    - Respuesta 404 - No encontrado
    - Respuesta 409 - Conflicto, ya existe
- Read:
  - Method (GET):
    - Respuesta 200 - OK
    - Respuesta 404 - No encontrado
- Update:
  - Method (PUT):
    - Respuesta 200 - OK
    - Respuesta 204 - Sin contenido
    - Respuesta 404 - No encontrado
- Delete:
  - Method (DELETE):
    - Respuesta 200 - OK
    - Respuesta 404 - No encontrado


![HTTP Protocolo](http://fundamentos-redes.wikispaces.com/file/view/3.3.2_Servicio_WWW_y_HTTP.jpg/255291246/960x432/3.3.2_Servicio_WWW_y_HTTP.jpg)

- Por tipología:
  - 1xx Informativas
  - 2xx Peticiones Correctas
  - 3xx Redirecciones
  - 4xx Errores Cliente
  - 5xx Errores Servidor


- [Lista de respuestas HTTP](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)
- [Especificación](https://tools.ietf.org/html/rfc2616#section-10)


### AJAX

![Ajax comparación](http://gemsres.com/story/feb07/338111/fig1.jpg)

*Con Jquery*

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
	         }
	     })
	     .fail(function( jqXHR, textStatus, errorThrown ) {
	         if ( console && console.log ) {
	             console.log( "La solicitud a fallado: " +  textStatus);
	         }
	    });
	
	}
	
	peticionJqueryAjax ("<---URL---->");
```

*Vainilla JS*

```javascript
    function peticionAjax (url) {
	  var xmlHttp = new XMLHttpRequest();
	
	            xmlHttp.onreadystatechange = function () {
	
	                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
	                    console.info(JSON.parse(xmlHttp.responseText));
	                } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
	                    console.error("ERROR! 404");
	                    console.info(JSON.parse(xmlHttp.responseText));
	                }
	            };
	
	            xmlHttp.open( "GET", url, true );
	            xmlHttp.send();
	}
	
	peticionAjax("<---URL---->");
```

**Ejercicios**

1 - Sacar en el html la respuesta de OMDB para la pelicula Hackers

```javascript
  // Tu solución
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


### Nodejs


- Versiones:
  - Pares -> Estables
  - Impares -> inestables

- Comprobar version:
  - Node
```
    node -v
```

  - Npm
```
    npm -v
```


**NPM**

- Instalar paquetes:
  - global:
```
    npm install -g <paquete>
```  

  - local:
```
    npm install <paquete>
```    


- Instalando versiones especificas:

  - la más reciente:
```  
    npm install <paquete>@latest
```  
  
  - versión especifica:
```  
    npm install <paquete>@1.x (1.xx.xx)
```
  
  - Otra versión especifica
```
    npm install <paquete>@2.10.x (2.10.x)
```

- Paquetes desactualziados:
```
  npm outdated
```
  
- Actualizando paquetes:
```
  npm update <paquete>
```

Desinstalando paquete:
```
  npm uninstall <paquete>
```


**package.json**

- Datos proyecto
- Tareas
- Dependencias (dependencies y devDependencies)

- Dependency Hell:
  - [Nodei.co](https://nodei.co/)
  - [Dependency Hell](http://www.wikiwand.com/en/Dependency_hell)
  - [David Dm](https://david-dm.org/)
    - [Ejemplo Twitter-sentiments](https://david-dm.org/UlisesGascon/twitter-sentiments#info=dependencies&view=list)
    - [Ejemplo Grunt](https://david-dm.org/gruntjs/grunt#info=dependencies&view=table)
    - [Ejemplo Express](https://david-dm.org/strongloop/express)
    - [Ejemplo Bower](https://david-dm.org/bower/bower#info=dependencies&view=table)

Seguridad:
  - [Seguridad](https://nodesecurity.io/resources)
  - [Seguridad Avisos](https://nodesecurity.io/advisories)


- Creación:
```
  npm init
```
  
  
Guardar nuevas dependencias:
```
 npm install <paquete> —save
```
Guardar nuevas dependencias (solo para entorno desarrollo):
```
 npm install <paquete> —save -dev
```
  
- [Running Express.js in Production Mode](http://www.hacksparrow.com/running-express-js-in-production-mode.html)
- [How to set NODE_ENV to production/development](http://stackoverflow.com/questions/9198310/how-to-set-node-env-to-production-development-in-os-x)


Guardando versiones especificas:
  - (1.xx.xx):
```
  npm install —save <paquete>@1.x
```
  
  - (2.10.x)
```
  npm install —save <paquete>@2.10.x
```
  
  - Latest
```
  npm install —save <paquete>@lastest
```
  
Quitando dependencias:
```
  npm uninstall <paquete> —save
```
  
Instalamos las dependencias en el proyecto:
  - todo:
```
  npm install (todo)
```
  
  - Solo production:
```
  npm install —production (solo producción)
```
  
  - Solo development:
```
  npm install —dev
```


**npm scripts (comandos de CLI):**

- Añadiendo comandos:

```javascript
  // ...
  "scripts": {
      "test": "npm -v",
      "start": "node -v",
      "hola": "echo 'Hola mundo!'"
  }
  // ...
```

- Ejecutando comandos:
  - test
```
    npm test
```

  - start
```
    npm start
```

  - hola
```
    npm run hola
```  

- [How to use npm as a build tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
- [Bulding a simple command line tool with npm](http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm)


**NVM  (manejando varias versiones de Node):**

- Comrpobando la version de NVM:
```
    nvm --version
```

- Instalando una version:
```
    nvm install 0.12
```

- Desinstalando una version:
```
    nvm uninstall 0.12
```

- Usar una version (globalmente):
```
  nvm use 0.12
```
  
- Usando versiones (por proyecto):
```
    echo 0.12 > .nvmrc
```
  
```
    nvm use
```

**Hello World**

- hello world:
```javascript
  console.log("Hola Mundo!");
```

- Hello World futuro:
```javascript
  setInterval(function() {
  console.log("Hola Futuro...!");
  }, 1000);
```

**HTTP**

- Hello World con HTTP:
```javascript
  var http = require('http');
  
  var puerto = 3000;
  var direccion = "127.0.0.1";
  var mensaje = 'Hola a todos, ahora usando HTTP\n';
  
  
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(mensaje);
  }).listen(puerto, direccion);
  console.log('Server running at http://'+direccion+':'+puerto+'/');
```

- Hello World desde c9.io:
```javascript
  var http = require('http');
  
  var mensaje = 'Hola a todos, ahora usando HTTP con C9.io\n';
  
  http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(mensaje);
  }).listen(process.env.PORT, process.env.IP);
  
  console.log('Server running at http://'+process.env.IP+':'+process.env.PORT+'/');
```

- Rediccionamiento:
```javascript
  var http = require('http');
  
  http.createServer(function (req, res) {
    res.writeHead(301, {
      'Location': 'http://www.google.es/'
    });
      res.end();
  }).listen(process.env.PORT, process.env.IP);
  
  console.log('Servidor fuencionando en http://'+process.env.IP+':'+process.env.PORT+'/');
```

- Leyendo urls:
```javascript
  var url = require('url');
  
  var demoURL = "http://localhost:3000/ruta?parametro=dato#detalle";
  
  console.log("El host: "+url.parse(demoURL).hostname);
  console.log("El puerto: "+url.parse(demoURL).port);
  console.log("La ruta: "+url.parse(demoURL).pathname);
  console.log("La parametro: "+url.parse(demoURL).query);
  console.log("El hash(#): "+url.parse(demoURL).hash);
```

- Trabajando con rutas:
```javascript
  var http = require('http'),
      url = require('url');

  http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
  
    if (pathname === '/') {
        res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.end('Index!');
      
    } else if (pathname === '/otro') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('sencillamente otra página');
      
  
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
```


**Ejercicio**

1 - Manejar nuestro sistema acuapónico o nuestro cajero a traves de peticiones HTTP de una manera rudimentaria.

```javascript
    // Tu solución
```

**Leer/Escribir Ficheros**

- Leer un archivo:
```javascript
  var fs = require('fs');
  fs.readFile('archivo.txt', 'utf8', function (err, data) {
      if (!err) {
        console.log(data);
      } else {
        throw err;
      }
  });
```

- Escribir un archivo:
```javascript
  var fs = require('fs'),
      data = "y esto... se guardará en el archivo.txt";
  fs.writeFile('archivo.txt', data, function (err) {
    if (!err) {
      console.log('Datos guardados en el archivo.txt');
    } else {
      throw err;
    }
  });
```



**Eventos**

- Ejemplo sencillo:
```javascript
  var eventos = require('events');
  
  var EmisorEventos = eventos.EventEmitter; 
  var ee = new EmisorEventos(); 
  ee.on('datos', function(fecha){ 
     console.log(fecha); 
  }); 
  setInterval(function(){ 
     ee.emit('datos', Date.now()); 
  }, 500);
```

- [Eventos en DesarrolloWeb](http://www.desarrolloweb.com/articulos/eventos-nodejs.html)
- [Tutorial Eventos HackSparrow](http://www.hacksparrow.com/node-js-eventemitter-tutorial.html)


**Ping**

- Ping (petición http):
  ```javascript
  var http = require('http');
  
  var url = "google.es";
  
  http.get({ host: url }, function(res) {
  
      http.createServer(function (req, res) {
         
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end("La respuesta de " +url+" es "+res.statusCode );
          console.log("La respuesta de " +url+" es "+res.statusCode );
  
      }).listen(process.env.PORT, process.env.IP);
      
      console.log('Servidor disponible en http://'+process.env.IP+':'+process.env.PORT+'/');
  
  
  }).on('error', function(e) {
      
      http.createServer(function (req, res) {
         
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end("La respuesta de " +url+" genera un error - " + e.message  );
  
      }).listen(process.env.PORT, process.env.IP);
      
      console.log('Servidor disponible en http://'+process.env.IP+':'+process.env.PORT+'/');
      console.log("Tenemos un error!! - " + e.message);
  });
  ```
- Ping recurrente (consola):
  ```
  var http = require('http');
  var url = "google.es";
  var tiempo = 3500;
  
  setInterval(function() {
      http.get({ host: url }, function(res) {
          if (res.statusCode === 200 ) {  
              console.log("Sin errores en " +url);
          } else {
              console.log("Respuesta Http "+res.statusCode+" en " +url);
          }    
      }).on('error', function(e) {
              console.log("Con errores -> La respuesta de "+url+" es "+e.message  );
      });
  }, tiempo);
  ```
  
**Asincronía**:

> El modelo de programación de Node.js es monohilo, asíncrono y dirigido por eventos. 
1. No puede haber código bloqueante o todo el servidor quedará bloqueado y esto incluye no responder a nuevas peticiones entrantes.
2. La asincronicidad implica que no sabemos cuándo ni en que orden se va a ejecutar el código, generalmente esto no es importante pero en ocasiones sí lo es y habrá que tenerlo en cuenta.
3. En caso de error inesperado debemos capturarlo y controlar el posible estado en que haya podido quedar la ejecución del código.
> Nicolas Nombela en [nnombela](http://nnombela.com/blog/2012/03/21/asincronicidad-en-node-dot-js/)

- Sincrónico - código bloqueante:

  ```
    var http = require("http");
    var util = require("util");
    
    function writeResponse(response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
        util.log("OnRequest ended");
    }
    
    function sleepSynch(seconds, response) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + 1000 * seconds) {
        }
        writeResponse(response);
    }
    
    http.createServer(function(request, response) {
        util.log("OnRequest started");
        sleepSynch(10, response);   
    }).listen(process.env.PORT);
    
    console.log("Listening on port"+process.env.PORT);
  ```

- Asincronico - timeOut()

  ```
    var http = require("http");
    var util = require("util");
    
    function writeResponse(response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
        util.log("OnRequest ended");
    }
    
    function sleepAsynch(seconds, response) {
        setTimeout(function() {
            writeResponse(response);
        }, 1000 * seconds);
    }
    
    http.createServer(function(request, response) {
        util.log("OnRequest started");
        sleepAsynch(10, response);   
    }).listen(process.env.PORT);
    
    console.log("Listening on port"+process.env.PORT);
  ```

- [Asincronicidad con nodejs](http://nnombela.com/blog/2012/03/21/asincronicidad-en-node-dot-js/)


**Process & Child Process**

- process.argv:
  ```
  console.log(process.argv)
  /*
  1. ubicacion de node (bin)
  2. ubicación del script (location)
  3. [Otros parametros]
  */
  
  ```


- console.log("Hola"):
```
  var mensaje = "Hola"
  process.stdout.write(mensaje + '\n')
```

- Mantener Node funcionando:

  -  Se cierra:
  ```
  setTimeout(function (){
    process.stdout.write("Cerrando Node...")
  }, 1000)
  ```

  - Se mantiene:
  ```
  setInterval(function (){
    // Nada pasa... pero sigo funcionando
  }, 1000)
  ```
  
  - Programando una salida:
   ```
  var contador = 0
  setInterval(function (){
    contador++
    if(contador > 10){
      process.exit()
    } else {
    process.stdout.write("Sigo. Valor contador -> "+contador +"\n")
    }
  }, 1000);
  ``` 

- Romper con el proceso único (recomendado para procesos inestables o con mucha carga):
```
  var exec = require('child_process').exec

  // cat solo funciona en UNIX
  exec('cat texto.txt', function (err, stdout, stderr) {
    if(!err){  
        console.log('El contenido de nuestro archivo', stdout)
    } else {
        console.log('Error: '+err)
    }
  })
```

- Manejando hijos:
```
  var spawn = require('child_process').spawn

  if(process.argv[2] === 'hijo'){
    console.log('Estoy dentro del proceso hijo');
  } else {
    var hijo = spawn(process.execPath, [__filename, 'hijo'])
    hijo.stdout.pipe(process.stdout)
  }

```

- Manejando hijos (con heréncia):
```
  var spawn = require('child_process').spawn

  if(process.argv[2] === 'hijo'){
    console.log('Estoy dentro del proceso hijo');
  } else {
    var hijo = spawn(process.execPath, [__filename, 'hijo'], {
      stdio: 'inherit'
    })
  }

```

- Manejando hijos (contexto común):
```
  var spawn = require('child_process').spawn

  var contador = 0
  contador += 1

  if(process.argv[2] === 'hijo'){
    console.log('hijo', contador);
  } else {
    var hijo = spawn(process.execPath, [__filename, 'hijo'], {
      stdio: 'inherit'
    })
    console.log('padre', contador)
  }

```

**Require**

- Exportar los datos:
```javascript
var config = {
	token: "<--- MiSecreto--->",
};

module.exports = config;
```

- Importar los datos:
```javascript
config = require('./config');

console.log(config.token);
```