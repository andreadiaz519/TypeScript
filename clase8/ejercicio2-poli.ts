/*Ejercicio 2: Polimorfismo y Herencia con Abstracción Compleja
Implementa una clase abstracta Empleado con un método abstracto
calcularSalario. Crea dos clases derivadas EmpleadoPorHora y EmpleadoFijo,
que calculen el salario de acuerdo a las horas trabajadas y salario fijo
respectivamente. */

// calse abstracta
abstract class Empleado {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }


  abstract calcularSalario(): number;
}


// empleado por hora
class EmpleadoPorHora extends Empleado {
  private horasTrabajadas: number;
  private pagoPorHora: number;

  constructor(nombre: string, horasTrabajadas: number, pagoPorHora: number) {
    super(nombre);
    this.horasTrabajadas = horasTrabajadas;
    this.pagoPorHora = pagoPorHora;
  }

  calcularSalario(): number {
    return this.horasTrabajadas * this.pagoPorHora;
  }
}


// empleado fijo
class EmpleadoFijo extends Empleado {
  private salarioMensual: number;

  constructor(nombre: string, salarioMensual: number) {
    super(nombre);
    this.salarioMensual = salarioMensual;
  }

  calcularSalario(): number {
    return this.salarioMensual;
  }
}


// prueba
console.log("=== PRUEBA DE EMPLEADOS ===");

const empHora = new EmpleadoPorHora("Laura", 80, 25000);
const empFijo = new EmpleadoFijo("Carlos", 2000000);

console.log(`Salario de ${empHora["nombre"]}: $${empHora.calcularSalario()}`);
console.log(`Salario de ${empFijo["nombre"]}: $${empFijo.calcularSalario()}`);
