/*Ejercicio 1: Declarar y usar funciones con tipos
Consigna: Crea una función llamada multiplicarNumeros que acepte dos parámetros, ambos de tipo number, y retorne el producto de ambos números. Luego, muestra el resultado en consola llamando a la función. */
function multiplicarNumeros(a, b) {
    return a * b;
}
console.log(multiplicarNumeros(4, 5));
/*Ejercicio 2: Uso de funciones con parámetros opcionales
Consigna: Define una función llamada saludar que acepte un parámetro nombre de tipo string y otro opcional saludo de tipo string. Si el parámetro saludo no es proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y muestra el resultado en la consola. */
function saludar(nombre, saludo) {
    if (saludo === void 0) { saludo = "Hola"; }
    return "".concat(saludo, " ").concat(nombre);
}
console.log(saludar("Andrea"));
console.log(saludar("Andrea", "Buenos días"));
/*Ejercicio 3: Creación y manipulación de objetos
Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre (string), deporte (string), y energia (number). Luego, define una función entrenar que acepte el objeto deportista y un número de horas de entrenamiento, disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al final, muestra el estado del deportista en la consola.*/
var deportista = {
    nombre: "Juan",
    deporte: "Fútbol",
    energia: 100
};
function entrenar(persona, horas) {
    persona.energia -= horas * 5;
}
entrenar(deportista, 3);
console.log(deportista);
/*Ejercicio 4: Función que devuelve un objeto
Consigna: Crea una función llamada crearLibro que acepte tres parámetros: titulo (string), autor (string) y paginas (number). La función debe devolver un objeto con esas propiedades. Luego, crea dos libros utilizando la función y muestra sus detalles en la consola.*/
function crearLibro(titulo, autor, paginas) {
    return {
        titulo: titulo,
        autor: autor,
        paginas: paginas
    };
}
var libro1 = crearLibro("Don Quijote", "Miguel de Cervantes", 863);
var libro2 = crearLibro("Cien años de soledad", "Gabriel García Márquez", 417);
console.log(libro1);
console.log(libro2);
/*Ejercicio 5: Función con parámetros rest
Consigna: Crea una función llamada sumarTodos que acepte una cantidad indefinida de números y devuelva su suma. Luego, llama a la función con varios números y muestra el resultado en la consola.*/
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numeros_1 = numeros; _a < numeros_1.length; _a++) {
        var n = numeros_1[_a];
        total += n;
    }
    return total;
}
console.log(sumarTodos(1, 2, 3)); // 6
console.log(sumarTodos(5, 10, 15, 20)); // 50
console.log(sumarTodos(100)); // 100
