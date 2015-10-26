# Día 2

### Reintroducción a JS

**Funciones**

- Declaración y ejecución:
    ```javascript
	function dameTrue (){
		return true
	};

	function dameFalse () {
		return false
	};

	dameTrue();
	dameFalse();
    ```

**Ejercicios**

1 - Sumar cuadrados.

```javascript
    // Escribe tu solución
```


2 - Contar las veces que aparece una letra en un texto.

```javascript
    // Escribe tu solución
```


3 - Contar las veces que aparece una letra en un texto, preguntando al usuario.

```javascript
    // Escribe tu solución
```


**Funciones (Scope)**

- Declaración y ejecución:
    ```javascript
	var numero = 450;
	var otroNumero = 23;

	function sumaCuadrados (a, b) {
		var numero = a;
		var otroNumero = b;
		var calculo = (numero*numero) + (otroNumero*otroNumero);
		console.log("\"numero\" es \""+numero+"\", local");
		console.log("\"otroNumero\" es \""+otroNumero+"\", local");
	};

	function verificarGlobales() {
		console.log("\"numero\" es \""+numero+"\", global");
		console.log("\"otroNumero\" es \""+otroNumero+"\", global");
	};
    ```


**Funciones (Avanzadas)**

- Anónimas (expresiones):
    ```javascript
	var sumaCuadrados = function (a, b) {
		return (a*a) + (b*b);
	};
    ```

- Funciones como dato:
    ```javascript
	function saludo () {
		console.log("hola!");
	};

	function lanzar (funcion){
		funcion();
	};
    ```

- Funciones anónimas autoejecutables:
    ```javascript
	(function() {
		console.log("hola Amigo/a")

	}) (); //ex:Jquery
    ```


- Funciones anónimas con parámetros:
    ```javascript
	( function(quien){
	   console.log("hola " + quien);
	})("Amigo/a");
    ```


- Función que devuelve una función anónima:
	- Asignando una variable:
    ```javascript
	function saludo(quien){
	        return function(){
	                alert("hola " + quien);
	        }
	}
	var saluda = saludo("Amigo/a");
	saluda();
    ```

	- Sin asignar una variable:
    ```javascript
	function saludo(quien){
	        return function(){
	                alert("hola " + quien);
	        }
	}
	saludo("Amigo/a")();
    ```


**Funciones (Anidación)**

- Anidación:
    ```javascript
	function saludar(quien){
	        function alertasaludo(){
	                console.log("hola " +  quien);
	        }
	        return alertasaludo;
	}
	var saluda = saludar("Amigo/a");
	saluda();
    ```

- Anidación autoejecutable:
    ```javascript
	function saludar(quien){
	        function alertasaludo(){
	                console.log("hola " +  quien);
	        }
	        return alertasaludo;
	}
	saludar("Amigo/a")();
    ```

**Ejercicios**

1 - Saber si hoy es un día par o impar.

```javascript
    // Escribe tu solución
```


**Funciones (Closures)**

> Los closures son funciones que manejan variables independientes. En otras palabras, la función definida en el closure "recuerda" el entorno en el que se ha creado.

> No es aconsejable crear innecesariamente funciones dentro de otras funciones si no se necesitan los closures para una tarea particular ya que afectará negativamente el rendimiento del script tanto en consumo de memoria como en velocidad de procesamiento.
> [Closures MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)

- Fábrica de función:
    ```javascript
	function sumador(x) {
	  return function(y) {
	    return x + y;
	  };
	}

	var sum1 = sumador(10); //Closure
	var sum2 = sumador(30);	//Closure

	console.log(sum1(2)); // Devuelve 12
	console.log(sum2(2)); // Devuelve 32
	console.log(sumador(20)(2)); //Devuelve 22
    ```

- Otro ejemplo, ahora temporizado:
    ```javascript
	function saludar(segundos){
		var hola = "Hola, Hola!";

		setTimeout(function(){
			console.info(hola);
		},segundos*1000);
	}

	saludar(2);
    ```


**Switch**

- Estructura:
    ```javascript
    /* Switch
	switch(expresión) {
	    case n:
	        //Código
	        break;
	    case n:
	        //Código
	        break;
	    default:
	        //Código
	}
    */
    ```

