/*Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces
Diseña un sistema de transporte público. Define:
• Una interfaz VehiculoElectrico con el método cargarBateria().
• Una clase abstracta Transporte con el método abstracto mover().
Implementa ambas estructuras en una clase concreta AutobusElectrico. */

// vehículos eléctricos
interface VehiculoElectrico {
  cargarBateria(): void;
}

// para cualquier transporte
abstract class Transporte {
  abstract mover(): void;   // el metodo abstracto solo se declara
}


class AutobusElectrico extends Transporte implements VehiculoElectrico {

  cargarBateria(): void {
    console.log("Cargando batería del autobús eléctrico...");
  }

  mover(): void {
    console.log("El autobús eléctrico está avanzando suavemente por la ciudad");
  }
}

//Prueba

const bus = new AutobusElectrico();

console.log("=== AUTOBÚS ELÉCTRICO ===");
bus.cargarBateria();
bus.mover();
