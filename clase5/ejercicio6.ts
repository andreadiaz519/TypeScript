/*Ejercicio 6: Modificadores de Acceso
1. Define una clase Coche con propiedades marca, modelo (públicas) y
precio (privada).
2. Implementa un método para mostrar la información del coche que acceda
a las propiedades públicas y no a la privada directamente. */

// Definimos la clase Coche
class Coche {
  public marca: string;   // Propiedad pública (se puede acceder desde fuera)
  public modelo: string;  // Propiedad pública
  private precio: number; // Propiedad privada (solo se puede usar dentro de la clase)

  // Constructor para inicializar las propiedades
  constructor(marca: string, modelo: string, precio: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

  // Método público para mostrar la información del coche
  mostrarInformacion(): void {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    console.log(`El precio está protegido y no puede mostrarse directamente.`);
  }

  // Método extra opcional para acceder al precio (de forma controlada)
  obtenerPrecio(): number {
    return this.precio;
  }
}

// Creamos una instancia (un coche)
const miCoche = new Coche("Toyota", "Corolla", 85000);

// Llamamos al método para mostrar información
miCoche.mostrarInformacion();

// Si queremos mostrar el precio, usamos el método especial
console.log(`Precio (acceso controlado): $${miCoche.obtenerPrecio()}`);

