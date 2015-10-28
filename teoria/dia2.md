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
	function sumaCuadrados (a, b) {
		return (a*a) + (b*b);
	};
```


2 - Contar las veces que aparece una letra en un texto.

```javascript
	function cuentaLetra(frase, letra){
		var total = 0;
		for(var cuenta = 0; cuenta < frase.length; cuenta++){
			if (frase.charAt(cuenta) == letra){
				total++;
			};
		};
		console.log("Tenemos "+total+" veces la letra \""+letra+"\" en la frase \""+frase+"\"" );
	};
```


3 - Contar las veces que aparece una letra en un texto, preguntando al usuario.

```javascript
	function cuentaLetraUsuario (){
		var frase = prompt("El texto, amigo");
		var letra = prompt("una letra!");
		if (typeof(frase) != "string" || typeof(letra) != "string") {
			alert("mmm.... no me gustan los tramposos!");
			return false;
		} else {
			var total = 0;
			for(var cuenta = 0; cuenta < frase.length; cuenta++){
				if(frase.charAt(cuenta) == letra){
					total++
				};
			}
			alert("Tenemos "+total+" veces la letra \""+letra+"\" en la frase \""+frase+"\"" );
			return true;
		};
	};
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
	var miDiaEs = (function() {
	    var hoy = new Date()
	    if (new Date().getDate() % 2 == 0) {
	        return function() { console.info("hoy es un día par") }
	    } else {
	        return function() { console.info("hoy es un día impar") }
	    }
	})()
	miDiaEs();
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
	var pasajero1 = "Alicia Gutierrez";
	var pasajero2 = "Alfonso Gomez";
	var pasajero3 = "Luis Navarro";
	var pasajero4 = "Oscar Garcia";
	var pasajero5 = "Andres Fernandez";
	var pasajero6 = "Lucia Mellado";
```


14 - Hagamos una lista de pasajeros efectiva usando Arrays

```javascript
	var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];
```


15 - Imprimamos cada pasajero de la lista y su número de asiento (basado en el orden del índice).
*Nota: El primer asiento del tren es el 1 y no el 0.*

```javascript
	var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	function listaPasajeros(){
		for (var i = 0; i < pasajeros.length; i++) {
			console.log("El pasajero "+pasajeros[i]+" tiene reservado el asiento "+(i+1));
		};
	};
```


16 - Necesitamos una función para agregar y otra para borrar pasajeros de la lista.
*Nota: Pensemos que a la larga pueden existir más listas.*

```javascript
	var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	function agregarPasajero(nombre, lista) {
		lista.push(nombre);
		return lista
	};

	function quitarPasajero(nombre, lista) {
		if (lista.length == 0) {
			console.log("La lista \""+lista+"\" esta vacía.");
		} else {
			for (var i = 0; i < lista.length; i++) {
				if(lista[i] == nombre){
					lista.splice(i, 1);
					return lista;
				} else if (i == lista.length -1){
					console.log("El pasajero \""+nombre+"\" no encontrado!")
				};
			};
		};
	};
	
	/* Testeamos Funcionalidad
		quitarPasajero("Luis Navarro", pasajeros)
		agregarPasajero("Yo Mismo", pasajeros)
		quitarPasajero("Yo Mismo", pasajeros)
		
	*/
```


17 - La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, pero quiere evitar que los pasajeros cambien de asiento constantemente cuando se anula un o varios billetes.
*Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los billetes quedaban desactualizados.*

```javascript
	var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	function agregarPasajero(nombre, lista) {
		if(lista.length == 0){
			lista.push(nombre);
			console.log("El pasajero "+nombre+" añadido con éxito, asiento asignado 0");
		}else {
			for (var i = 0; i < lista.length; i++) {
				if (lista[i] == undefined) {
					lista[i] = nombre;
					console.log("El pasajero "+nombre+" añadido con éxito, asiento asignado "+(i+1));
					return true
				} else if (i == lista.length -1){
					lista.push(nombre);
					console.log("El pasajero "+nombre+" añadido con éxito, asiento asignado "+(i+1));
					console.log("INFO: En esta lista no quedan asientos pendientes de asignación.")
					return true
				};
			};
		};
	};


	function quitarPasajero(nombre, lista) {
		if (lista.length == 0) {
			console.log("La lista \""+lista+"\" esta vacía.");
			return false
		} else {
			for (var i = 0; i < lista.length; i++) {
				if(lista[i] == nombre){
					lista[i] = undefined;
					console.log("El pasajero \""+nombre+"\" eliminado con éxito!")
					return true;
				} else if (i == lista.length -1){
					console.log("El pasajero \""+nombre+"\" no encontrado!");
					return false
				};
			};
		};
	};
	
		
	/* Testeamos Funcionalidad
	
		quitarPasajero("Luis Navarro", pasajeros)
		agregarPasajero("Yo Mismo", pasajeros)
		quitarPasajero("Yo Mismo", pasajeros)
		
	*/
	
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
	var nuevasRutas = [ ["Tetuán", 12], ["Moncloa", 19], ["Hortaleza", 21] ];

	function constructorDeTickets (estacion, tiempo) {
		return function (nombre) {
			console.log("Sr/a. "+nombre+".\n Muchas gracias por adquirir este ticket gratuito en el "+estacion+" express.\n El tiempo estimado de llegada es de "+tiempo+" minutos.\n Estamos trabajando en la mejora de nuestra vía principal, disculpe las molestias!");
		};
	}

	var tetuanExpress = constructorDeTickets ("Tetuán", 12);
	var moncloaExpress = constructorDeTickets (nuevasRutas[1][0], nuevasRutas[1][1]);
	var hortalezaExpress = constructorDeTickets (nuevasRutas[2][0], nuevasRutas[2][1]);

	tetuanExpress ("Pepe");
	moncloaExpress ("Luis");
	hortalezaExpress ("Hector");

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
	var nuevasRutas = [ ["Tetuán", 12], ["Moncloa", 19], ["Hortaleza", 21] ];

	function constructorDeTickets (estacion, tiempo) {
		var numeroPasajero = 0;
		return function (nombre) {
			numeroPasajero++;
			console.log("Sr/a. "+nombre+".\n Muchas gracias por adquirir este ticket gratuito en el "+estacion+" express.\n Billete Número:\t"+(estacion.charAt(0)+numeroPasajero)+"\n El tiempo estimado de llegada es de "+tiempo+" minutos.\n  Estamos trabajando en la mejora de nuestra vía principal, disculpe las molestias!");
		};
	}

	var tetuanExpress = constructorDeTickets ("Tetuán", 12);
	var moncloaExpress = constructorDeTickets (nuevasRutas[1][0], nuevasRutas[1][1]);
	var hortalezaExpress = constructorDeTickets (nuevasRutas[2][0], nuevasRutas[2][1]);
	
	
	tetuanExpress ("Pepe");
	moncloaExpress ("Luis");
	hortalezaExpress ("Hector");

