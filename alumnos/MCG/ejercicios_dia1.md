**Ejercicios Miguel Angel Cruz MCG**
> Vamos a crear un sistema de control para el metro. Nuestro objetivo será desarrollar una aplicación para gestionarlo todo. Con este ejercicio nos centraremos en aplicar conceptos básicos de JavaScript

![Foto de trenes](http://estaticos04.elmundo.es/elmundo/imagenes/2010/06/29/1277838432_0.jpg)


1 - Quiero saber del total de trenes cuantos hay operativos.
    El formato de la respuesta es *"x de x funcionando hoy"*.

```javascript
    // Escribe tu solución
```
function trenes(){
    var x = 10;
    var y = 20;
    console.log(x + " de " + y + " funcionando hoy");
}

2 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada.

```javascript
    // Escribe tu solución
```


3 - Refactoriza... usando *while*.

```javascript
    // Escribe tu solución
    function trenesConWhile(){
        var x = 10;
        var y = 20;
        while (x <= y) {
            console.log(x + " de " + y + " funcionando hoy");
            x++;
        }
    }
```


4 - Refactoriza.. usando *for*.

```javascript
    // Escribe tu solución
    function trenesConFor(){
        var x = 10;
        var y = 20;
        for (x = 0; x <= y; x++) { 
            console.log(x + " de " + y + " funcionando hoy");
        }
    }
```


5 - Refactoriza.. usando *Do... While*.

```javascript
    // Escribe tu solución
    function trenesConDoWhile(){
        var x = 10;
        var y = 20;
        do {
            console.log(x + " de " + y + " funcionando hoy");
            x++;
        }
        while (x <= y);
    }
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