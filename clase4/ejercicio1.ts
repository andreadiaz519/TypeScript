/*Usar For...In para recorrer propiedades de un objeto
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un
bucle for...in para recorrer y mostrar cada propiedad y su valor.*/


let persona: any = {
  nombre: "Ana",
  edad: 20,
  ciudad: "Bogotá"
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

console.log(`El nombre de la persona es ${persona.nombre}, tiene ${persona.edad} años y es de ${persona.ciudad}`)