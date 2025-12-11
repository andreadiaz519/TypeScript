/*Actividad 5: Usar aserciones dobles

Crea una variable de tipo any y haz una conversión con aserciones dobles para
convertirla en un number. Muestra el resultado.*/

let dato: any = "123";

// Aserción doble: primero a unknown, luego a number
let numero: number = (dato as unknown) as number;

console.log(numero);

