/*Ejercicio 5: Uso de this
1. Crea una clase llamada Mariposa con propiedades nombre y color, y un
método volar() que use this para referirse a las propiedades de la
instancia.
2. Crea una instancia de la clase y llama al método. */

// 1️⃣ Creamos la clase Mariposa
class Mariposa {
  nombre: string;
  color: string;

  // Constructor: sirve para crear nuevas mariposas con nombre y color
  constructor(nombre: string, color: string) {
    this.nombre = nombre; 
    this.color = color;
  }

  // Método que usa 'this' para acceder a las propiedades del objeto
  volar(): void {
    console.log(`La mariposa ${this.nombre} de color ${this.color} está volando`);
  }
}

// Creamos una instancia de la clase
const mariposa1 = new Mariposa("Monarca", "naranja y negro");

// Llamamos al método volar
mariposa1.volar();
