# Día 4

**Dudas**
- Memoria Cache para Git (introducir antes de poner las credenciales para activar):
  ```
  git config --global credential.helper "cache --timeout=999999999999"
  ```

- [Más sobre credential cache](https://git-scm.com/docs/git-credential-cache)
- [Aprendiendo git de a un commit por vez](http://es.gitready.com/)
- [Obteniendo ramas remotas](http://es.gitready.com/intermediate/2009/01/09/checkout-remote-tracked-branch.html)
- [Como sincronizar un repositorio fork con su fuente en Git](http://7sabores.com/blog/sincronizar-un-repositorio-fork-su-fuente-git)

**Dudas con humor**

![Frameworks](http://www.commitstrip.com/wp-content/uploads/2015/09/Strip-Prendre-le-train-en-marche-650-finalenglish1.jpg)

### Jade

![Jade_logo](https://camo.githubusercontent.com/ed7e053f9f077321cd37b03f3c84d5f0197c4e6a/687474703a2f2f676172746864622e636f6d2f696d672f6a6164655f6272616e64696e672f6a6164652d30312e737667)

- Entendiendo la mécanica:
  - index.jade:
  ```
  doctype html
  html(lang="en")
    head
      title= pageTitle
      script(type='text/javascript').
        if (foo) {
           bar(1 + 5)
        }
    body
      h1 Jade - node template engine
      #container.col
        if youAreUsingJade
          p You are amazing
        else
          p Get on it!
        p.
          Jade is a terse and simple
          templating language with a
          strong focus on performance
          and powerful features.
  ```
  
  - index.html:
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Jade</title>
      <script type="text/javascript">
        if (foo) {
           bar(1 + 5)
        }
      </script>
    </head>
    <body>
      <h1>Jade - node template engine</h1>
      <div id="container" class="col">
        <p>You are amazing</p>
        <p>
          Jade is a terse and simple
          templating language with a
          strong focus on performance
          and powerful features.
        </p>
      </div>
    </body>
  </html>
  ```
  
- Bootstrap:
  - index.jade:
  ```
  doctype html
  html
    head
      title title
      include ./includes/styles.jade
    body
      .row
        .container
          .jumbotron
            h1 Hola, desde Bootstrap!
            p ¿Qué te parece?
            p
              a.btn.btn-primary.btn-lg(href='http://getbootstrap.com/', role='button') Aprende más!
      include ./includes/scripts.jade
  
  //- includes/styles.jade
  // Bootstrap
  link(rel='stylesheet', href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css')
  
  //- includes/scripts.jade
  // Jquery
  script(src='//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js')
  // Bootstrap
  script(src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js')
  
  ```
  - index.html
  ```
  <!DOCTYPE html>
  <html>
      <head>
          <title>title</title>
          <!-- Bootstrap-->
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
          </head>
          <body>
              <div class="row">
                  <div class="container">
                      <div class="jumbotron">
                          <h1>Hello, desde Bootstrap!</h1>
                          <p>¿Qué te parece?</p>
                          <p>
                              <a href="http://getbootstrap.com/" role="button" class="btn btn-primary btn-lg">Aprende más!</a>
                          </p>
                      </div>
                  </div>
              </div>
              <!-- Jquery-->
              <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
              <!-- Bootstrap-->
              <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
          </body>
      </html>
  ```

- [Comparativa de Motores de plantillas](https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/)
- [Jade en Github](https://github.com/jadejs/jade)
- [Jade en CLI](http://jade-lang.com/command-line/)
- [Jade API](http://jade-lang.com/api/)
- [Jade Language Ref](http://jade-lang.com/reference/)



### Express

![Express_logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)

- Middelware
![Mw_schema](http://image.slidesharecdn.com/introtonode-140914093424-phpapp01/95/intro-to-nodejs-14-638.jpg?cb=1410687757)

**Utilidades**

- Recuperar cabeceras:
  ```
  curl -I 127.0.0.1:3000
  ```

- [PostMan](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
  
- [Html2Jade](http://html2jade.org/)
  
**Influencias / usos**

- Otros frameworks similares:
  - Zend (PHP)
  - Django (Python)
  - Sinatra (Ruby)

- Uso:
  - API JSON
  - Single Pages
  - App tiempo real


**Instalación**

- Instalación Global:
  ```
  npm install -g express
  ```

- Instalación versiones anteriores:
  ```
  npm install -g express@3.x
  ```

- Generar una estructura:
  ```
  express <nombre_proyecto>
  ```

- Instalamos las dependencias
  ```
  cd <nombre_proyecto> && npm install
  ```

- Estructura de un Proyecto (MVC):
  - app.js -> Iniciar la aplicación
  - /node_modules -> dependencias
  - package.json -> información de la aplicación
  - /public -> imagenes, js y css (Sin lógica de la aplicación)
  - /routes -> lógica
  - /views -> vista (jade)



**Manejando Express**

- GET Básico
  ```
  app.get('/hola', function(req, res){
      res.send('hemos abierto una nueva ruta!');
  });
  ```

- POST Básico
  - app.js 
  ```
  app.post('/', function(req, res){
    res.send(req.body);
  });
  ```

  - index.jade 
  ```
  section.container
  h1 Manda tu mensaje!

  form(method='post', action='/')
    fieldset
      legend Mandame tu mensaje:
      p.contenido
        label Tu mensaje
        input(name='mensaje')
      p.acciones
        input(type='submit', value='Enviar')
  ```

  - respuesta 
  ```javascript
  {
    "mensaje": "Hola Cracks!"
  }
  ```


- Parámetros en las rutas
  - app.js 
  ```javascript
  app.get('/hola/:usuario', function(req, res){
      res.send('Hola '+req.params.usuario+'. Hemos abierto una nueva ruta personalizada!');
  });
  ```

- Simulando una respuesta de una base de datos en las rutas:

  - app.js 
  ```javascript
  app.get('/consulta/:usuario', function(req, res){
      var datos = {
          marca: "Seat",
          modelo: "Ibiza",
          edad: 20,
          ITVPasada: true,
          seguroPasado: true
      };
      
      res.render('consulta.jade', {usuario: req.params.usuario, datos: datos});
  });
  ```

  - consulta.jade 
  ```
.datos
  h3 Datos: 
  p= "El Coche de "+usuario+" es un "+datos.marca+" "+datos.modelo
    
  h3 Detalles técnicos:
  ul
      li= "ITV en regla: " +datos.ITVPasada 
      li= "seguro en regla: " +datos.seguroPasado
  ```

- Dibujando las vistas (Necesario para JSON, HTML y XML):

```javascript
  exports.index = function(req, res){
    res.render('index', { variable: 'dato' }); // views/index.jade
  };
  
  // Evitando la renderización
  exports.index = function(req, res){
    res.render('index', { layout: false}); // Sin renderizar!
  };
```


### Grunt

![Grunt_logo](http://www.chloechen.io/wp-content/uploads/2014/11/logo.png)

- Instalar Grunt Globalmente:
  ```
    $ npm install -g grunt 
    $ npm install -g grunt-cli
  ```
  
  ```
  ulisesgascon:~/workspace $ npm install -g grunt
  grunt@0.4.5 /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/grunt
  ├── eventemitter2@0.4.14
  ├── which@1.0.9
  ├── dateformat@1.0.2-1.2.3
  ├── async@0.1.22
  ├── colors@0.6.2
  ├── getobject@0.1.0
  ├── lodash@0.9.2
  ├── rimraf@2.2.8
  ├── hooker@0.2.3
  ├── grunt-legacy-util@0.2.0
  ├── exit@0.1.2
  ├── coffee-script@1.3.3
  ├── iconv-lite@0.2.11
  ├── underscore.string@2.2.1
  ├── minimatch@0.2.14 (sigmund@1.0.1, lru-cache@2.7.0)
  ├── nopt@1.0.10 (abbrev@1.0.7)
  ├── glob@3.1.21 (inherits@1.0.2, graceful-fs@1.2.3)
  ├── grunt-legacy-log@0.1.2 (grunt-legacy-log-utils@0.1.1, lodash@2.4.2, underscore.string@2.3.3)
  ├── findup-sync@0.1.3 (lodash@2.4.2, glob@3.2.11)
  └── js-yaml@2.0.5 (esprima@1.0.4, argparse@0.1.16)
  ulisesgascon:~/workspace $ npm install -g grunt-cli
  /home/ubuntu/.nvm/versions/node/v4.1.1/bin/grunt -> /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/grunt-cli/bin/grunt
  grunt-cli@0.1.13 /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/grunt-cli
  ├── nopt@1.0.10 (abbrev@1.0.7)
  ├── resolve@0.3.1
  └── findup-sync@0.1.3 (lodash@2.4.2, glob@3.2.11)
  ```

- Nuestro archivo para gestionar Grunt:
  - Grunfile.js
  ```javascript
  module.exports =  function (grunt) {
      
  };
  ```

- Instalamos dependencias:
  ```
  $ npm install grunt-contrib-uglify --save
  ```

- Añadimos la configuración inicial:
  ```javascript
  module.exports = function(grunt) {
  
    // Configuracion del Proyecto
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      // .min
      uglify: {
        options: {
          // Cabecera en los archivos usando _underscore  
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
          // Entrada y salida
        build: {
          src: 'dev/*.js',
          dest: 'public/js/<%= pkg.name %>.min.js'
        }
      },
      watch: {
          files: ['dev/*.js'],
          tasks: ['uglify']
      }
    });
    
    // Dependencias
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Tareas por defecto
    grunt.registerTask('default', ['uglify']);
  };
  ```


### Bower

![Bower Logo](http://image.slidesharecdn.com/bower-phxjs-140515152011-phpapp02/95/bower-phoenix-javascript-meetup-1-638.jpg?cb=1400167728)

> Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.

- [Bower](http://bower.io/)
- [Tendencias Bower](http://bower.io/stats/)
- [Buscador Bower](http://bower.io/search/)


**Bower**
Instalamos Bower globalmente

```
  sudo npm install -g bower
```

Arrancamos bower.json
```
  bower init
```

```javascript
  {
    "name": "pruebas_bower",
    "homepage": "https://github.com/UlisesGascon/Curso-in-company-NexTReT",
    "authors": [
      "ulisesgascon"
    ],
    "description": "",
    "main": "",
    "moduleType": [],
    "license": "MIT",
    "private": true,
    "ignore": [
      "**/.*",
      "node_modules",
      "bower_components",
      "test",
      "tests"
    ]
  }
```

Buscamos paquetes
```
  bower search <paquete>
  bower search jquery
```

Instalando Paquetes
```
  bower install <paquete>
  bower install jquery
```

Instalando versiones especificas del paquete
```
  bower install <package>#<version>
```

Instalando Paquetes y guardandolos en bower.json
```
  bower install <paquete> -save
  bower install bootstrap -save
```

```
  ulisesgascon:~/workspace/profe/pruebas_bower (master) $ bower install bootstrap -save
  bower jquery#~2.1.4             cached git://github.com/jquery/jquery.git#2.1.4
  bower jquery#~2.1.4           validate 2.1.4 against git://github.com/jquery/jquery.git#~2.1.4
  bower bootstrap#*           not-cached git://github.com/twbs/bootstrap.git#*
  bower bootstrap#*              resolve git://github.com/twbs/bootstrap.git#*
  bower bootstrap#*             download https://github.com/twbs/bootstrap/archive/v3.3.5.tar.gz
  bower bootstrap#*              extract archive.tar.gz
  bower bootstrap#*             resolved git://github.com/twbs/bootstrap.git#3.3.5
  bower jquery#~2.1.4            install jquery#2.1.4
  bower bootstrap#~3.3.5         install bootstrap#3.3.5
```

```javascript
  // bower.json
  {
    "name": "pruebas_bower",
    "homepage": "https://github.com/UlisesGascon/Curso-in-company-NexTReT",
    "authors": [
      "ulisesgascon"
    ],
    "description": "",
    "main": "",
    "moduleType": [],
    "license": "MIT",
    "private": true,
    "ignore": [
      "**/.*",
      "node_modules",
      "bower_components",
      "test",
      "tests"
    ],
    "dependencies": {
      "jquery": "~2.1.4",
      "bootstrap": "~3.3.5"
    }
  }
```

Borrando paquetes 
```
  bower uninstall <paquete>
  bower uninstall jquery
```

Borrando paquetes  y guardandolos en bower.json
```
  bower uninstall <paquete>
  bower uninstall jquery
```

Verificando los paquetes instalados y sus dependencias
```
  bower list
```

```
  ulisesgascon:~/workspace/profe/pruebas_bower (master) $ bower list
  bower check-new     Checking for new versions of the project dependencies...
  pruebas_bower /home/ubuntu/workspace/profe/pruebas_bower
  ├─┬ bootstrap#3.3.5 (latest is 4.0.0-alpha)
  │ └── jquery#2.1.4 (3.0.0-alpha1+compat available)
  └── jquery#2.1.4 (latest is 3.0.0-alpha1+compat)
```

Actualizando todo
```
  bower update
```

Actualizando un paquete específico
```
  bower update <package>
```

Usando Bower
```
  bower list -paths
```

```
  ulisesgascon:~/workspace/profe/pruebas_bower (master) $ bower list -paths
  
    bootstrap: [
      'public/vendor/bootstrap/less/bootstrap.less',
      'public/vendor/bootstrap/dist/js/bootstrap.js'
    ],
    jquery: 'public/vendor/jquery/dist/jquery.js'
```

```html
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
      <title>Bootstrap 101 Template</title>
  
      <!-- Bootstrap -->
      <link href="public/vendor/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
  
    </head>
    <body>
      <h1>Hello, world!</h1>
  
      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
      <script src="public/vendor/jquery/dist/jquery.js"></script>
      <!-- Include all compiled plugins (below), or include individual files as needed -->
      <script src="public/vendor/bootstrap/dist/js/bootstrap.js"></script>
    </body>
  </html>
```

**Bower (Entendiendo el funcionamiento)**

bower.json. ¿Qué necesitamos?
```javascript
  {
      "name": "Mi Aplicación",
      "version": "1.0.0",
      "dependencies": {
          "modernizr": "*",
          "jquery": "~2.0.2",
          "bootstrap": "*",
          "requirejs": "*"
      }
  }
```

.bowerrc ¿Donde lo necesitamos?
```javascript
  {
      "directory": "public/vendor",
      "json": "bower.json"
  }
```

Instalamos todo lo anterior
```
  bower install
```


**Bower (Trucos)**

- Se puede instalar componentes aislados primero y luego hacer *bower init* para generar el *bower.json* con todo incluido.
- Ignoramos la carpeta *bower_components* con *.gitignore*. Recuerda que haciendo *bower.init* se instala todo de nuevo.
- Instalación de paquetes más alla de los definidos en search:

- Paquetes registrados:
```
  $ bower install jquery
```

- Acesso directo -> GitHub:
```
  $ bower install desandro/masonry
```

- .git:
```
  $ bower install git://github.com/user/package.git
```

- URLs:
```
  $ bower install http://example.com/script.js
```


### Yeoman
![Yeoman Logo](https://raw.githubusercontent.com/yeoman/media/master/optimized/yeoman-masthead.png)
> The Yeoman workflow comprises three types of tools for improving your productivity and satisfaction when building a web app: the scaffolding tool (yo), the build tool (Grunt, Gulp, etc) and the package manager (like Bower and npm).

- [Yeoman Instalation Working Flow](https://www.youtube.com/watch?v=zBt2g9ekiug)
- [Yeoman - Generator-webapp](https://github.com/yeoman/generator-webapp)
- [Yeoman - Santa Barbara JavaScript Meetup](http://www.slideshare.net/tim_doherty/yeoman-santa-barbara-bjava-scriptmeetup)
- [Automating Your Front-end Workflow with Yeoman 1.0 (Addy Osmani)](https://www.youtube.com/watch?v=1OAfGm_cI6Y)


**Yeoman**
Instalamos Yeoman global (incluye Grunt, Bower...)
```
  npm install yo -g
```

Instalamos globalmente el generador de proyectos web
```
  npm install generator-webapp -g
```

En la carpeta deseada lanzamos el generador para que se cree un pryecto completo
```
  yo webapp
```

Acabada la instalación con exito 
```
  grunt serve
```

Preparando todo para producción
```
  grunt 
```

**Yeoman (gestión de errores de instalación)**

Verificamos que es lo que no funciona.
```
  yo doctor
```

Entramos como root
```
  sudo su
```

Forzamos la instalación de un paquete global especificando la versión.
```
  sudo npm install -force -g <paquete>@version 
```

Instalación Manual de dependencias
```
  npm install && bower install
```

- [Yeoman in c9.io](https://c9.io/blog/how-to-use-yeoman-on-cloud9/)



### Require.js & AMD

![Require & AMD logo](http://d348unuw4205d6.cloudfront.net/wp-content/uploads/2014/06/amd_and_require.jpg)

- *Asincronia*
![Asincronia](http://www.codeproject.com/KB/scripting/625262/AMD.png)

- *Dependencias y modularidad*
![Modularidad](http://1.bp.blogspot.com/-RWKQH6r6AQ8/Uutpgj0letI/AAAAAAAAAnk/Rd7hmZ-0-Rg/s1600/fig01.png)


**Entendiendo la utilidad de Require.js**
- Código convencional (Código espagueti):
  - [Código espagueti](https://www.wikiwand.com/es/C%C3%B3digo_espagueti)
  - index.html:
  ```html
    <!doctype html>
    
    <html lang="en">
    <head>
      <meta charset="utf-8">
    
      <title>Testing Requirejs</title>
    
    
    </head>
    
    <body>
      <script src="calculadora.js"></script>
    </body>
    </html>
  ```

  - calculadora.js
  ```javascript
  function sumar (x, y) {
      return x+y
  };
  
  function restar (x, y) {
      return x-y
  };
  
  function multiplicar (x, y) {
      return x*y
  };
  
  
  function dividir (x, y) {
      return x/y
  };
  ```

- Código convencional (Creando un objeto):

  - calculadora.js
  ```javascript
  var calculadora = {};

  calculadora.sumar = function (x,y) {
      return x + y
  };
  calculadora.restar = function (x, y) {
      return x - y
  }
  calculadora.multiplicar = function (x, y) {
      return x * y
  }
  calculadora.divir = function (x, y) {
      return x / y
  }
  ```
  
  
- Código convencional (Mejorando la escalabilidad "dividiendo el objeto"):
  - index.html:
  ```html
  <script src="sumar.js"></script>
  <script src="restar.js"></script>
  <script src="divir.js"></script>
  <script src="multiplicar.js"></script>
  ```
  
  - /sumar.js
  ```javascript
  var calculadora = calculadora || {};
  calculadora.sumar = function (x,y) {
      return x + y
  };
  ```
  
  - /restar.js
  ```javascript
  var calculadora = calculadora || {};
  calculadora.restar = function (x, y) {
      return x - y
  }
  ``` 

  - /dividir.js
  ```javascript
  var calculadora = calculadora || {};
  calculadora.divir = function (x, y) {
      return x / y
  }
  ```


  - /multiplicar.js
  ```javascript
  var calculadora = calculadora || {};
  calculadora.multiplicar = function (x, y) {
      return x * y
  }
  ```


**Usando Require.js**
- AMD:
  - [Asynchronous module definition](https://www.wikiwand.com/es/Asynchronous_module_definition)
  
  - index.html:
  ```html
  <script data-main="calculadora" src="require.js"></script>
  ```
  - /calculadora.js
  ```javascript
  require(['calculadora/sumar', 'calculadora/restar', 'calculadora/cuadrado'], function (sum, res, cua) {
	console.info(sum(1,2)); // 1 + 2
	console.info(res(3,1)); // 3 - 1 
	console.log(cua(2)); // 2 * 2
  });
  ```

  - calculadora/sumar.js
  ```javascript
  define(function () {
  	return function (x, y) {
  		return x + y;
  	};
  });
  ```

  - calculadora/restar.js
  ```javascript
  define(function () {
  	return function (x, y) {
  		return x - y;
  	};
  });
  ```

  - calculadora/multiplicar.js
  ```javascript
  define(function () {
  	return function (x, y) {
  		return x * y;
  	};
  });
  ```

  - calculadora/cuadrado.js
  ```javascript
  define(['calculadora/multiplicar'], function (multiplicar) {
  	return function (x) {
  		return multiplicar(x, x);
  	};
  });
  ```


**Require.js - Modo Avanzado**

- Require.js con dependencias externas:
  - vendor/jquery.min.js (en local)

  - script.js
  ```javascript
  require(['vendor/jquery'], function($){
      $('#hola').html("<h1>HOLA! Hola!</h1>");
  });
  ```


- Require.js varios modulos en el mismo archivo:
  - script.js
  ```javascript
  require(['hola', 'adios'], function(hola, adios){
      $('#hola').html("<h1>"+hola+" y "+adios+"!</h1>");
  });
  ```

  - hola.js
  ```javascript
  define(function() {
      return "Hola";
  });
  
  define('adios', function() {
      return "adios";
  });
  ```

- Require.js configurando baseUrl:

  - Estructura del proyecto: 
  ```  
    www/
        /assets/
        /css/
        /js/
            /App/
                main.js
        /vendor/
            bootstrap.js
            jquery.js
  ```

  - config.js:
  ```javascript    
  requirejs.config({
      baseUrl: '.assets/js'
  });
  ```
  
  - *.js
  ```javascript 
  require(['vendor/jquery', 'vendor/bootstrap', 'app/main']);
  ```


- Require.js configurando Paths:

  - Estructura del proyecto: 
  ```  
    www/
        /assets/
        /css/
        /js/
            /App/
                main.js
        /vendor/
            bootstrap.js
            jquery.js
                
  ```  

  - config.js:
  ```javascript 
  requirejs.config({
      baseUrl: '.assets/js',
      paths: {
          'jquery': 'vendor/jquery',
          'bootstrap': 'vendor/bootstrap',
          'main': 'app/main'
      }
  });
  ```
  
  - *.js:
  ```javascript 
  require(['jquery', 'bootstrap', 'main']);
  ```
- [Fernetjs -> RequireJS: Módulos y Dependencias](https://fernetjs.com/2012/02/requirejs-modulos-y-dependencias/)
- [Requirejs en Github](https://github.com/jrburke/requirejs)
- [How to use Require.js with Jquery](http://requirejs.org/docs/jquery.html)
- [Require.js Optimization](http://requirejs.org/docs/optimization.html)
- [Require.js API](http://requirejs.org/docs/api.html)
- [Require.js F.A.Q Advance use](http://requirejs.org/docs/faq-advanced.html)
- [Require.js F.A.Q Optimizations](http://requirejs.org/docs/faq-optimization.html)