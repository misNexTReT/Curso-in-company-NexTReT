**Ejercicios**
> Vamos a crear un sistema de control para el metro. Nuestro objetivo será desarrollar una aplicación para gestionarlo todo. Con este ejercicio nos centraremos en aplicar conceptos básicos de JavaScript

![Foto de trenes](http://estaticos04.elmundo.es/elmundo/imagenes/2010/06/29/1277838432_0.jpg)


1 - Quiero saber del total de trenes cuantos hay operativos.
    El formato de la respuesta es *"x de x funcionando hoy"*.

```javascript
function howManyTrains(total, running){
    console.log(running + " de " + total + " estan funcionando hoy");
}

howManyTrains(10,4);
```


2 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada.

```javascript
function howManyTrains(total, running){
    for (int i=0; i<total; i++)
    if (i<running){
        console.log("El tren "  (i+1) + " de " + total + " está funcionando hoy");
    } else {
        console.log("El tren "  (i+1) + " de " + total + " no está funcionando hoy");
    }
}
howManyTrains(10,4);
```


3 - Refactoriza... usando *while*.

```javascript
    // Escribe tu solución
```


4 - Refactoriza.. usando *for*.

```javascript
    // Escribe tu solución
```


5 - Refactoriza.. usando *Do... While*.

```javascript
    // Escribe tu solución
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