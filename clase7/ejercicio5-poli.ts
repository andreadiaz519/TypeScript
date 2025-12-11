/*Ejercicio 5: Uso de Interfaces para Polimorfismo
Crea una interfaz Empleado con un método trabajar. Implementa esta interfaz
en clases Programador y Disenador, donde cada clase debe implementar el
método con su propia lógica. Luego, crea una función que reciba un objeto de
tipo Empleado y llame a su método trabajar.*/


interface Empleado {
  trabajar(): void;
}

// clase programador
class Programador implements Empleado {
  trabajar(): void {
    console.log("El programador está escribiendo código...");
  }
}

// clase diseñador
class Disenador implements Empleado {
  trabajar(): void {
    console.log("El diseñador está creando diseños visuales...");
  }
}

// recibe cualquier empleado
function iniciarTrabajo(empleado: Empleado): void {
  empleado.trabajar();
}


// prueba
console.log("=== Prueba del polimorfismo con interfaces ===");

const empleado1 = new Programador();
const empleado2 = new Disenador();

iniciarTrabajo(empleado1);
iniciarTrabajo(empleado2);
