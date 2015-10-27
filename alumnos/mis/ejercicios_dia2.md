#Ejercicios día 2

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


4 - Saber si hoy es un día par o impar.

```javascript
    // Escribe tu solución
```

**Continuación - Trenes**
![Foto de trenes](http://estaticos04.elmundo.es/elmundo/imagenes/2010/06/29/1277838432_0.jpg)


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


10 - Refactorizamos y dejamos todo preparado para incluirlo en nuestro html, usando lo que hemos aprendido.
Evitando tambien que las funciones puedan ser accedidas desde la consola u otras librerias.

```javascript
    // Escribe tu solución
```

11 (opcional) - Integrarlo con el html y bloquea el uso del de las funciones por consola

```javascript
	// Ejercicio Opcional
```


**Ejercicios Repaso - Sistema complejo usando POO**

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
var tanque = function (capacidad, largo, ancho, alto, color,nivelMaxAgua){
    this.capacidad = capacidad;
    this.largo = largo;
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
    this.nivelMaxAgua = nivelMaxAgua;
};
var cama = function (capacidad, largo, ancho, alto, color,nivelMaxAgua,sustrato){
    this.capacidad = capacidad;
    this.largo = largo;
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
    this.nivelMaxAgua = nivelMaxAgua;
    this.sustrato = sustrato;
};
var miTanque = new tanque(40,51,25.5,30.5,"Gris Claro",29);
var miCama = new cama(10,51,25.5,10,"Rojo",5,"Piedra volcánica");
```


2 - Añadamos el agua, para lo que necesitaremos un sistema para añadir y quitar agua, además de un desagüe automático que nos avise cuando el nivel del agua sea más alto de los esperado y evacue el sobrante.

```javascript
var tanque = function (capacidad, largo, ancho, alto, color,nivelMaxAgua){
    this.capacidad = capacidad;
    this.largo = largo;
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
    this.nivelMaxAgua = nivelMaxAgua;
    
    this.agua = 0;
    
    this.llenado = function (cuanta){
        console.log("LLenado - Tenia " + this.agua + " litros de agua");
        this.agua+=cuanta;
        console.log("LLenado - Ahora tengo " + this.agua + " litros de agua");
        this.desague();
    }
    
    this.desague = function (){
        if (this.nivelMaxAgua < this.agua) {
            console.log("Vaciado - Tenia " + this.agua + " litros de agua");
            this.agua=this.nivelMaxAgua;
            console.log("Vaciado - Ahora tengo " + this.agua + " litros de agua");
        }
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
        console.log("LLenado - Tenia " + this.agua + " litros de agua");
        this.agua+=cuanta;
        console.log("LLenado - Ahora tengo " + this.agua + " litros de agua");
        this.desague();
    }
    
    this.desague = function (){
        if (this.nivelMaxAgua < this.agua) {
            console.log("Vaciado - Tenia " + this.agua + " litros de agua");
            this.agua=this.nivelMaxAgua;
            console.log("Vaciado - Ahora tengo " + this.agua + " litros de agua");
        }
    }
};

var miTanque = new tanque(40,51,25.5,30.5,"Gris Claro",29);
var miCama = new cama(10,51,25.5,10,"Rojo",5,"Piedra volcánica");

miTanque.llenado(7);
miTanque.llenado(7);
miTanque.llenado(7);
miTanque.llenado(7);
miTanque.llenado(7);
miCama.llenado(7);
miCama.llenado(7);
miCama.llenado(7);
miCama.llenado(7);
miCama.llenado(7);

```


3 - Añadamos ahora nuestras plantas y nuestros peces
- (opcional) teniendo en cuenta sus necesidades de espacio.
- Incluir una función para quitar peces y vegetales.

```javascript
tanque.prototype.peces=0;
tanque.prototype.addPeces = function(cuanto){
    console.log("LLenado - Tenia " + this.peces + " peces");
    this.peces+=cuanto;
    console.log("LLenado - Ahora tengo " + this.peces + " peces");
}
cama.prototype.plantas=0;
cama.prototype.addPlantas = function(cuanto){
    console.log("LLenado - Tenia " + this.plantas + " peces");
    this.plantas+=cuanto;
    console.log("LLenado - Ahora tengo " + this.plantas + " peces");
}

```


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