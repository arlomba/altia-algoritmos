# Explicación

El algoritmo primero compara si `playerOne` y `playerTwo` utilizan el mismo estado, de ser así devuelve _Draw!_. Después calculo los casos en el que `playerOne` gana a `playerTwo`, de ser así devuelvo _Player one won!_, en caso contrario devuelvo _Player two won!_.

## Constantes

Declaro estas constantes porque sé que son valores que nunca van a cambiar durante la ejecución de la aplicación, es una preferencia personal sobre `let` basada en buenas prácticas. Si alguna vez quisiera modificar sus valores, únicamente tendría que modificar una parte de mi código en lugar de buscar las cadenas de texto por toda la aplicación.

```js
const STATE_ROCK = "ROCK";
const STATE_PAPER = "PAPER";
const STATE_SCISSORS = "SCISSORS";
const PLAYER_ONE_WON = "Player one won!";
const PLAYER_TWO_WON = "Player two won!";
```

## Operador ternario

El operador ternario (`?` y `:`) se utiliza como una alternativa a `if` y `else` para crear una expresión más concisa, su sintaxis es: `Condición ? Expresión si se cumple la condición : Expresión si no se cumple la condición`. El siguiente ejemplo implementa la misma funcionalidad:

```js
function canLogin(isAdmin) {
  if (isAdmin) {
    return "Bienvenido, administrador";
  } else {
    return "Acceso denegado";
  }
}

function canLogin(isAdmin) {
  return isAdmin ? "Bienvenido, administrador" : "Acceso denegado";
}

console.log(canLogin(true)); // Devolverá: Bienvenido, administrador
console.log(canLogin(false)); // Devolverá: Acceso denegado
```
