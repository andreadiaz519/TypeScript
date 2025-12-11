 /*Actividad 4: Usar aserciones de tipo

Declara una variable de tipo any y usa una aserción para tratarla como string,
accediendo a la propiedad .length.*/

let dato: any = "Hola mundo";

// Aserción de tipo
let longitud: number = (dato as string).length;

console.log(longitud);
