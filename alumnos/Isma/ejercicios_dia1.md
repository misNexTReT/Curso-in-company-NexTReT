**Ejercicios**
> Vamos a crear un sistema de control para el metro. Nuestro objetivo será desarrollar una aplicación para gestionarlo todo. Con este ejercicio nos centraremos en aplicar conceptos básicos de JavaScript

![Foto de trenes](http://estaticos04.elmundo.es/elmundo/imagenes/2010/06/29/1277838432_0.jpg)


1 - Quiero saber del total de trenes cuantos hay operativos.
    El formato de la respuesta es *"x de x funcionando hoy"*.

```javascript
    var existentes;
    var funcionando;
    function mostrarOperativos(existentes,funcionando) {
        return texto = funcionando + "de " + existentes + "funcionando hoy";
    }
    console.log(mostrarOperativos(6,3));
```


2 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada.

```javascript
    // Escribe tu solución
```


3 - Refactoriza... usando *while*.

```javascript
    var trenes = [];
    trenes[1] = "funcionando";
    trenes[2] = "parado";
    trenes[3] = "funcionando";
    trenes[4] = "parado";
    trenes[5] = "funcionando";
    var i = 1;
    while(i <= 5){
        console.log("El tren " + i +" esta " + trenes[i]);
        i++;
    };
```


4 - Refactoriza.. usando *for*.

```javascript
    var trenes = [];
    trenes[1] = "funcionando";
    trenes[2] = "parado";
    trenes[3] = "funcionando";
    trenes[4] = "parado";
    trenes[5] = "funcionando";
    var i = 1;
    for(i = 1;i <= 5;i++){
        console.log("El tren " + i +" esta " + trenes[i]);
    };
```


5 - Refactoriza.. usando *Do... While*.

```javascript
    var trenes = [];
    trenes[1] = "funcionando";
    trenes[2] = "parado";
    trenes[3] = "funcionando";
    trenes[4] = "parado";
    trenes[5] = "funcionando";
    var i = 1;
    do{
        console.log("El tren " + i +" esta " + trenes[i]);
        i++;
    } while (i <= 5);
```


6 - Del total de trenes... ¿cuantos tengo parados?

```javascript
    // Escribe tu solución
```


7 - Refactoricemos y juntemos los dos bucles dentro de una misma función. Así se imprime por consola tanto los trenes que estan funcionanado como los que estan parados

```javascript
    // Escribe tu solución
```


8 - **#simplifiquemos!** Quiero solo un bucle para todo.

```javascript
    // Escribe tu solución
```


9 - **#compliquemos!** Servicio nocturno en el tren 10.
*Nota: Frente al ejercicio anterior, en este caso queremos que siempre que hablemos del
tren 10 se especifique que es nocturno. Independientemente de si esta parado o funcionando.*

```javascript
    // Escribe tu solución
```


10 - Refactoricemos - ¿Y si todos los trenes están en las vías funcionando o por el contrario si ninguno de los trenes esta funcionando?.

```javascript
    // Escribe tu solución
```


11 - El servicio nocturno se queda un poco corto y necesitamos añadir un nuevo tren de refuerzo.
El 12 será destinado a cubrir esta necesidad, exactamente igual que el 10 anteriormente.

```javascript
    // Escribe tu solución
```


12 - El departamento de Marketing ha decidido lanzar un nuevo servicio los sábados.
 El "tren fiestero" será un tren adaptado a un público más intrépido y funcionará solo en los sábados.
 Este tren será el número 3.

*NOTA: EL TREN 3 SOLO FUNCIONA LOS SÁBADOS. Es necesario incluir el día de la semana en tu código*


```javascript
    // Escribe tu solución
```