```


20 - Gracias al ejercicio anterior, hemos podido saber a groso modo cuantos pasajeros van en cada línea.

La empresa considera que con estos datos, usará trenes con menos vagones que le permitirán transportar a los pasajeros en menos tiempo.

Pero existe el riesgo de dejar pasajeros esperando mucho tiempo.

Así que haremos una nueva función que avise al revisor cuando no quede sitio en el próximo tren.

El revisor del tren debe repartir tickets restaurante a los pasajeros para que puedan tomar una consumición gratis en la cafetería de la estación, si no tienen sitio en el próximo tren.

*Nota: La linea es única y el mismo tren cubre todo el trayecto.*

```javascript
	function capacidad (ultimoPasajero, numeroMaximo) {

		function sinSitios () {
			console.log("IMPORTANTE: No queda sitio, por favor... saca los tickets restaurante!")
			console.log ("Capacidad:\t"+ultimoPasajero+"/"+numeroMaximo);
		};
		function quedaSitio () {
			console.log ("Capacidad:\t"+ultimoPasajero+"/"+numeroMaximo);
		};

		if (ultimoPasajero >= numeroMaximo){
			sinSitios();
		} else {
			quedaSitio();
		};

	};
	
	capacidad(10, 50);
	capacidad(50, 50);
	capacidad(55, 50);
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
	var cajeroAutomatico = {};
```

2 - Añadimos detalles básicos(clientes y propiedades)

```javascript
	var clientesBD = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	var cajeroAutomatico = {
	    empresaPropietaria: "SuperExpress",
	    modelo: "Al-201",
	    año: 2010,
	    serie: "01 Beta",
	    tipo: "Prototipo",
	    unidadMedida: "metros",
	    alto: 1,
	    ancho: 0.5,
	    largo: 0.5,
	    unidadPeso: "Kg",
	    peso: 600,
	    materiales: ["acero", "plástico", "cables", "circuitos"],
	    clientesAutorizados: clientesBD,
	    moneda: "Euros",
	    dineroDisponible: 65000
	};
```


3 - Añadimos detalles adicionales (volumen)

```javascript
	cajeroAutomatico.volumen = cajeroAutomatico.alto * cajeroAutomatico.ancho * cajeroAutomatico.largo;
	cajeroAutomatico.volumenMedida = cajeroAutomatico.unidadMedida.charAt(0) +3;

	console.log("El volumen del cajero automático es de "+cajeroAutomatico.volumen+cajeroAutomatico.volumenMedida);
```


4 - Añadimos funciones para quitar y añadir clientes

```javascript
	function agregarCliente (nombre, lista) {
	lista.push(nombre);
	return lista;
	}

	function quitarCliente(nombre, lista) {
		if (lista.length === 0) {
			console.log("La lista esta vacía.");
		} else {
			for (var i = 0; i < lista.length; i++) {
				if(lista[i] == nombre){
					lista.splice(i, 1);
					console.log("El Cliente \""+nombre+"\" eliminado con éxito!");
					return lista;
				} else if (i == lista.length -1){
					console.log("El cliente \""+nombre+"\" no encontrado!");
				}
			}
		}
	}
	
	/* Testeamos Funcionalidad

	agregarCliente ("yo mismo", clientesBD)
	quitarCliente ("yo mismo", clientesBD)
	quitarCliente ("yo mismo", clientesBD)

	
	*/
	
```


5 - Añadimos una propiedad para contabilizar las operaciones realizadas

```javascript
	cajeroAutomatico["operaciones realizadas"] = 0;
	console.info("Por el momento las operaciones realizadas son "+cajeroAutomatico["operaciones realizadas"]);
```


6 - Creamos una función para eliminar una propiedad si no contiene cierta cantidad de datos.
*Nota: borrandoDatosVacios (objeto, propiedad, valorMinimo)*

```javascript
	function borrandoDatosVacios (objeto, propiedad, valorMinimo) {
	    if (objeto[propiedad] <= valorMinimo) {
	        delete objeto[propiedad]
	        return true
	    } else {
	        return false
	    }
	}
	
	/* Testeamos Funcionalidad

	borrandoDatosVacios(cajeroAutomatico, "operaciones realizadas", 0);
	
	*/
