/*Ejercicio 1: Herencia Múltiple Indirecta y Modificadores de Acceso
Consigna: Define una clase base Negocio con un método protegido operar().
Define otra clase Consultoria que herede de Negocio y sobrescriba el método
operar() para mostrar un mensaje sobre cómo opera el negocio de consultoría. */

// clase base
class Negocio {
  protected operar(): void {
    console.log("El negocio está operando de forma general.");
  }
}

// clase derivada
class Consultoria extends Negocio {
  // Sobrescribimos el método protegido
  protected operar(): void {
    console.log("La consultoría opera ofreciendo asesorías profesionales.");
  }

  // metodo publico para ejecutar desde afuera
  public iniciarOperacion(): void {
    this.operar(); // Como operar() es protegido se llama desde dentro
  }
}


// prueba

console.log("=== PRUEBA DE NEGOCIO DE CONSULTORÍA ===");

const consultora = new Consultoria();
consultora.iniciarOperacion();
