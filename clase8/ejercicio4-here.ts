/*Ejercicio 4: Sistema de Gestión de Empleados
Consigna: Crea una clase base Empleado con propiedades protegidas nombre y
salario, y un método calcularSalario(). Crea dos clases derivadas
EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Ambas clases deben
sobrescribir el método calcularSalario() con sus propias lógicas (empleados de
tiempo completo tienen un salario fijo, mientras que los empleados de medio
tiempo cobran por hora).
Además, crea una interfaz BeneficiosLaborales que tenga el método
calcularBeneficios(). Solo los empleados de tiempo completo implementarán
esta interfaz.
*/

// interfaz
interface BeneficiosLaborales {
  calcularBeneficios(): number;
}

// clase base
class Empleado {
  protected nombre: string;
  protected salario: number;

  constructor(nombre: string, salario: number) {
    this.nombre = nombre;
    this.salario = salario;
  }

  calcularSalario(): number {
    return this.salario;
  }
}

// empleado tiempo completo
class EmpleadoTiempoCompleto extends Empleado implements BeneficiosLaborales {

  calcularSalario(): number {
    // Salario fijo
    return this.salario;
  }

  calcularBeneficios(): number {
    // Por ejemplo: 20% de beneficios
    return this.salario * 0.20;
  }
}

// empleado de medio tiemo 
class EmpleadoMedioTiempo extends Empleado {
  private horasTrabajadas: number;

  constructor(nombre: string, salarioPorHora: number, horas: number) {
    super(nombre, salarioPorHora);
    this.horasTrabajadas = horas;
  }

  calcularSalario(): number {
    return this.salario * this.horasTrabajadas;
  }
}


// prueba
console.log("=== PRUEBA DE EMPLEADOS ===");

const empCompleto = new EmpleadoTiempoCompleto("Laura", 2000000);
const empMedio = new EmpleadoMedioTiempo("Carlos", 30000, 80);

console.log("Empleado tiempo completo:");
console.log("Salario:", empCompleto.calcularSalario());
console.log("Beneficios:", empCompleto.calcularBeneficios());

console.log("----------------------------");

console.log("Empleado medio tiempo:");
console.log("Salario:", empMedio.calcularSalario());