- Documentación:
    - [Switch en w3schools](http://www.w3schools.com/js/js_switch.asp)
    - [Switch en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch)

- Casos únicos:
    ```javascript
	var nombre = "";
	switch (nombre) {
	  case "Pepe":
	    console.log("Hola Pepe");
	    break;
	  case "Luis":
	    console.log("Hola Luis");
	    break;
	  case "Antonio":
	    console.log("Hola Antonio");
	    break;
	  default:
	    console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```

- Multiples coincidencias:
    ```javascript
	var nombre = "";
	switch (nombre)
	{
	   case "Pepe":
	   case "Luis":
	   case "Antonio":
	       alert('Hola '+nombre);
	       break;

	   default:
	       console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```


**Ejercicios**

13 - Hagamos una lista de pasajeros (min. 6)

```javascript
    // Escribe tu solución
```


14 - Hagamos una lista de pasajeros efectiva usando Arrays

```javascript
	// Escribe tu solución
```


15 - Imprimamos cada pasajero de la lista y su número de asiento (basado en el orden del índice).
*Nota: El primer asiento del tren es el 1 y no el 0.*

```javascript
    // Escribe tu solución
```


16 - Necesitamos una función para agregar y otra para borrar pasajeros de la lista.
*Nota: Pensemos que a la larga pueden existir más listas.*

```javascript
    // Escribe tu solución
```


17 - La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, pero quiere evitar que los pasajeros cambien de asiento constantemente cuando se anula un o varios billetes.
*Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los billetes quedaban desactualizados.*

```javascript
    // Escribe tu solución
```


18 - Una de las vías principales esta en obras. Así que nuestra compañía decidió usar antiguas vías para hacer transbordos directos entre las estaciones afectadas.

Nuestra Misión es añadir el tiempo estimado en los billetes para las estaciones afectadas Tetuán,
Moncloa y Hortaleza. Es necesario incluir un texto informativo y el nombre del usuario también en el billete.

*Nota: Intenta utilizar constructores*

Info: 	
	- Tetuán (12)
   	- Moncloa (19)
   	- Hortaleza (21)

```javascript
    // Escribe tu solución
```


**Funciones (Callbacks)**

> En programación de computadoras, una devolución de llamada o retrollamada (en inglés: callback) es una función "A" que se usa como argumento de otra función "B". Cuando se llama a "B", ésta ejecuta "A". Para conseguirlo, usualmente lo que se pasa a "B" es el puntero a "A".
> [Callbacks en Wikiwand](https://www.wikiwand.com/es/Callback_(inform%C3%A1tica))

- Ejemplo condensado:
    ```javascript
	var quieroCallback = function(parametro, callback){
	    if ((callback) && (typeof callback === 'function')){
	        callback(parametro);
	    }
	    else
	        console.log(parametro, callback);
	}
	 
	quieroCallback('a', 'b');
	 
	quieroCallback('a', function(val){
	    console.log(val);
	});
    ```


- Ejemplo con Jquery:
    ```javascript
    $('#elemento').fadeIn('slow', function() {
    	// código del callback
	});
    ```


- Otro ejemplo:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	    callback();
	}

	comerSandwich('jamón', 'queso', function() {
	    console.info('Ya terminé...');
	});
    ```


- Ejemplo con Callback opcional:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	    
	    if (callback) {
	        callback();
	    }

	}

	comerSandwich('jamón', 'queso');
    ```


- Sanitizar el Callback:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	    
	    if (callback && typeof(callback) === "function") {
	        callback();
	    }

	}

	comerSandwich('jamón', 'queso');
    ```


- Asincronia:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	  
		setTimeout(alarma, 5000);
		function alarma(){
			console.log("ring! ring!.. pasaron los 5 segundos!");
		};

	  
	    if (callback && typeof(callback) === "function") {
	        callback();
	    }
	}

	comerSandwich('jamón', 'queso', function() { 
	    console.log('Ya terminé...');
	});
    ```


