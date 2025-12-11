/*Actividad 7: Aserciones y genéricos con funciones y objetos

Crea una función genérica llamada procesarObjeto que reciba un objeto
genérico y:
1. Use un bucle for...in para recorrer sus propiedades.
2. Si el valor de una propiedad es una cadena de texto (string), conviértelo a
minúsculas.
3. Si es un número (number), elévalo al cuadrado.
4. Si es un booleano, invierte su valor.
Usa aserciones de tipo para realizar las transformaciones.*/

function procesarObjeto(obj: any): any {

  for (let propiedad in obj) {
    let valor = obj[propiedad];

    if (typeof valor === "string") {
      obj[propiedad] = (valor as string).toLowerCase();
    } 
    else if (typeof valor === "number") {
      obj[propiedad] = (valor as number) ** 2;
    } 
    else if (typeof valor === "boolean") {
      obj[propiedad] = !(valor as boolean);
    }
  }

  return obj;
}

// Ejemplo
let persona = {
  nombre: "ANA",
  edad: 4,
  activo: true
};

let resultado = procesarObjeto(persona);
console.log(resultado);
