// 1. "any" Permite almacenar cualquier tipo de dato sin restriccion

let anyValue: any = "Hola soy un valor de tipo any" //Inicialmente es un string
console.log(anyValue);
anyValue = 35; //Ahora le estoy asignando un numero
console.log(anyValue);
anyValue ={ name: "typescript"} //ahora es un objeto
console.log(anyValue);
console.log("\n------------------\n");


// 2. unknown: Similar a any pero va a requerir  verificacion de tipo 
let unknownValue: unknown = 6;
console.log(unknownValue);

//Hacemos la verificacion de tipo 
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
} else {
    console.log("El tipo de dato no es string.")
}
console.log("\n------------------\n");

//3. void se utiliza en funciones que no retornan valor
function logMessage(message: string): void {
    console.log(message);
}
console.log("Esto es una funcion void");

console.log("\n------------------\n");

// Never : Reptresenta funciones que no van a retornar nada como las que arrojan errores o bubles infititos
function throwError(ErrMessage: string): never {
    throw new Error(ErrMessage);
}
//throwError('Esto es un error y nunca retorna nada.')

function infiniteLoop(): never {
    while (true) {
        console.log("Este bucle nunca termina")
    }
}
//infiniteLoop();

console.log("\n------------------\n");

// 5. null y undefined Representan ausencia de valor
let nullValue: string | null = null // El valor puede ser de tipo string o null
console.log(nullValue);
nullValue = "Ahora tiene valor de string"

let undefinedValue: undefined = undefined; //Solo puede ser undefined
console.log(undefinedValue);

// 6. object: Representa cualquier valor que no sea primitivo

let objectValue: object = { key: "value"};
console.log(objectValue);

objectValue = [1, 2, 3];
console.log(objectValue);

console.log("\n------------------\n");

// 7. symbol: Donde cada simbolo es unico, inluso con la misma descripcion
let symbol1: symbol = Symbol("miSimbolo");
let symbol2: symbol = Symbol("miSimbolo");
console.log(symbol1 === symbol2); // retornar: falso porque cada simbolo es unico 

//Ejemplo de uso de todos los tipos de datos en un cont4exto 

function processData(valor: any): void {
    if (typeof valor === "string"){
        console.log("El valor ingresado es una cadena.", valor);
    } else if (typeof valor === "number"){
        console.log("El valor ingresado es un numero.", valor);
    } else if (valor === null || valor === undefined) {
        console.log("El valor ingresado es un null o undefined", valor);
    } else {
        console.log("El valor ingresado es de otro tipo.", valor);
    }
}

processData("Texto");
processData("123");
processData("null");
processData("undefined");
processData({key: "valor"});

