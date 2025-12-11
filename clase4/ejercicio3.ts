/*Actividad 3: Crear una función genérica
Crea una función genérica que tome un parámetro de cualquier tipo y lo
devuelva. Prueba la función con diferentes tipos de datos. 
*/


function mostrarDato(dato: any): any {
  return dato;
}

// Pruebas con diferentes tipos
console.log(mostrarDato(123));         
console.log(mostrarDato("Hola Andrea"));
console.log(mostrarDato(true));
console.log(mostrarDato([1, 2, 3]));
console.log(mostrarDato({ nombre: "Andrea", edad: 38 }));

