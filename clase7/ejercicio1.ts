/*1. Ejercicio de Coche
Diseña una clase Coche que represente un vehículo. Esta clase debe tener
propiedades privadas para marca, modelo, año, y kilometraje. Implementa
métodos para encender el coche y realizar un viaje, que incrementen el
kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se
inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta
establecer un año o kilometraje no válido, imprime un mensaje indicando el
error */


class Coche {
  private marca: string;
  private modelo: string;
  private año: number;
  private kilometraje: number;

  constructor(marca: string, modelo: string, año: number, kilometraje: number) {
    if (año < 1886) {
      console.log("Error: El año no puede ser menor que 1886.");
      año = 1886; 
    }

    if (kilometraje < 0) {
      console.log("Error: El kilometraje no puede ser negativo.");
      kilometraje = 0;
    }

    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.kilometraje = kilometraje;
  }

  encender() {
    console.log(`El coche ${this.marca} ${this.modelo} está encendido.`);
  }

  viajar(km: number) {
    if (km < 0) {
      console.log("Error: No se puede viajar una distancia negativa.");
      return;
    }

    this.kilometraje += km;
    console.log(`El coche viajó ${km} km. Kilometraje total: ${this.kilometraje} km.`);
  }
}


// prueba
console.log("=== PRUEBA DEL COCHE ===");

const miCoche = new Coche("Toyota", "Corolla", 2020, 20000);

miCoche.encender();
miCoche.viajar(50);
miCoche.viajar(-10); // error
