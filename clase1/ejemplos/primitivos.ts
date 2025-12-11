//Ejemplos de tipos de datos primitivos en TS

//1. string: Cadenas de texto

let nombre: string = "Ada Loveleace";
let saludo: string = `Hola, ${nombre}, bienvenida a TypeScript!`;
console.log(saludo);
console.log("\n------------------\n");

//2. Number: (numeros, enteros, decimales o notacion cientifica)

let numEntero: number = 42;
let numDecimal: number =3.14;
let numCientifico: number = 1e5; //Notacion cientifica equivale a 100000
console.log("Entero", numEntero);
console.log("Decimal", numDecimal);
console.log("Cientifico", numCientifico);
console.log("\n------------------\n");

//3. boleanos (valores logicos true o false)

let esEstudiante: boolean = true;
let tieneLicencia: boolean = false;
console.log("¿Es estudiante?", esEstudiante);
console.log("¿Tiene Licencia?", tieneLicencia);
console.log("\n------------------\n");

// 4. null (Ausencia intencinal de un valor)

let valorNulo: null = null;
console.log("Valor nulo", valorNulo);


// 5. undefined (Valor no inicializado)

let valorIndefinido: undefined;
console.log("Valor indefinido", valorIndefinido);
console.log("\n------------------\n");

//6. symbol (simbolos unicos)

let id1: symbol = Symbol('id');
let id2: symbol = Symbol('id');
console.log("Son simbolos unicos?:", id1 === id2);
