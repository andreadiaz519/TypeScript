/*Ejercicio 3: Clases y Objetos
1. Define una clase llamada Animal con propiedades nombre y tipo, y un
método hacerSonido().
2. Crea una instancia de la clase Animal y llama al método*/

// 1. Definimos la clase Animal
class Animal {
  nombre: string;
  tipo: string;

  // Constructor: se ejecuta cuando se crea un nuevo animal
  constructor(nombre: string, tipo: string) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  // Método que muestra un sonido
  hacerSonido() {
    console.log(`${this.nombre} es un ${this.tipo} y hace un sonido.`);
  }
}

//Crea una instancia de la clase Animal
let miAnimal = new Animal("Firulais", "perro");

//Llamar al método
miAnimal.hacerSonido();
