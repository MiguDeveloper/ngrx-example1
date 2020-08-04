# Principios de Ngrx: 

## Proyecto: NgrxExample1

## Conceptos

### Ideas principales

- Ngrx = redux pattern + RxJS + Angular.
- Toda la data de la aplicación se encuentra en una estructura previamente DEFINIDA.
- Toda la información de la aplicación se encontrará almacenada en un único lugar llamado STORE.
- El ```store``` JAMAS se modifica de forma directa.
- Interacciones de usuario y/o código dispara acciones que describen qué sucedió.
- El valor actual de la información de la aplicación se llama estado - ```STATE```.
- Un nuevo estado es creado, en base a la combinación del viejo estado y una acción por una función llamada ```REDUCER```.

### Patron de diseño Redux (ACTION - REDUCER - STATE - STORE)

REDUX: 
- Es el contenedor del estado de la aplicación, esto es porque básicamente la información  de toda la aplicación se concentra en un solo lugar llamado ```store```.
- Nos permite conocer: cuál es el estado de mi aplicación en este momento, qué valor tiene determinada variable, quién cambió esa variable o algúna otra variable, cómo cambio la información, en qué momento y otra información relacionada al estado de la aplicación.


ACTION
- Acción: es la única fuente de información(para el ```store``` y se envian por medio del método ```store.dispatch()```) que se envía por interacciones de usuario o programa. Por lo general, se busca que las acciones(objetos planos de javascript) sean lo más simple posible.

Una acción tiene únicamente 2 propiedades:
- ```type```: parámetro  nos describe cuál es la acción que se desea realizar(siempre es obligatorio enviarlo), completar_tarea.
- ```payload```: parámetro opcional, es la menor cantidad posible de información para realizar dicha tarea.

REDUCER
- Es una simple función que recibe unicamente 2 argumentos y siempre retorna un nuevo estado.
- oldState: es el estado actual de aplicación.
- action: es un objeto plano que indica que hay que hacer.

Consideraciones importantes:
- No deben de modificarse sus argumentos(State y action).
- No se ejecutan llamada a API's, o algún otro proceso asíncrono.
- Ejecutar funciones no puras, por ejemplo: ```Date.now(), Math.random(), etc```


STATE
- Es de solo lectura.
- Solo cambia por medio de acciones.
- Nunca se mutará el state de forma directa.
- Hay funciones prohibidas de Javascript: ```push```, manipulación directa del objeto ```oldState```.
- Un nuevo estado es creado con base en un estado anterior y una acción y devuelven un nuevo estado(función del ```reducer```).

STORE
- Jamas se modifica de forma directa.

Tiene las siguientes responsabilidades:
- Permite la lectura del estado via: ```store.getState()```.
- Permite crear un nuevo estado: ```store.dispatch(ACTION)```.
- Permite notificar cambios de estado via: ```store.subcribe(listener)```.
- Remueve las suscripciones de los listeners a través de la función que invoco el ```.subscribe(listener)``` por ejemplo
```js
const remove = subcribe(myListener);
remove(); // para remover
```