```


7 - Añadimos funciones de control de operaciones (contabilizar operaciones realizadas y fallidas) y funciones de administracción (agregar y quitar dinero)

```javascript
	var debugMode = true;

	function esNumero(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function operacionRealizada () {
	    if (isNaN(cajeroAutomatico["operaciones realizadas"]) || cajeroAutomatico["operaciones realizadas"] === undefined) {
	        cajeroAutomatico["operaciones realizadas"] = 1;
	        if(debugMode){
	            console.info("Primera operación realizada con éxito!");
	        }
	    } else {
	        cajeroAutomatico["operaciones realizadas"]++;
	        if(debugMode){
	            console.info("La operación #"+cajeroAutomatico["operaciones realizadas"]+" realizada con éxito!");
	        }        
	    }  
	};

	function operacionFallida () {
	    if (isNaN(cajeroAutomatico["operaciones fallidas"]) || cajeroAutomatico["operaciones fallidas"] === undefined) {
	        cajeroAutomatico["operaciones fallidas"] = 1;
	        if(debugMode){
	            console.warn("ERROR: Primera operación fallida!");
	        }
	    } else {
	        cajeroAutomatico["operaciones fallidas"]++;
	        if(debugMode){
	            console.warn("ERROR: La operación #"+cajeroAutomatico["operaciones fallidas"]+" fallo!");
	        }        
	    }  
	};


	function agregarDinero (cantidad){
	    if (esNumero(cantidad)) {
	        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
	        operacionRealizada();
	        if(debugMode){
	            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
	        }
	    } else {
	        operacionFallida();
	        if(debugMode){
	            console.warn(cantidad+" No es un numero valido!");
	        }
	    }

	}

	function quitarDinero (cantidad){
	    if (esNumero(cantidad)) {
	        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
	        operacionRealizada();
	        if(debugMode){
	            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
	        }
	    } else {
	        operacionFallida();
	        if(debugMode){
	            console.warn(cantidad+" No es un numero valido!");
	        }
	    }
	}

	/* Testeamos Funcionalidad
	
	quitarDinero (1000)
	quitarDinero ("Mucho!!")
	agregarDinero (1000000)
	agregarDinero ("Poco!")
	
	*/
```


8 - Añadimos funciones para operaciones económicas y verificación de los clientes

```javascript
function retirarEfectivo (nombre, cantidad) {
    if (esCliente(nombre)){
        if (esNumero(cantidad)) {
            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
            operacionRealizada();
            if(debugMode){
                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
            }
        } else {
            operacionFallida();
            if(debugMode){
                console.warn(cantidad+" No es un numero valido!");
            }
        }
    } else {
            operacionFallida();
            if(debugMode){
                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
            }        
    }    

}

function ingresarEfectivo (nombre, cantidad) {
    if (esCliente(nombre)){
        if (esNumero(cantidad)) {
            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
            operacionRealizada();
            if(debugMode){
                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
            }
        } else {
            operacionFallida();
            if(debugMode){
                console.warn(cantidad+" No es un numero valido!");
            }
        }
    } else {
            operacionFallida();
            if(debugMode){
                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
            }        
    }    

}


function esCliente(nombre) {
	if (cajeroAutomatico.clientesAutorizados === 0) {
	    if (debugMode) {
		    console.warn("La lista esta vacía.");
	    }
	    return false;
	} else {
		for (var i = 0; i < cajeroAutomatico.clientesAutorizados.length; i++) {
			if(cajeroAutomatico.clientesAutorizados[i] == nombre){
				if (debugMode) {
		            console.info(nombre+" eres cliente de "+cajeroAutomatico.empresaPropietaria);
				}
				return true;
			} else if (i == cajeroAutomatico.clientesAutorizados.length -1){
				if (debugMode) {
		            console.warn(nombre+" no encontrado!");
				}
				return false;
			}
		}
	}
}

/* Testeamos Funcionalidad

	ingresarEfectivo ("Yo mismo", 1000);
	ingresarEfectivo ("Oscar Garcia", "Poco!");
	ingresarEfectivo ("Oscar Garcia", 10);
	retirarEfectivo("Yo mismo", 1000);
	retirarEfectivo ("Oscar Garcia", "Muchoo!");
	retirarEfectivo ("Oscar Garcia", 10000);
	
*/
```


9 - Creamos un log detallado y una cuenta total

```javascript
	'use strict';
	/* VARIABLES */
	var debugMode = true;

	var clientesBD = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	var cajeroAutomatico = {
	    empresaPropietaria: "SuperExpress",
	    modelo: "Al-201",
	    año: 2010,
	    serie: "01 Beta",
	    tipo: "Prototipo",
	    unidadMedida: "metros",
	    alto: 1,
	    ancho: 0.5,
	    largo: 0.5,
	    unidadPeso: "Kg",
	    peso: 600,
	    materiales: ["acero", "plástico", "cables", "circuitos"],
	    clientesAutorizados: clientesBD,
	    moneda: "Euros",
	    dineroDisponible: 65000
	};

	cajeroAutomatico.volumen = cajeroAutomatico.alto * cajeroAutomatico.ancho * cajeroAutomatico.largo;
	cajeroAutomatico.volumenMedida = cajeroAutomatico.unidadMedida.charAt(0) +3;

	/* FUNCIONES VERIFICACIÓN */

	/**
	 * Añade información sobre todo lo que ocurre en cajeroAutomatico.log.(logNUMERO).
	 * Actualiza cajeroAutomatico.logTotal con operaciones fallidas y operaciones realizadas.
	 * @param {string} tipo - "info" o "error".
	 * @param {string} origen - "usuario", "maquina" o "administrador".
	 * @param {string} codigo - código de error
	 * @param {string} detalles - Descripción del error.
	 */
	function dataLog (tipo, origen, codigo, detalles) {
	    cajeroAutomatico["operaciones fallidas"] = cajeroAutomatico["operaciones fallidas"] || 0;
	    cajeroAutomatico["operaciones realizadas"] = cajeroAutomatico["operaciones realizadas"] || 0;
	    cajeroAutomatico.logTotal = cajeroAutomatico.logTotal || 1;
	    cajeroAutomatico.log = cajeroAutomatico.log || [];
	    cajeroAutomatico.logTotal = cajeroAutomatico["operaciones fallidas"] + cajeroAutomatico["operaciones realizadas"];
	    cajeroAutomatico.log[cajeroAutomatico.logTotal] = [cajeroAutomatico.logTotal, tipo, origen, codigo, detalles ]

	}


	function esCliente(nombre) {
		if (cajeroAutomatico.clientesAutorizados === 0) {
		    if (debugMode) {
			    console.warn("La lista esta vacía.");
		    }
		    return false;
		} else {
			for (var i = 0; i < cajeroAutomatico.clientesAutorizados.length; i++) {
				if(cajeroAutomatico.clientesAutorizados[i] == nombre){
					if (debugMode) {
			            console.info(nombre+" eres cliente de "+cajeroAutomatico.empresaPropietaria);
					}
					return true;
				} else if (i == cajeroAutomatico.clientesAutorizados.length -1){
					if (debugMode) {
			            console.warn(nombre+" no encontrado!");
					}
					return false;
				}
			}
		}
	}

	function esNumero(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function operacionRealizada () {
	    if (isNaN(cajeroAutomatico["operaciones realizadas"]) || cajeroAutomatico["operaciones realizadas"] === undefined) {
	        cajeroAutomatico["operaciones realizadas"] = 1;
	        if(debugMode){
	            console.info("Primera operación realizada con éxito!");
	        }
	    } else {
	        cajeroAutomatico["operaciones realizadas"]++;
	        if(debugMode){
	            console.info("La operación #"+cajeroAutomatico["operaciones realizadas"]+" realizada con éxito!");
	        }        
	    }  
	}

	function operacionFallida () {
	    if (isNaN(cajeroAutomatico["operaciones fallidas"]) || cajeroAutomatico["operaciones fallidas"] === undefined) {
	        cajeroAutomatico["operaciones fallidas"] = 1;
	        if(debugMode){
	            console.warn("ERROR: Primera operación fallida!");
	        }
	    } else {
	        cajeroAutomatico["operaciones fallidas"]++;
	        if(debugMode){
	            console.warn("ERROR: La operación #"+cajeroAutomatico["operaciones fallidas"]+" fallo!");
	        }        
	    }  
	}

	function borrandoDatosVacios (objeto, propiedad, valorMinimo) {
	    if (objeto[propiedad] <= valorMinimo) {
	        delete objeto[propiedad];
	        return true;
	    } else {
	        return false;
	    }
	}


	/* FUNCIONES INTERACCIÓN */

	function retirarEfectivo (nombre, cantidad) {
	    if (esCliente(nombre)){
	        if (esNumero(cantidad)) {
	            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
	            operacionRealizada();
	            dataLog ("info", "usuario", 1, "Retirada de "+cantidad+cajeroAutomatico.moneda+" por "+nombre);
	            if(debugMode){
	                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
	            }
	            return true;
	        } else {
	            operacionFallida();
	            dataLog ("error", "usuario", 2, "Retirada fallida por "+cantidad+" errónea. Usuario: "+nombre);
	            if(debugMode){
	                console.warn(cantidad+" No es un numero valido!");
	            }
	            return false;
	        }
	    } else {
	            operacionFallida();
	            dataLog ("error", "usuario", 3, nombre+" No es cliente");
	            if(debugMode){
	                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
	            }
	            return false;
	    }    

	}

	function ingresarEfectivo (nombre, cantidad) {
	    if (esCliente(nombre)){
	        if (esNumero(cantidad)) {
	            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
	            operacionRealizada();
	            dataLog ("info", "usuario", 4, "Ingreso de "+cantidad+cajeroAutomatico.moneda+" por "+nombre);
	            if(debugMode){
	                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
	            }
	            return true;
	        } else {
	            operacionFallida();
	            dataLog ("error", "usuario", 5, "Ingreso fallido por "+cantidad+" - errónea. Usuario: "+nombre);
	            if(debugMode){
	                console.warn(cantidad+" No es un numero valido!");
	            }
	            return false;
	        }
	    } else {
	            operacionFallida();
	            dataLog ("error", "usuario", 6, nombre+" No es cliente");
	            if(debugMode){
	                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
	            }
	            return false;
	    }    

	}

	function agregarDinero (cantidad){
	    if (esNumero(cantidad)) {
	        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
	        operacionRealizada();
	        dataLog ("info", "administrador", 7, "Ingreso de "+cantidad+cajeroAutomatico.moneda);
	        if(debugMode){
	            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
	        }
	        return true;
	    } else {
	        operacionFallida();
	        dataLog ("error", "administrador", 8, "Ingreso fallido por "+cantidad+" - errónea.");
	        if(debugMode){
	            console.warn(cantidad+" No es un numero valido!");
	        }
	        return false;
	    }

	}

	function quitarDinero (cantidad){
	    if (esNumero(cantidad)) {
	        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
	        operacionRealizada();
	        dataLog ("info", "administrador", 9, "Retirada de "+cantidad+cajeroAutomatico.moneda);
	        if(debugMode){
	            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
	        }
	        return true;
	    } else {
	        operacionFallida();
	        dataLog ("error", "administrador", 10, "Retirada fallida por "+cantidad+" - errónea.");
	        if(debugMode){
	            console.warn(cantidad+" No es un numero valido!");
	        }
	        return false;
	    }
	}

	function agregarCliente (nombre, lista) {
	    lista.push(nombre);
	    operacionRealizada();
	    dataLog ("info", "administrador", 11, "Ingreso de "+nombre+" a la base de datos de clientes");
	    return true;
	}

	function quitarCliente(nombre, lista) {
		if (lista.length === 0) {
		    if (debugMode) {
			    console.log("La lista esta vacía.");
		    }
			operacionFallida();
			dataLog ("error", "maquina", 12, "Eliminacion de "+nombre+" fallida. Base de datos, vacía.");
			return false;
		} else {
			for (var i = 0; i < lista.length; i++) {
				if(lista[i] == nombre){
					lista.splice(i, 1);
					if(debugMode) {
					    console.log("El Cliente \""+nombre+"\" eliminado con éxito!");
					    console.log(lista);
					}
					operacionRealizada();
	                dataLog ("info", "administrador", 13, "Eliminado "+nombre+" de la base de datos de clientes");
					return true;
				} else if (i == lista.length -1){
				    if(debugMode) {
					    console.log("El cliente \""+nombre+"\" no encontrado!");
				    }
					operacionFallida();
			        dataLog ("error", "maquina", 14, "Eliminacion de "+nombre+" fallida. Cliente inexistente.");
				    return false;
				}
			}
		}
	}
	
	/* Testeamos Funcionalidad

	agregarCliente ("yo mismo", clientesBD)
	quitarCliente ("yo mismo", clientesBD)
	quitarCliente ("yo mismo", clientesBD)
	quitarDinero (1000)
	quitarDinero ("Mucho!!")
	agregarDinero (1000000)
	agregarDinero ("Poco!")
	ingresarEfectivo ("Yo mismo", 1000);
	ingresarEfectivo ("Alicia Gutierrez", "Poco!");
	ingresarEfectivo ("Alicia Gutierrez", 10);
	retirarEfectivo("Yo mismo", 1000)
	ingresarEfectivo ("Alicia Gutierrez", "Muchoo!");
	ingresarEfectivo ("Alicia Gutierrez", 10000);
	borrandoDatosVacios(cajeroAutomatico, "operaciones realizadas", 0);
	
	*/
	
```


10 - Refactorizamos y dejamos todo preparado para incluirlo en nuestro html, usando lo que hemos aprendido. 
	Evitando tambien que las funciones puedan ser accedidas desde la consola u otras librerias.

```javascript
	var myApp = myApp || {};

	myApp = (function (w){
		'use strict';
	/* VARIABLES */
	var debugMode = true;

	var clientesBD = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	var cajeroAutomatico = {
	    empresaPropietaria: "SuperExpress",
	    modelo: "Al-201",
	    "año": 2010,
	    serie: "01 Beta",
	    tipo: "Prototipo",
	    unidadMedida: "metros",
	    alto: 1,
	    ancho: 0.5,
	    largo: 0.5,
	    unidadPeso: "Kg",
	    peso: 600,
	    materiales: ["acero", "plástico", "cables", "circuitos"],
	    clientesAutorizados: clientesBD,
	    moneda: "Euros",
	    dineroDisponible: 65000
	};

	cajeroAutomatico.volumen = cajeroAutomatico.alto * cajeroAutomatico.ancho * cajeroAutomatico.largo;
	cajeroAutomatico.volumenMedida = cajeroAutomatico.unidadMedida.charAt(0) +3;

	/* FUNCIONES VERIFICACIÓN */

	/**
	 * Añade información sobre todo lo que ocurre en cajeroAutomatico.log.(logNUMERO).
	 * Actualiza cajeroAutomatico.logTotal con operaciones fallidas y operaciones realizadas.
	 * @param {string} tipo - "info" o "error".
	 * @param {string} origen - "usuario", "maquina" o "administrador".
	 * @param {string} codigo - código de error
	 * @param {string} detalles - Descripción del error.
	 */
	function dataLog (tipo, origen, codigo, detalles) {
	    cajeroAutomatico["operaciones fallidas"] = cajeroAutomatico["operaciones fallidas"] || 0;
	    cajeroAutomatico["operaciones realizadas"] = cajeroAutomatico["operaciones realizadas"] || 0;
	    cajeroAutomatico.logTotal = cajeroAutomatico.logTotal || 1;
	    cajeroAutomatico.log = cajeroAutomatico.log || [];
	    cajeroAutomatico.logTotal = cajeroAutomatico["operaciones fallidas"] + cajeroAutomatico["operaciones realizadas"];
	    cajeroAutomatico.log[cajeroAutomatico.logTotal] = [cajeroAutomatico.logTotal, tipo, origen, codigo, detalles ];

	}


	function esCliente(nombre) {
		if (cajeroAutomatico.clientesAutorizados === 0) {
		    if (debugMode) {
			    console.warn("La lista esta vacía.");
		    }
		    return false;
		} else {
			for (var i = 0; i < cajeroAutomatico.clientesAutorizados.length; i++) {
				if(cajeroAutomatico.clientesAutorizados[i] == nombre){
					if (debugMode) {
			            console.info(nombre+" eres cliente de "+cajeroAutomatico.empresaPropietaria);
					}
					return true;
				} else if (i == cajeroAutomatico.clientesAutorizados.length -1){
					if (debugMode) {
			            console.warn(nombre+" no encontrado!");
					}
					return false;
				}
			}
		}
	}

	function esNumero(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function operacionRealizada () {
	    if (isNaN(cajeroAutomatico["operaciones realizadas"]) || cajeroAutomatico["operaciones realizadas"] === undefined) {
	        cajeroAutomatico["operaciones realizadas"] = 1;
	        if(debugMode){
	            console.info("Primera operación realizada con éxito!");
	        }
	    } else {
	        cajeroAutomatico["operaciones realizadas"]++;
	        if(debugMode){
	            console.info("La operación #"+cajeroAutomatico["operaciones realizadas"]+" realizada con éxito!");
	        }        
	    }  
	}

	function operacionFallida () {
	    if (isNaN(cajeroAutomatico["operaciones fallidas"]) || cajeroAutomatico["operaciones fallidas"] === undefined) {
	        cajeroAutomatico["operaciones fallidas"] = 1;
	        if(debugMode){
	            console.warn("ERROR: Primera operación fallida!");
	        }
	    } else {
	        cajeroAutomatico["operaciones fallidas"]++;
	        if(debugMode){
	            console.warn("ERROR: La operación #"+cajeroAutomatico["operaciones fallidas"]+" fallo!");
	        }        
	    }  
	}

	function borrandoDatosVacios (objeto, propiedad, valorMinimo) {
	    if (objeto[propiedad] <= valorMinimo) {
	        delete objeto[propiedad];
	        return true;
	    } else {
	        return false;
	    }
	}


	/* FUNCIONES INTERACCIÓN */

	function retirarEfectivo (nombre, cantidad) {
	    if (esCliente(nombre)){
	        if (esNumero(cantidad)) {
	            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
	            operacionRealizada();
	            dataLog ("info", "usuario", 1, "Retirada de "+cantidad+cajeroAutomatico.moneda+" por "+nombre);
	            if(debugMode){
	                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
	            }
	            return true;
	        } else {
	            operacionFallida();
	            dataLog ("error", "usuario", 2, "Retirada fallida por "+cantidad+" errónea. Usuario: "+nombre);
	            if(debugMode){
	                console.warn(cantidad+" No es un numero valido!");
	            }
	            return false;
	        }
	    } else {
	            operacionFallida();
	            dataLog ("error", "usuario", 3, nombre+" No es cliente");
	            if(debugMode){
	                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
	            }
	            return false;
	    }    

	}

	function ingresarEfectivo (nombre, cantidad) {
	    if (esCliente(nombre)){
	        if (esNumero(cantidad)) {
	            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
	            operacionRealizada();
	            dataLog ("info", "usuario", 4, "Ingreso de "+cantidad+cajeroAutomatico.moneda+" por "+nombre);
	            if(debugMode){
	                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
	            }
	            return true;
	        } else {
	            operacionFallida();
	            dataLog ("error", "usuario", 5, "Ingreso fallido por "+cantidad+" - errónea. Usuario: "+nombre);
	            if(debugMode){
	                console.warn(cantidad+" No es un numero valido!");
	            }
	            return false;
	        }
	    } else {
	            operacionFallida();
	            dataLog ("error", "usuario", 6, nombre+" No es cliente");
	            if(debugMode){
	                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
	            }
	            return false;
	    }    

	}

	function agregarDinero (cantidad){
	    if (esNumero(cantidad)) {
	        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
	        operacionRealizada();
	        dataLog ("info", "administrador", 7, "Ingreso de "+cantidad+cajeroAutomatico.moneda);
	        if(debugMode){
	            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
	        }
	        return true;
	    } else {
	        operacionFallida();
	        dataLog ("error", "administrador", 8, "Ingreso fallido por "+cantidad+" - errónea.");
	        if(debugMode){
	            console.warn(cantidad+" No es un numero valido!");
	        }
	        return false;
	    }

	}

	function quitarDinero (cantidad){
	    if (esNumero(cantidad)) {
	        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
	        operacionRealizada();
	        dataLog ("info", "administrador", 9, "Retirada de "+cantidad+cajeroAutomatico.moneda);
	        if(debugMode){
	            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
	        }
	        return true;
	    } else {
	        operacionFallida();
	        dataLog ("error", "administrador", 10, "Retirada fallida por "+cantidad+" - errónea.");
	        if(debugMode){
	            console.warn(cantidad+" No es un numero valido!");
	        }
	        return false;
	    }
	}

	function agregarCliente (nombre, lista) {
	lista.push(nombre);
	operacionRealizada();
	dataLog ("info", "administrador", 11, "Ingreso de "+nombre+" a la base de datos de clientes");
	return true;
	}

	function quitarCliente(nombre, lista) {
		if (lista.length === 0) {
		    if (debugMode) {
			    console.log("La lista esta vacía.");
		    }
			operacionFallida();
			dataLog ("error", "maquina", 12, "Eliminacion de "+nombre+" fallida. Base de datos, vacía.");
			return false;
		} else {
			for (var i = 0; i < lista.length; i++) {
				if(lista[i] == nombre){
					lista.splice(i, 1);
					if(debugMode) {
					    console.log("El Cliente \""+nombre+"\" eliminado con éxito!");
					    console.log(lista);
					}
					operacionRealizada();
	                dataLog ("info", "administrador", 13, "Eliminado "+nombre+" de la base de datos de clientes");
					return true;
				} else if (i == lista.length -1){
				    if(debugMode) {
					    console.log("El cliente \""+nombre+"\" no encontrado!");
				    }
					operacionFallida();
			        dataLog ("error", "maquina", 14, "Eliminacion de "+nombre+" fallida. Cliente inexistente.");
				    return false;
				}
			}
		}
	}
		return {
		    cajeroAutomatico: "Esto es todo lo que te muestro."
		};
	})(window);
```

11 (opcional) - Integrarlo con el html y bloquea el uso del de las funciones por consola

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
	var acuApp = acuApp || {};

	// Constructores
	var constructorTanque = function (capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo) {
	    this.capacidad = capacidad;
	    this.capacidadMedida = capacidadMedida;
	    this.dimensiones = alto * ancho *largo;
	    this.alto = alto;
	    this.ancho = ancho;
	    this.largo = largo;
	    this.dimensionesMedida = dimensionesMedida;
	    this.color = color;
	    this.nivelAguaMaximo = nivelAguaMaximo;
	};

	var constructorCama = function (capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo, sustrato) {
	    this.capacidad = capacidad;
	    this.capacidadMedida = capacidadMedida;
	    this.dimensiones = alto * ancho *largo;
	    this.alto = alto;
	    this.ancho = ancho;
	    this.largo = largo;
	    this.medida = dimensionesMedida;
	    this.color = color;
	    this.nivelAguaMaximo = nivelAguaMaximo;
	    this.sustrato = sustrato;
	};


	acuApp["tanque principal"] = new constructorTanque(40, "Litros", 30.5, 25.5, 51, "Cm", "Gris Claro", 2);
	acuApp["cama principal"] = new constructorCama(10, "Litros", 10, 25.5, 51, "Cm", "Rojo", 5, "Piedra volcánica");
```


2 - Añadamos el agua, para lo que necesitaremos un sistema para añadir y quitar agua, además de un desagüe automático que nos avise cuando el nivel del agua sea más alto de los esperado y evacue el sobrante.

```javascript
	var debugMode = true;

	function chivato (tipo, mensaje) {
	    if (debugMode) {
	        if(tipo == "warn"){
	            console.warn(mensaje);
	        } else {
	            console.log(mensaje);
	        }
	    }
	}

	var acuApp = acuApp || {};

	// Constructores
	var constructorTanque = function (nombre, capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo) {
	    this.nombre = nombre;
	    this.capacidad = capacidad;
	    this.capacidadMedida = capacidadMedida;
	    this.dimensiones = alto * ancho * largo;
	    this.alto = alto;
	    this.ancho = ancho;
	    this.largo = largo;
	    this.dimensionesMedida = dimensionesMedida;
	    this.color = color;
	    this.nivelAguaMaximo = nivelAguaMaximo;
	    this.desagueFuncionando = false;
	    this.nivelAgua = 0;
	    /* Funciones */

	    this.agregarAgua = function(litros){
	        this.nivelAgua = this.nivelAgua + litros;
	        if(this.nivelAgua >= this.nivelAguaMaximo){
	            if(!this.desagueFuncionando){
	                this.desagueFuncionando = true;
	                chivato("warn", "Se activó el sistema de desagüe de emergencia en "+this.nombre);
	            }
	            chivato("log", "nivel actual: "+this.nivelAgua);
	            this.quitarAgua(this.nivelAgua-this.nivelAguaMaximo);
	        }
	    };
	    this.quitarAgua = function(litros){
	        this.nivelAgua = this.nivelAgua-litros;
	        if(this.desagueFuncionando){
	            this.desagueFuncionando = false;
	            chivato("log", "Se desactivo el sistema de desagüe de emergencia en "+this.nombre);
	        }
	        chivato("log", "nivel actual: "+this.nivelAgua);
	    };
	};

	var constructorCama = function (nombre, capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo, sustrato) {
	    this.nombre = nombre;
	    this.capacidad = capacidad;
	    this.capacidadMedida = capacidadMedida;
	    this.dimensiones = alto * ancho *largo;
	    this.alto = alto;
	    this.ancho = ancho;
	    this.largo = largo;
	    this.medida = dimensionesMedida;
	    this.color = color;
	    this.nivelAguaMaximo = nivelAguaMaximo;
	    this.sustrato = sustrato;
	    this.desagueFuncionando = false;
	    this.nivelAgua = 0;
	    /* Funciones */

	    this.agregarAgua = function(litros){
	        this.nivelAgua = this.nivelAgua + litros;
	        if(this.nivelAgua >= this.nivelAguaMaximo){
	            if(!this.desagueFuncionando){
	                this.desagueFuncionando = true;
	                chivato("warn", "Se activó el sistema de desagüe de emergencia en "+this.nombre);
	            }
	            chivato("log", "nivel actual: "+this.nivelAgua);
	            this.quitarAgua(this.nivelAgua-this.nivelAguaMaximo);
	        }
	    };
	    this.quitarAgua = function(litros){
	        this.nivelAgua = this.nivelAgua-litros;
	        if(this.desagueFuncionando){
	            this.desagueFuncionando = false;
	            chivato("log", "Se desactivo el sistema de desagüe de emergencia en "+this.nombre);
	        }
	        chivato("log", "nivel actual: "+this.nivelAgua);
	    };
	};


	acuApp.tanque1 = new constructorTanque("Tanque principal",40, "Litros", 30.5, 25.5, 51, "Cm", "Gris Claro", 2);
	acuApp.cama1 = new constructorCama("Cama principal", 10, "Litros", 10, 25.5, 51, "Cm", "Rojo", 5, "Piedra volcánica");
	acuApp.cama1.agregarAgua(100);
	acuApp.tanque1.agregarAgua(987);
```


3 - Añadamos ahora nuestras plantas y nuestros peces
- (opcional) teniendo en cuenta sus necesidades de espacio.
- Incluir una función para quitar peces y vegetales.

```javascript
	var debugMode = true;

	function chivato (tipo, mensaje) {
	    if (debugMode) {
	        if(tipo == "warn"){
	            console.warn(mensaje);
	        } else {
	            console.log(mensaje)
	        }
	    }
	};

	var acuApp = acuApp || {};

	// Constructores
	var constructorTanque = function (nombre, capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo) {
	    this.nombre = nombre;
	    this.capacidad = capacidad;
	    this.capacidadMedida = capacidadMedida;
	    this.dimensiones = alto * ancho * largo;
	    this.alto = alto;
	    this.ancho = ancho;
	    this.largo = largo;
	    this.dimensionesMedida = dimensionesMedida;
	    this.color = color;
	    this.nivelAguaMaximo = nivelAguaMaximo;
	    this.desagueFuncionando = false;
	    this.nivelAgua = 0;
	    this.peces = {};
	    /* Funciones */
	    this.agregarPez = function (nombre, clase, peso, espacio, lugar) {
	        this.peces[nombre] = {
	            tipo:"pez",
	            clase: clase,
	            peso: peso || 100,
	            pesoMedida: "gramos",
	            espacio: espacio || 0.05,
	            espacioMedida: "m3",
	            lugar: lugar || "Tanque principal"
	        };
	    };

	    this.quitarPez = function (nombre) {
	        var temp = this.peces[nombre];
	        delete this.peces[nombre];
	        return temp;
	    };

	    this.agregarAgua = function(litros){
	        this.nivelAgua = this.nivelAgua + litros;
	        if(this.nivelAgua >= this.nivelAguaMaximo){
	            if(!this.desagueFuncionando){
	                this.desagueFuncionando = true;
	                chivato("warn", "Se activó el sistema de desagüe de emergencia en "+this.nombre);
	            }
	            chivato("log", "nivel actual: "+this.nivelAgua);
	            this.quitarAgua(this.nivelAgua-this.nivelAguaMaximo);
	        }
	    };

	    this.quitarAgua = function(litros){
	        this.nivelAgua = this.nivelAgua-litros;
	        if(this.desagueFuncionando){
	            this.desagueFuncionando = false;
	            chivato("log", "Se desactivo el sistema de desagüe de emergencia en "+this.nombre);
	        }
	        chivato("log", "nivel actual: "+this.nivelAgua);
	    };
	};

	var constructorCama = function (nombre, capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo, sustrato) {
	    this.nombre = nombre;
	    this.capacidad = capacidad;
	    this.capacidadMedida = capacidadMedida;
	    this.dimensiones = alto * ancho *largo;
	    this.alto = alto;
	    this.ancho = ancho;
	    this.largo = largo;
	    this.medida = dimensionesMedida;
	    this.color = color;
	    this.nivelAguaMaximo = nivelAguaMaximo;
	    this.sustrato = sustrato;
	    this.desagueFuncionando = false;
	    this.nivelAgua = 0;
	    this.plantas = {};
	    /* Funciones */

	    this.agregarPlanta = function (nombre, clase, frutosDisponibles, estadoActual, espacio, lugar) {
	    this.plantas[nombre] = {
	        nombre: nombre,
	        tipo: "planta",
	        clase: clase,
	        frutosDisponibles: frutosDisponibles,
	        estadoActual: estadoActual,
	        espacio: espacio || 0.05,
	        espacioMedida: "m3",
	        lugar: lugar || "Cama principal"
	        };
	    };

	    this.quitarPlanta = function (nombre) {
	        var temp = this.plantas[nombre];
	        delete this.plantas[nombre];
	        return temp;
	    };

	    this.agregarAgua = function(litros){
	        this.nivelAgua = this.nivelAgua + litros;
	        if(this.nivelAgua >= this.nivelAguaMaximo){
	            if(!this.desagueFuncionando){
	                this.desagueFuncionando = true;
	                chivato("warn", "Se activó el sistema de desagüe de emergencia en "+this.nombre);
	            }
	            chivato("log", "nivel actual: "+this.nivelAgua);
	            this.quitarAgua(this.nivelAgua-this.nivelAguaMaximo);
	        }
	    };
	    this.quitarAgua = function(litros){
	        this.nivelAgua = this.nivelAgua-litros;
	        if(this.desagueFuncionando){
	            this.desagueFuncionando = false;
	            chivato("log", "Se desactivo el sistema de desagüe de emergencia en "+this.nombre);
	        }
	        chivato("log", "nivel actual: "+this.nivelAgua);
	    };
	};


	acuApp.tanque1 = new constructorTanque("Tanque principal",40, "Litros", 30.5, 25.5, 51, "Cm", "Gris Claro", 2);
	acuApp.cama1 = new constructorCama("Cama principal", 10, "Litros", 10, 25.5, 51, "Cm", "Rojo", 5, "Piedra volcánica");
	acuApp.cama1.agregarPlanta("zanahoria1", "hortaliza", false, "planton");
	acuApp.cama1.agregarPlanta("zanahoria2", "hortaliza", true, "cosechable");
	acuApp.cama1.agregarPlanta("zanahoria3", "hortaliza", false, "semilla");
	acuApp.cama1.agregarPlanta("zanahoria4", "hortaliza", false, "semilla");
	var zanahoriaDescartada = acuApp.cama1.quitarPlanta("zanahoria4");
	acuApp.tanque1.agregarPez("Koi1", "aguas fria", 200);
	acuApp.tanque1.agregarPez("Koi2", "aguas fria", 200);
	acuApp.tanque1.agregarPez("pleco", "invasora", 400, 0.5);
	acuApp.tanque1.agregarPez("pleco2", "invasora", 1000, 1.5);
	var plecoDescartado = acuApp.tanque1.quitarPez("pleco2");
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
	var debugMode = true;

	function chivato (tipo, mensaje) {
	    if (debugMode) {
	        if(tipo == "warn"){
	            console.warn(mensaje);
	        } else {
	            console.log(mensaje);
	        }
	    }
	}

	var acuApp = acuApp || {};

	// Constructores
	var constructorTanque = function (nombre, capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo) {
	    this.nombre = nombre;
	    this.capacidad = capacidad;
	    this.capacidadMedida = capacidadMedida;
	    this.dimensiones = alto * ancho * largo;
	    this.alto = alto;
	    this.ancho = ancho;
	    this.largo = largo;
	    this.dimensionesMedida = dimensionesMedida;
	    this.color = color;
	    this.nivelAguaMaximo = nivelAguaMaximo;
	    this.desagueFuncionando = false;
	    this.nivelAgua = 0;
	    this.peces = {};
	    /* Funciones */
	    this.agregarPez = function (nombre, clase, peso, espacio, lugar) {
	        this.peces[nombre] = {
	            tipo:"pez",
	            clase: clase,
	            peso: peso || 100,
	            pesoMedida: "gramos",
	            espacio: espacio || 0.05,
	            espacioMedida: "m3",
	            lugar: lugar || "Tanque principal"
	        };
	    };

	    this.quitarPez = function (nombre) {
	        var temp = this.peces[nombre];
	        delete this.peces[nombre];
	        return temp;
	    };

	    this.agregarAgua = function(litros, nitratos, nitritos, durezaSales, carbonatos, ph, cloro){
	        this.calidadAgua = this.calidadAgua || {};
	        // Nitratos
	        this.calidadAgua["nitratos"] = this.calidadAgua["nitratos"] || {};
	        this.calidadAgua["nitratos"]["valor"] = nitratos || 10;
	        this.calidadAgua["nitratos"]["medida"] = "mg/l";
	        this.calidadAgua["nitratos"]["simbolo"] = "NO3";
	        // Nitritos
	        this.calidadAgua["nitritos"] = this.calidadAgua["nitritos"] || {};
	        this.calidadAgua["nitritos"]["valor"] = nitritos || 0.5;
	        this.calidadAgua["nitritos"]["medida"] = "mg/l";
	        this.calidadAgua["nitritos"]["simbolo"] = "NO2";
	        // Dureza de Sales
	        this.calidadAgua["dureza de sales"] = this.calidadAgua["dureza de sales"] || {};
	        this.calidadAgua["dureza de sales"]["valor"] = durezaSales || ">7ºd";
	        this.calidadAgua["dureza de sales"]["medida"] = "N/A";
	        this.calidadAgua["dureza de sales"]["simbolo"] = "GH";
	        // Carbonatos
	        this.calidadAgua["carbonatos"] = this.calidadAgua["carbonatos"] || {};
	        this.calidadAgua["carbonatos"]["valor"] = carbonatos || "6ºd";
	        this.calidadAgua["carbonatos"]["medida"] = "N/A";
	        this.calidadAgua["carbonatos"]["simbolo"] = "KH";
	        // PH
	        this.calidadAgua["ph"] = this.calidadAgua["ph"] || {};
	        this.calidadAgua["ph"]["valor"] = ph || 7.2;
	        this.calidadAgua["ph"]["medida"] = "N/A";
	        this.calidadAgua["ph"]["simbolo"] = "PH";
	        // Cloro (CL2 mg/l)
	        this.calidadAgua["cloro"] = this.calidadAgua["cloro"] || {};
	        this.calidadAgua["cloro"]["valor"] = cloro || 0.2;
	        this.calidadAgua["cloro"]["medida"] = "mg/l";
	        this.calidadAgua["cloro"]["simbolo"] = "CL2";
	        // Manejo de caudal
	        this.nivelAgua += litros;
	        if(this.nivelAgua >= this.nivelAguaMaximo){
	            if(!this.desagueFuncionando){
	                this.desagueFuncionando = true;
	                chivato("warn", "Se activó el sistema de desagüe de emergencia en "+this.nombre);
	            }
	            chivato("log", "nivel actual: "+this.nivelAgua);
	            this.quitarAgua(this.nivelAgua-this.nivelAguaMaximo);
	        }
	    };

	    this.quitarAgua = function(litros){
	        this.nivelAgua = this.nivelAgua-litros;
	        if(this.desagueFuncionando){
	            this.desagueFuncionando = false;
	            chivato("log", "Se desactivo el sistema de desagüe de emergencia en "+this.nombre);
	        }
	        chivato("log", "nivel actual: "+this.nivelAgua);
	    };

	    this.calcularFrios = function(){
	        var numero = 0;
	        for (var key in this.peces){
	            if(this.peces[key].clase == "aguas fria"){
	                numero++;
	            }
	        }
	        this.peces["total aguas fria"] = numero;
	    };    

	    this.calcularInvasores = function(){
	        var numero = 0;
	        for (var key in this.peces){
	            if(this.peces[key].clase == "invasora"){
	                numero++;
	            }
	        }
	        this.peces["total invasora"] = numero;
	    };

	    this.estadoGeneral = function(){

	        this.calcularInvasores();    
	        this.calcularFrios();

	        var resumenGeneral = "================================\n";
	        resumenGeneral += "Estado del Agua\n";
	        resumenGeneral += "================================\n";
	        resumenGeneral += "Agua disponible: "+this.nivelAgua+"/"+nivelAguaMaximo+"l\n";
	        resumenGeneral += "Nitratos("+this.calidadAgua["nitratos"]["simbolo"]+"): "+this.calidadAgua["nitratos"]["valor"]+this.calidadAgua["nitratos"]["medida"]+"\n";
	        resumenGeneral += "Nitritos("+this.calidadAgua["nitritos"]["simbolo"]+"): "+this.calidadAgua["nitritos"]["valor"]+this.calidadAgua["nitritos"]["medida"]+"\n";
	        resumenGeneral += "Dureza de sales("+this.calidadAgua["dureza de sales"]["simbolo"]+"): "+this.calidadAgua["dureza de sales"]["valor"]+"\n";
	        resumenGeneral += "Carbonatos("+this.calidadAgua["carbonatos"]["simbolo"]+"): "+this.calidadAgua["carbonatos"]["valor"]+"\n";
	        resumenGeneral += "Ph("+this.calidadAgua["ph"]["simbolo"]+"): "+this.calidadAgua["ph"]["valor"]+"\n";
	        resumenGeneral += "Cloro("+this.calidadAgua["cloro"]["simbolo"]+"): "+this.calidadAgua["cloro"]["valor"]+this.calidadAgua["cloro"]["medida"]+"\n";
	        resumenGeneral += "================================\n";
	        resumenGeneral += "Estado de los Peces\n";
	        resumenGeneral += "================================\n";
	        resumenGeneral += "Total de Agua Fria: "+this.peces["total aguas fria"]+"\n";
	        resumenGeneral += "Total de Invasores: "+this.peces["total invasora"]+"\n";
	        resumenGeneral += "================================\n";

	        console.log(resumenGeneral);
	    };
	};

	var constructorCama = function (nombre, capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo, sustrato) {
	    this.nombre = nombre;
	    this.capacidad = capacidad;
	    this.capacidadMedida = capacidadMedida;
	    this.dimensiones = alto * ancho *largo;
	    this.alto = alto;
	    this.ancho = ancho;
	    this.largo = largo;
	    this.medida = dimensionesMedida;
	    this.color = color;
	    this.nivelAguaMaximo = nivelAguaMaximo;
	    this.sustrato = sustrato;
	    this.desagueFuncionando = false;
	    this.nivelAgua = 0;
	    this.plantas = {};
	    /* Funciones */

	    this.agregarPlanta = function (nombre, clase, frutosDisponibles, estadoActual, espacio, lugar) {
	    this.plantas[nombre] = {
	        nombre: nombre,
	        tipo: "planta",
	        clase: clase,
	        frutosDisponibles: frutosDisponibles,
	        estadoActual: estadoActual,
	        espacio: espacio || 0.05,
	        espacioMedida: "m3",
	        lugar: lugar || "Cama principal"
	        };
	    };

	    this.quitarPlanta = function (nombre) {
	        var temp = this.plantas[nombre];
	        delete this.plantas[nombre];
	        return temp;
	    };

	    this.agregarAgua = function(litros, nitratos, nitritos, durezaSales, carbonatos, ph, cloro){
	        this.calidadAgua = this.calidadAgua || {};
	        // Nitratos
	        this.calidadAgua["nitratos"] = this.calidadAgua["nitratos"] || {};
	        this.calidadAgua["nitratos"]["valor"] = nitratos || 10;
	        this.calidadAgua["nitratos"]["medida"] = "mg/l";
	        this.calidadAgua["nitratos"]["simbolo"] = "NO3";
	        // Nitritos
	        this.calidadAgua["nitritos"] = this.calidadAgua["nitritos"] || {};
	        this.calidadAgua["nitritos"]["valor"] = nitritos || 0.5;
	        this.calidadAgua["nitritos"]["medida"] = "mg/l";
	        this.calidadAgua["nitritos"]["simbolo"] = "NO2";
	        // Dureza de Sales
	        this.calidadAgua["dureza de sales"] = this.calidadAgua["dureza de sales"] || {};
	        this.calidadAgua["dureza de sales"]["valor"] = durezaSales || ">7ºd";
	        this.calidadAgua["dureza de sales"]["medida"] = "N/A";
	        this.calidadAgua["dureza de sales"]["simbolo"] = "GH";
	        // Carbonatos
	        this.calidadAgua["carbonatos"] = this.calidadAgua["carbonatos"] || {};
	        this.calidadAgua["carbonatos"]["valor"] = carbonatos || "6ºd";
	        this.calidadAgua["carbonatos"]["medida"] = "N/A";
	        this.calidadAgua["carbonatos"]["simbolo"] = "KH";
	        // PH
	        this.calidadAgua["ph"] = this.calidadAgua["ph"] || {};
	        this.calidadAgua["ph"]["valor"] = ph || 7.2;
	        this.calidadAgua["ph"]["medida"] = "N/A";
	        this.calidadAgua["ph"]["simbolo"] = "PH";
	        // Cloro (CL2 mg/l)
	        this.calidadAgua["cloro"] = this.calidadAgua["cloro"] || {};
	        this.calidadAgua["cloro"]["valor"] = cloro || 0.2;
	        this.calidadAgua["cloro"]["medida"] = "mg/l";
	        this.calidadAgua["cloro"]["simbolo"] = "CL2";
	        // Manejo de caudal
	        this.nivelAgua = this.nivelAgua + litros;
	        if(this.nivelAgua >= this.nivelAguaMaximo){
	            if(!this.desagueFuncionando){
	                this.desagueFuncionando = true;
	                chivato("warn", "Se activó el sistema de desagüe de emergencia en "+this.nombre);
	            }
	            chivato("log", "nivel actual: "+this.nivelAgua);
	            this.quitarAgua(this.nivelAgua-this.nivelAguaMaximo);
	        }
	    };
	    this.quitarAgua = function(litros){
	        this.nivelAgua = this.nivelAgua-litros;
	        if(this.desagueFuncionando){
	            this.desagueFuncionando = false;
	            chivato("log", "Se desactivo el sistema de desagüe de emergencia en "+this.nombre);
	        }
	        chivato("log", "nivel actual: "+this.nivelAgua);
	    };

	    this.calcularHortalizas = function(){
	        var numero = 0;
	        for (var key in this.plantas){
	            if(this.plantas[key].clase == "hortaliza"){
	                numero++;
	            }
	        }
	        this.plantas["total hortalizas"] = numero;
	    };

	    this.estadoGeneral = function(){

	        this.calcularHortalizas();

	        var resumenGeneral = "================================\n";
	        resumenGeneral += "Estado del Agua\n";
	        resumenGeneral += "================================\n";
	        resumenGeneral += "Agua disponible: "+this.nivelAgua+"/"+nivelAguaMaximo+"l\n";
	        resumenGeneral += "Nitratos("+this.calidadAgua["nitratos"]["simbolo"]+"): "+this.calidadAgua["nitratos"]["valor"]+this.calidadAgua["nitratos"]["medida"]+"\n";
	        resumenGeneral += "Nitritos("+this.calidadAgua["nitritos"]["simbolo"]+"): "+this.calidadAgua["nitritos"]["valor"]+this.calidadAgua["nitritos"]["medida"]+"\n";
	        resumenGeneral += "Dureza de sales("+this.calidadAgua["dureza de sales"]["simbolo"]+"): "+this.calidadAgua["dureza de sales"]["valor"]+"\n";
	        resumenGeneral += "Carbonatos("+this.calidadAgua["carbonatos"]["simbolo"]+"): "+this.calidadAgua["carbonatos"]["valor"]+"\n";
	        resumenGeneral += "Ph("+this.calidadAgua["ph"]["simbolo"]+"): "+this.calidadAgua["ph"]["valor"]+"\n";
	        resumenGeneral += "Cloro("+this.calidadAgua["cloro"]["simbolo"]+"): "+this.calidadAgua["cloro"]["valor"]+this.calidadAgua["cloro"]["medida"]+"\n";
	        resumenGeneral += "================================\n";
	        resumenGeneral += "Estado de las Plantas\n";
	        resumenGeneral += "================================\n";
	        resumenGeneral += "Total Hortalizas: "+this.plantas["total hortalizas"]+"\n";

	        console.log(resumenGeneral);
	    };
	};


	acuApp.tanque1 = new constructorTanque("Tanque principal",40, "Litros", 30.5, 25.5, 51, "Cm", "Gris Claro", 2);
	acuApp.cama1 = new constructorCama("Cama principal", 10, "Litros", 10, 25.5, 51, "Cm", "Rojo", 5, "Piedra volcánica");
	acuApp.cama1.agregarPlanta("zanahoria1", "hortaliza", false, "planton");
	acuApp.cama1.agregarPlanta("zanahoria2", "hortaliza", true, "cosechable");
	acuApp.cama1.agregarPlanta("zanahoria3", "hortaliza", false, "semilla");
	acuApp.cama1.agregarPlanta("zanahoria4", "hortaliza", false, "semilla");
	var zanahoriaDescartada = acuApp.cama1.quitarPlanta("zanahoria4");
	acuApp.tanque1.agregarPez("Koi1", "aguas fria", 200);
	acuApp.tanque1.agregarPez("Koi2", "aguas fria", 200);
	acuApp.tanque1.agregarPez("pleco", "invasora", 400, 0.5);
	acuApp.tanque1.agregarPez("pleco2", "invasora", 1000, 1.5);
	var plecoDescartado = acuApp.tanque1.quitarPez("pleco2");
	acuApp.cama1.agregarAgua(100);
	acuApp.tanque1.agregarAgua(987, 25, 0.5, ">14ºd", "3ºd", 8.0, 0.4);
	acuApp.tanque1.estadoGeneral();
	acuApp.cama1.estadoGeneral();
```