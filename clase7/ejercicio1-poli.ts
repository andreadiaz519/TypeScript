/*Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución)
Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y
Moto. Cada clase debe sobrescribir el método arrancar de la clase base para
proporcionar una implementación específica de cómo arrancar.*/

// clase base
class Vehiculo {
  arrancar(): void {
    console.log("El vehículo está arrancando...");
  }
}

// clase derivada 1
class Coche extends Vehiculo {
  arrancar(): void {
    console.log("El coche arranca girando la llave.");
  }
}

// clase derivada 2
class Moto extends Vehiculo {
  arrancar(): void {
    console.log("La moto arranca con un botón eléctrico.");
  }
}


//prueba
console.log("=== Prueba del polimorfismo ===");

const vehiculos: Vehiculo[] = [
  new Coche(),
  new Moto()
];

vehiculos.forEach(v => v.arrancar());
