/*Ejercicio 1: Comparación Completa - Sistema de Transporte Público
Diseña un sistema que combine interfaces y clases abstractas para gestionar un
transporte público.
• Crea una clase abstracta Transporte con un método abstracto mover().
• Define dos interfaces:
o Electrico con el método cargarBateria().
o Combustible con el método llenarTanque().
• Implementa dos clases:
o AutobusElectrico: Extiende de Transporte e implementa Electrico.
o Taxi: Extiende de Transporte e implementa Combustible.*/


abstract class Transporte {
  abstract mover(): void;
}

interface Electrico {
  cargarBateria(): void;
}

interface Combustible {
  llenarTanque(): void;
}

class AutobusElectrico extends Transporte implements Electrico {
  mover(): void {
    console.log("El autobús eléctrico se mueve silenciosamente por la ciudad.");
  }

  cargarBateria(): void {
    console.log("Cargando la batería del autobús eléctrico...");
  }
}

// clase taxi
class Taxi extends Transporte implements Combustible {
  mover(): void {
    console.log("El taxi se mueve usando combustible.");
  }

  llenarTanque(): void {
    console.log("Llenando el tanque del taxi...");
  }
}


//prueba
console.log("=== Prueba del sistema de transporte ===");

const bus = new AutobusElectrico();
const taxi = new Taxi();

bus.mover();
bus.cargarBateria();

console.log("------------------");

taxi.mover();
taxi.llenarTanque();
