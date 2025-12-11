/*Ejercicio 1: Declarar y usar funciones con tipos
Consigna: Crea una función llamada multiplicarNumeros que acepte dos parámetros, ambos de tipo number, y retorne el producto de ambos números. Luego, muestra el resultado en consola llamando a la función. */

function multiplicarNumeros(a: number, b: number): number {
  return a * b;
}

console.log(multiplicarNumeros(4, 5));


/*Ejercicio 2: Uso de funciones con parámetros opcionales
Consigna: Define una función llamada saludar que acepte un parámetro nombre de tipo string y otro opcional saludo de tipo string. Si el parámetro saludo no es proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y muestra el resultado en la consola. */

function saludar(nombre: string, saludo: string = "Hola"): string {
  return `${saludo} ${nombre}`;
}

console.log(saludar("Andrea"));
console.log(saludar("Andrea", "Buenos días"));


/*Ejercicio 3: Creación y manipulación de objetos
Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre (string), deporte (string), y energia (number). Luego, define una función entrenar que acepte el objeto deportista y un número de horas de entrenamiento, disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al final, muestra el estado del deportista en la consola.*/


let deportista = {
  nombre: "Juan",
  deporte: "Fútbol",
  energia: 100
};


function entrenar(persona: { nombre: string; deporte: string; energia: number }, horas: number): void {
  persona.energia -= horas * 5;
}


entrenar(deportista, 3);


console.log(deportista);


/*Ejercicio 4: Función que devuelve un objeto
Consigna: Crea una función llamada crearLibro que acepte tres parámetros: titulo (string), autor (string) y paginas (number). La función debe devolver un objeto con esas propiedades. Luego, crea dos libros utilizando la función y muestra sus detalles en la consola.*/

function crearLibro(titulo: string, autor: string, paginas: number) {
  return {
    titulo: titulo,
    autor: autor,
    paginas: paginas
  };
}

const libro1 = crearLibro("Don Quijote", "Miguel de Cervantes", 863);
const libro2 = crearLibro("Cien años de soledad", "Gabriel García Márquez", 417);

console.log(libro1);
console.log(libro2);


/*Ejercicio 5: Función con parámetros rest
Consigna: Crea una función llamada sumarTodos que acepte una cantidad indefinida de números y devuelva su suma. Luego, llama a la función con varios números y muestra el resultado en la consola.*/

function sumarTodos(...numeros: number[]): number {
  let total = 0;

  for (let n of numeros) {
    total += n;
  }

  return total;
}

console.log(sumarTodos(1, 2, 3));           // 6
console.log(sumarTodos(5, 10, 15, 20));     // 50
console.log(sumarTodos(100));               // 100