- Más información: 
	- [Callback Functions in JavaScript de Louis Lazaris](http://www.impressivewebs.com/callback-functions-javascript/)
	- [Creando y utilizando callbacks de Pablo Novas en fernetjs](https://fernetjs.com/2011/12/creando-y-utilizando-callbacks/)



**Ejercicios**

19 - Necesitamos saber cuantos pasajeros están utilizando cada una de estas rutas temporales, para ellos la empresa decide añadir un numero de billete para cada pasajero.  El número de billete tiene que seguir una estructura fija.

*Nota: El formato del número de billete deseado:
- (Inicial de la estación)(número de viajero) -> H1 (Hortaleza 1), T120 (Tetuan 120), M110 (Moncloa 110), etc...*

```javascript
    // Escribe tu solución
```


20 - Gracias al ejercicio anterior, hemos podido saber a groso modo cuantos pasajeros van en cada línea.

La empresa considera que con estos datos, usará trenes con menos vagones que le permitirán transportar a los pasajeros en menos tiempo.

Pero existe el riesgo de dejar pasajeros esperando mucho tiempo.

Así que haremos una nueva función que avise al revisor cuando no quede sitio en el próximo tren.

El revisor del tren debe repartir tickets restaurante a los pasajeros para que puedan tomar una consumición gratis en la cafetería de la estación, si no tienen sitio en el próximo tren.

*Nota: La linea es única y el mismo tren cubre todo el trayecto.*

```javascript
    // Escribe tu solución
```


**Objetos Literales**

- Propiedades:
    ```javascript
	var miObjeto = {
	    cadena: 'esto es una cadena',
	    numero: 2,
	    booleano: false
	};
	```


- Métodos:
    ```javascript
	var miObjeto = {
	    saludar: function(){
			console.log("hola!");
		}
	};
	```


**Ejercicios Repaso - Cajero Automático**
![cajero automatico](http://rack.1.mshcdn.com/media/ZgkyMDE0LzAyLzI2L2YwL0JpdGNvaW5fQVRNLmJjN2IxLmpwZwpwCXRodW1iCTEyMDB4NjI3IwplCWpwZw/bdee5162/0fe/Bitcoin_ATM.jpg)

1 - Definimos el objeto

```javascript
	/* Escribe tu solución usando:
	var cajeroAutomatico = {};
	*/
```

2 - Añadimos detalles básicos(clientes y propiedades)

```javascript
	/* Escribe tu solución usando:
	var clientesBD = [];
	var cajeroAutomatico = {};
	*/
```


3 - Añadimos detalles adicionales (volumen)

```javascript
    // Escribe tu solución
```


4 - Añadimos funciones para quitar y añadir clientes

```javascript
    // Escribe tu solución
```


5 - Añadimos una propiedad para contabilizar las operaciones realizadas

```javascript
    // Escribe tu solución
```


6 - Creamos una función para eliminar una propiedad si no contiene cierta cantidad de datos.
*Nota: borrandoDatosVacios (objeto, propiedad, valorMinimo)*

```javascript
    // Escribe tu solución
```


7 - Añadimos funciones de control de operaciones (contabilizar operaciones realizadas y fallidas) y funciones de administracción (agregar y quitar dinero)

```javascript
    // Escribe tu solución
```


8 - Añadimos funciones para operaciones económicas y verificación de los clientes

```javascript
    // Escribe tu solución
```


9 - Creamos un log detallado y una cuenta total

```javascript
    // Escribe tu solución
```


9 - Refactorizamos y dejamos todo preparado para incluirlo en nuestro html, usando lo que hemos aprendido.

```javascript
    // Escribe tu solución
```

10 (opcional) - Integrarlo con el html y bloquea el uso del de las funciones por consola

```javascript
	// Ejercicio Opcional
```



### JS avanzado (POO)

**POO**

- Entendiendo los objetos:
	```javascript
	/*
	[Objeto = Prototípo]{
	    [ Propiedad = Variable ]
	    [ Método = Función ]
	}
	*/
	```


- Constructor de Objetos:
	```javascript
	var coche = function (parametros) {
	    /* Codigo*/
	};
	```


- Propiedades del Objeto:
	```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad
	    this.color = color;
	    this.tipo = tipo;
	};
	```


- Data-typing:
	```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = tipo;
	    if (isNaN(this.antiguedad)) {
	        console.log("Error en el data-typing, antiguedad no es un número");
	    }
	};

	var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
	console.log("Tu coche es un "+miCoche.marca+" "+miCoche.modelo+" con "+miCoche.antiguedad+" años, clase "+miCoche.tipo+" y color "+miCoche.color);
	```


- Métodos (En el Constructor):
	```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = tipo;
	    if (isNaN(this.antiguedad)) {
	        console.log("Error en el data-typing, antiguedad no es un número");
	    }
	    this.detalles = function(){
	      console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
	    }
	};

	var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
	miCoche.detalles();
	```


- Métodos (Extensión del prototipo):
	```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = tipo;
	    if (isNaN(this.antiguedad)) {
	        console.log("Error en el data-typing, antigüedad no es un número");
	    }
	};

	coche.prototype.detalles = function(){
	  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
	}

	var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
	miCoche.detalles();
	```


- Métodos (Vinculación Externa):
	```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = tipo;
	    if (isNaN(this.antiguedad)) {
	        console.log("Error en el data-typing, antigüedad no es un número");
	    }
	    this.detalles = dameDetalles;
	};

	function dameDetalles(){
	  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
	}

	var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
	miCoche.detalles();
	```


- Herencia:
	```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = tipo;
	    if (isNaN(this.antiguedad)) {
	        console.log("Error en el data-typing, antigüedad no es un número");
	    }
	    this.detalles = dameDetalles;
	};

	var furgon = function (taraMinima, cargaUtil, volumenCarga) {
	    this.taraMinima = taraMinima;
	    this.cargaUtil = cargaUtil;
	    this.volumenCarga = volumenCarga;
	    if (isNaN(this.taraMinima) || isNaN(this.cargaUtil) || isNaN(this.volumenCarga)) {
	        console.log("Error en los datos. Por favor usar solo valores numéricos.");
	    }
	    this.detallesTecnicos = detallesTecnicos;
	};


	function dameDetalles(){
	  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
	}

	function detallesTecnicos(){
	  console.warn("Tu coche tiene una Tara mínima de "+this.taraMinima+". Carga útil de "+this.cargaUtil+" y un volumen de carga de "+this.volumenCarga+"m3");
	}

	var miPickup = new coche ("Land Rover", "Santana Aníbal", 35, "Marrón tierra", "4x4");
	miPickup.prototype = new furgon (1200, 768, 4.5);


	miPickup.detalles();
	miPickup.prototype.detallesTecnicos();
	```

- Herencia (simplificada):
	```javascript
	var perro  = function () {
	    this.patas = 4;
	    this.ojos = 2;
	};

	var pastorAleman = function () {
	    this.colorLengua = "negra";
	    this.colorOjos = "marrón";
	    this.capacidadTrabajo = true;
	    this.especialidad = "Pastoreo";
	};

	pastorAleman.prototype = new perro();

	var miPerro = new pastorAleman();
	console.log("Número patas: "+miPerro.patas+"\n Número ojos: "+miPerro.ojos+"\n Color Lengua: "+miPerro.colorLengua+"\n Color ojos: "+miPerro.colorOjos+"\n Capacidad de trabajo: "+miPerro.capacidadTrabajo+"\n Especialidad: "+miPerro.especialidad);
	```


- Eliminando restricciones en los argumentos:
	```javascript
	var cocheEmpresa = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = "" || tipo;
	    var ITVPasada = true;
	    var ITVfrecuencia = "Cada año";
	    var seguroEnRegla = true;
	    var companySeguros = "SegurExpress";
	    var tipoSeguro = "a terceros";
	    if (this.tipo == ""){
	        this.tipo = "berlina";
	    }


	    function dameDetalles(){
	      console.log("Tu coche es un "+marca+" "+modelo+" con "+antiguedad+" años, clase "+tipo+" y color "+color);
	    }

	    function datosPrivados() {
	        if (ITVPasada && seguroEnRegla)
	            console.info("INFO: Todo en Regla, tienes que pasar la ITV "+ITVfrecuencia+". Tienes un seguro "+tipoSeguro+" con "+companySeguros);
	        else{
	            console.error("ALERTA! El coche no puede usarse. El seguro o la ITV no esta en regla.");
	        }
	    }

	    datosPrivados();
	    dameDetalles();
	};

	var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
	```


- Creando un ID:
	```javascript
	var contador = 0;

	var cocheEmpresa = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = "" || tipo;
	    this.id = contador++;
	    var ITVPasada = true;
	    var ITVfrecuencia = "Cada año";
	    var seguroEnRegla = true;
	    var companySeguros = "SegurExpress";
	    var tipoSeguro = "a terceros";
	    if (this.tipo == ""){
	        this.tipo = "berlina";
	    }

	    function dameDetalles(){
	      console.log("Tu coche es un "+marca+" "+modelo+" con "+antiguedad+" años, clase "+tipo+" y color "+color);
	    }

	    function datosPrivados() {
	        if (ITVPasada && seguroEnRegla)
	            console.info("INFO: Todo en Regla, tienes que pasar la ITV "+ITVfrecuencia+". Tienes un seguro "+tipoSeguro+" con "+companySeguros);
	        else{
	            console.error("ALERTA! El coche no puede usarse. El seguro o la ITV no esta en regla.");
	        }
	    }

	    function identificador(){
	        console.warn("Recuerda! Tu coche esta identificado como coche numero "+contador);
	    }

	    datosPrivados();
	    dameDetalles();
	    identificador();
	};

	var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
	var otroCoche = new cocheEmpresa ("Audi", "A8", 5, "gris", "Berlina");
	var miCoche2 = new cocheEmpresa ("Seat", "Ibiza", 9, "rojo", "Utilitario");
	```


- Extensión de objetos nativos (usando prototipos):
	```javascript
	Array.prototype.coincidencias = function(palabra) {
	    var coincidencias = 0;
	    for (var i=0; i<this.length; i++) {
	        if (this[i] == palabra) {
	            coincidencias++;
	        }
	    }
	    console.warn("Se encontraron "+coincidencias+" coincidencia(s) de la palabra");
	};


	var amigos = ["Charlie", "Marco", "Luis", "Jose", "Miguel", "Jose", "Luis", "Oscar"];
	amigos.coincidencias("Jose");
	```



**Ejercicios**

> Vamos a crear un sistema acuapónico en nuestra oficina. Nuestro objetivo será desarrollar una aplicación para gestionarlo todo. Con este ejercicio nos centraremos en la POO y los prototipos

![Ilustración del sistema](http://www.cualtimexico.info/uploads/5/7/4/7/5747467/8636915.jpg)


1 - (Usando Constructores). Vamos a instalar un sistema acuapónico en la oficina, así que nuestra primera misión será definir nuestro equipamiento.
Contamos con un sistema compuesto de un tanque principal y una cama (recipiente para vegetales) donde plantaremos nuestros vegetales.

- Caracteristicas Tanque:
 - capacidad: 40 Litros
 - dimensiones: 51 cm x 25.5 de ancho x 30.5 de alto
 - color: Gris Claro
 - Nivel agua Máximo: 29 cm

- Caracteristicas Cama:
 - capacidad: 10 Litros
 - dimensiones: 51 cm x 25.5 de ancho x 10 de alto
 - color: Rojo
 - Nivel agua Máximo: 5 cm
 - Sustrato: Piedra volcánica

```javascript
    // Escribe tu solución
```


2 - Añadamos el agua, para lo que necesitaremos un sistema para añadir y quitar agua, además de un desagüe automático que nos avise cuando el nivel del agua sea más alto de los esperado y evacue el sobrante.

```javascript
    // Escribe tu solución
```


3 - Añadamos ahora nuestras plantas y nuestros peces
- (opcional) teniendo en cuenta sus necesidades de espacio.
- Incluir una función para quitar peces y vegetales.

```javascript
    // Escribe tu solución
```


**POO (Avanzado)**

- Usando this:
	```javascript
	var objeto = {
	    valor: 0,
	    incrementar: function(incremento){
	       this.valor += incremento;
	    }
	};

	objeto.incrementar(6);
	```


- Alternado el valor de this:
	- ERROR!:
	```javascript
	var objeto = {
	    valor: 0,
	    incrementar: function(incremento){
	       function otraFuncion(unValor){
	           this.valor += unValor;
	       }
	       otraFuncion(incremento);
	    }
	};

	objeto.incrementar(6);
	```

	- CORRECTO:
	```javascript
	var objeto = {
	    valor: 0,
	    incrementar: function(incremento){
	       var esto = this; // "esto" puede ser "that"
	       function otraFuncion(unValor){
	           esto.valor += unValor;
	       }
	       otraFuncion(incremento);
	    }
	};

	objeto.incrementar(6);
	```


- Usando this en Constructor:
	```javascript
	var fabricaPersonas = function(){
	    this.nombre = 'Pepe';
	};

	fabricaPersonas.prototype.mostrarNombre = function(){
	    console.log(this.nombre);
	};

	var miPersona = new fabricaPersonas();
	miPersona.mostrarNombre();
	```


- Usando *.apply()* para modificar el contexto del *this*:
	```javascript
	var fabricaPersonas  = function(){
	    this.nombre = 'Pepe';
	};

	fabricaPersonas.prototype.mostrarNombre = function(){
	    console.log(this.nombre);
	};

	var otroObjeto = {
	    nombre: 'Oscar'
	};

	var miPersona = new fabricaPersonas();
	miPersona.mostrarNombre();
	miPersona.mostrarNombre.apply(otroObjeto);
	```


- Modificación de contexto con *.call()*:
	```javascript
	var objeto = {
	  multiplicador: 2,
	  sumatorio: function(num1, num2){
	     return (num1 + num2) * this.multiplicador;
	  }
	};

	var resultado = objeto.sumatorio(2,2);
	console.log(resultado);


	var cambio = {
	  multiplicador: 5
	};

	var resultado = objeto.sumatorio.call(cambio, 5, 5);
	console.log(resultado);
	```


- Modificación de contexto con *.apply()*:
	```javascript
	var objeto = {
	  multiplicador: 2,
	  sumatorio: function(num1, num2){
	     return (num1 + num2) * this.multiplicador;
	  }
	};

	var resultado = objeto.sumatorio(2,2);
	console.log(resultado);


	var cambio = {
	  multiplicador: 5
	};

	var resultado = objeto.sumatorio.apply(cambio, [5,5]);
	console.log(resultado);
	```


- Modificación de contexto con *.bind()*:
	```javascript
	var objeto = {
	  multiplicador: 2,
	  sumatorio: function(num1, num2){
	     return (num1 + num2) * this.multiplicador;
	  }
	};

	var resultado = objeto.sumatorio(2,2);
	console.log(resultado);

	var cambio = {
	  multiplicador: 5
	};

	var cambiandoFuncion = objeto.sumatorio.bind(cambio);
	var resultado = cambiandoFuncion(5, 5);
	console.log(resultado);

	```


**Trabajando con prototipos**

- .hasOwnProperty():
	```javascript
	var o = new Object();
	o.prop = 'exists';

	function changeO() {
	  delete o.prop;
	}

	o.hasOwnProperty('prop');
	changeO();
	o.hasOwnProperty('prop');
	```


- .create():
	```javascript
	var coche = {
	    marca: "Seat",
	    modelo: "Panda",
	    antiguedad: 20,
	    color: "azul",
	    tipo: "turismo"
	};

	var clonCoche = Object.create(coche);

	console.log(clonCoche.marca+" "+clonCoche.modelo);
	```


- .isPrototypeOf():
	```javascript
	console.log(coche.isPrototypeOf(clonCoche));
	```


- .valueOf():
	```javascript
	var str = "Hello World!";
	var res = str.valueOf();
	console.log(res);
	```


- .constructor():
	```javascript
	function arbol (nombre) {
	   this.nombre = nombre;
	}

	var miArbol = new arbol( "Pino" );
	console.log( "miArbol.constructor es " + miArbol.constructor );
	```


- .toLocalString():
	```javascript
	var date = new Date();
	console.log(date.toLocaleString('es-ES'));
	console.log(date.toLocaleString('en-US'));
	console.log(date.toLocaleString('ko-KR'));
	```


- .toString():
	```javascript
	function Perro(nombre, criadero, color, sexo) {
	   this.nombre=nombre;
	   this.criadero=criadero;
	   this.color=color;
	   this.sexo=sexo;
	}

	var elPerro = new Perro("Gabby","Laboratorio","chocolate","femenino");

	elPerro.toString();

	Perro.prototype.toString = function perroToString() {
	  var retorno = "Perro " + this.nombre + " es " + this.sexo + " " + this.color + " " + this.criadero;
	  return retorno;
	};

	elPerro.toString();
	```


### JS avanzado (MVC)

**Teoría MVC**

![MVC](http://www.adictosaltrabajo.com/wp-content/uploads/tutorial-data/zk_mvc_mvvm/mvc-zk-framework.png)
> MVC significa Modelo Vista Controlador, porque en este patrón de diseño se separan los datos de una aplicación, la interfaz de usuario, y la lógica de negocio en tres componentes distintos. Cuando la lógica de negocio realiza un cambio, es necesario que ella sea la que actualiza la vista.
> En [MVC y MVVM](http://www.adictosaltrabajo.com/tutoriales/zk-mvc-mvvm/) por [Francisco Ferri Pérez](http://www.adictosaltrabajo.com/author/francisco-ferri/)


**Backbone**
![Backbone Logo](http://backbonejs.org/docs/images/backbone.png)
![Backbone MVC](http://addyosmani.github.io/backbone-fundamentals/img/backbone_mvc.png)


- Dependencias():
	```html
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min.js"></script>
	```


**Backbone (Model)**

- Extendemos el modelo:
	```javascript
	var Coche = Backbone.Model.extend();
	var cochecito = new Coche();
	```

- .set() Guardar valores:
	```javascript
	cochecito.set( 'marca', 'Seat' );
	```

- Aplicando .toJSON() para la lectura:
	```javascript
	console.log(cochecito)
	console.log( cochecito.toJSON() );
	```

- .get() Leer valores:
	```javascript
	console.log( 'La marca del coche es ' + cochecito.get( 'marca' ) );
	```

- Pasando pares de valor en la instanciación:
	```javascript
	var Coche = Backbone.Model.extend();
	var cochecito = new Coche({
	    'marca': 'Seat',
	    'modelo': 'Ibiza'
	});

	console.log( cochecito.toJSON() );
	console.log( 'La marca del coche es ' + cochecito.get( 'marca' ) + ' y el modelo ' + cochecito.get( 'modelo' ) + '.' );
	```

- Valores por defecto en el Modelo:
	```javascript
	var Coche = Backbone.Model.extend({
	    defaults: {
	        'marca': 'Seat',
	        'modelo': 'Ibiza'
	  }
	});

	var cocheDesconocido = new Coche();
	var miCoche = new Coche({ 'modelo': 'Toledo' });

	console.log( cocheDesconocido.toJSON() );
	console.log( miCoche.toJSON() );
	```


- Asignando funciones:
	```javascript
	var Coche = Backbone.Model.extend({
	    defaults: {
	        'marca': 'Seat',
	        'modelo': 'Ibiza',
	        'ITVPasada': true
	    },
	    actualizaModelo: function(){
	        var nuevoModelo = prompt( 'Introduce el nuevo modelo: ' );
	        this.set( {'modelo': nuevoModelo} );
	    }
	});

	var cochecito = new Coche();
	console.log( cochecito.toJSON() );

	cochecito.actualizaModelo();

	console.log( cochecito.toJSON() );
	```


- Listener:
	```javascript
	var Coche = Backbone.Model.extend({
	    defaults: {
	        'marca': 'Seat',
	        'modelo': 'Ibiza',
	        'ITVPasada': true
	    },
	    actualizaModelo: function( nuevoModelo ){
	        this.set({ 'modelo': nuevoModelo });
	    }
	});


	var cochecito = new Coche();
	console.log( cochecito.toJSON() );

	// Listener
	cochecito.on( 'change:modelo', function(){
	    console.log( 'Modelo modificado!' );
	} );

	// Actualizamos el nombre
	cochecito.actualizaModelo( 'Toledo' );
	console.log( cochecito.toJSON() );
	```


**Backbone (Colection)**

- Asociamos nuestro Modelo a una colección:
	```javascript
	var cocheModelo = Backbone.Model.extend({
	    defaults: {
	        'marca': 'Seat',
	        'modelo': 'Ibiza',
	        'ITVPasada': true
	    },
	    actualizaModelo: function( nuevoModelo ){
	        this.set({ 'modelo': nuevoModelo });
	    }
	});

	var cocheColeccion = Backbone.Collection.extend({
	    Model: cocheModelo,
	    url: "#" // CRUD
	});

	var cochecito = new cocheColeccion();

	console.log( cochecito.toJSON() );
	```


- .add() Añadir modelos a la colección:
	```javascript
	var cocheModelo = Backbone.Model.extend();

	var cocheColeccion = Backbone.Collection.extend({
	    Model: cocheModelo,
	    url: "#" // CRUD
	});

	var cochecito = new cocheColeccion();
	cochecito.add({ 'marca': 'Seat', 'modelo': 'Toledo', 'ITVPasada': false});

	console.log( cochecito.toJSON() );	
	```


- Añadir elementos durante la creación de la Colección:
	```javascript
	cocheModelo = Backbone.Model.extend();

	cocheColeccion = Backbone.Collection.extend({
	    model: cocheModelo,
	    url: "#"
	});

	var cochecito = new cocheModelo([
	    { 'marca': 'Seat', 'modelo': 'Toledo', 'ITVPasada': false},
	    { 'marca': 'Audi', 'modelo': 'A4', 'ITVPasada': true}
	]);

	console.log( cochecito.toJSON() );	
	```


- .at() Ajustando posiciones:
	```javascript
	var cocheModelo =  Backbone.Model.extend();
	var coche1 = new cocheModelo({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true, 'posicion': 1});
	var coche0 = new cocheModelo({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true, 'posicion': 0});

	var cocheColeccion = Backbone.Collection.extend({
	    model: cocheModelo,
	    url: "#"
	});

	var cochecito = new cocheColeccion([
	    { 'marca': 'Seat', 'modelo': 'Toledo', 'ITVPasada': false},
	    { 'marca': 'Audi', 'modelo': 'A4', 'ITVPasada': true}
	]);

	cochecito.add( coche1, {at : 1} );
	console.log( cochecito.toJSON() );

	cochecito.add( coche0, {at: 0} );
	console.log( cochecito.toJSON() );	
	```


- .remove() Eliminando objetos:
	```javascript
	var primerElemento = cochecito.at(0);
	cochecito.remove( primerElemento );
	console.log( cochecito.toJSON() );
	```	


- Eliminamos un objeto determinado:
	```javascript
	cochecito.remove( coche1 );
	console.log( cochecito.toJSON() );
	```


- .each() Recorriendo todos los objetos:
	```javascript
	cochecito.each( function( cadaCoche ){
	    console.log( 'El coche es un  ' + cadaCoche.get( 'marca' ) + ' ' +cadaCoche.get( 'modelo' ) );
	} );
	```


- .on() Añadimos un listener para un evento en la colección:
	```javascript
	var cocheModelo =  Backbone.Model.extend();
	var cocheColeccion = Backbone.Collection.extend({
	    model: cocheModelo,
	    url: "#"
	});

	var cochecito = new cocheColeccion();

	cochecito.on( 'add', function(){
	    console.log( "Cambios en la colección! Hemos añadido con add() un elemento!" );
	} );

	cochecito.add({ 'marca': 'Seat', 'modelo': 'Toledo', 'ITVPasada': false});
	cochecito.add({ 'marca': 'Audi', 'modelo': 'A4', 'ITVPasada': true});
	cochecito.add({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true});
	cochecito.add({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true});
	```


- .on() Añadimos un listener para varios eventos en la colección:
	```javascript
	var cocheModelo =  Backbone.Model.extend();
	var cocheColeccion = Backbone.Collection.extend({
	    model: cocheModelo,
	    url: "#"
	});

	var cochecito = new cocheColeccion();

	cochecito.on( 'add remove', function(){
	    console.log( "Cambios en la colección! Hemos añadido o borrado un elemento!" );
	} );

	cochecito.add({ 'marca': 'Seat', 'modelo': 'Toledo', 'ITVPasada': false});
	cochecito.add({ 'marca': 'Audi', 'modelo': 'A4', 'ITVPasada': true});
	cochecito.add({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true});
	cochecito.add({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true});
	console.log( cochecito.toJSON() );

	primerElemento = cochecito.at(0);
	cochecito.remove( primerElemento );
	console.log( cochecito.toJSON() );	
	```


**Backbone (View)**

- Extendemos la vista:
	```javascript
	var cocheVista = Backbone.View.extend();
	var vistaPrincipal = new cocheVista();

	console.log( vistaPrincipal );
	```


- el (Por defecto: div):
	```javascript
	var cocheVista = Backbone.View.extend();
	var vistaPrincipal = new cocheVista();

	console.log( vistaPrincipal.el );
	```


- render Renderizmos ("pintamos") la vista:
	```javascript
	var cocheVista = Backbone.View.extend({
	    render: function(){
	        //this.$el.append( '<h1>Hola Backbone!</h1>' ); // Ojo! a los errores por repetición
	        this.$el.html( '<h1>Hola Backbone!</h1>' );

	        return this;
	    }
	});

	var vistaPrincipal = new cocheVista();

	vistaPrincipal.render();

	console.log( vistaPrincipal.el );
	```


- initialize Para renderizar automáticamente la vista:
	```javascript
	var cocheVista = Backbone.View.extend({
	    initialize: function(){
	        this.render();
	    },
	    render: function(){
	        this.$el.html( '<h1>Hola Backbone!</h1>' );
	        return this;
	    }
	});

	var vistaPrincipal = new cocheVista();
	console.log( vistaPrincipal.el );
	```


- tagName Asignar etiquetas:
	```javascript
	var cocheVista = Backbone.View.extend({
	    tagName : 'h1',
	    initialize: function(){
	        var nombre = prompt ( 'Como te llamas? \n (Por defecto = Backbone)' );
	        nombre = nombre || 'Backbone';
	        this.render( nombre );
	    },
	    render: function( nombre ){
	        this.$el.text( 'Hola ' + nombre +'!' );
	        $( '#vista01' ).html( this.el );
	        return this;
	    }
	});

	var vistaPrincipal = new cocheVista();
	```


**Backbone (templates)**

- Usando underscore.js <%= ... %>:
	```javascript
	var plantilla  = _.template( 'Tenemos un <%= marca %>. El modelo <%= modelo %>. Todo un clásico!' );

	console.log(
	    plantilla( {marca: 'Seat', modelo: 'Ibiza'} )
	);
	```


- Separamos la plantilla:
	```javascript
	var cocheModelo = Backbone.Model.extend();
	var cocheVista = Backbone.View.extend({
	    el: '#vista02',
	    plantilla: _.template( $('#plantilla-vistacoche').html() ),
	    initialize: function( modelo ){
	        this.$el.html( this.plantilla ( modelo.toJSON() ));
	    },
	    render: function(){
	        $('#vista02').html( this.$el );
	        return this;
	    }
	});

	cochecito = new cocheModelo({
	    'marca': 'Seat',
	    'modelo': 'Toledo',
	    'url': 'https://www.wikiwand.com/es/SEAT_Toledo'
	});
	var vistaCochecito = new cocheVista( cochecito );
	```


- Cambiamos la plantilla pero no nuestro JS:
	```javascript
	var cocheModelo = Backbone.Model.extend();
	var cocheVista = Backbone.View.extend({
	    el: '#vista02',
	    plantilla: _.template( $('#plantilla-vistacochedetalle').html() ),
	    initialize: function( modelo ){
	        this.$el.html( this.plantilla ( modelo.toJSON() ));
	    },
	    render: function(){
	        $('#vista02').html( this.$el );
	        return this;
	    }
	});

	cochecito = new cocheModelo({
	    'marca': 'Seat',
	    'modelo': 'Toledo',
	    'url': 'https://www.wikiwand.com/es/SEAT_Toledo'
	});
	var vistaCochecito = new cocheVista( cochecito );
	```



**Ejercicios**


4 - Añadamos al sistema la posibilidad de saber las condiciones del agua y del ecosistema:
- total peces por tipo
- total hortalizas por tipo
- Propiedades del agua: 
	- Nitratos(NO3 mg/l)
	- Nitritos (NO2 mg/l)
	- Dureza Sales (GH)
	- Carbonatos (KH)
	- Ph (Ph)
	- Cloro (CL2 mg/l)

```javascript
    // Escribe tu solución
```