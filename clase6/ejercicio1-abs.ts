/*Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método
preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción
para que ambas bebidas oculten su lógica de preparación interna pero
expongan un comportamiento común */


interface Bebida {
  preparar(): void;   
}


class Cafe implements Bebida {
  preparar(): void {
    console.log("Preparando café...");
    console.log("1. Calentar agua");
    console.log("2. Agregar café molido");
    console.log("3. Revolver y servir");
  }
}


class Te implements Bebida {
  preparar(): void {
    console.log("Preparando té...");
    console.log("1. Calentar agua");
    console.log("2. Colocar la bolsita de té");
    console.log("3. Reposar y servir ");
  }
}

const miCafe = new Cafe();
console.log("=== CAFE ===");
miCafe.preparar();

const miTe = new Te();
console.log("\n=== TE ===");
miTe.preparar();
