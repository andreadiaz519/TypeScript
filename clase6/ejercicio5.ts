/* Ejercicio 5: Herencia con Modificadores de Acceso
Consigna: Crea una clase base Compania con un atributo privado
nombreCompania y un atributo protegido ingresosAnuales. Crea una clase
derivada EmpresaTecnologia que use el atributo protegido y agregue un
método que calcule el doble de los ingresos anuales.*/

// Clase base
class Compania {
  private nombreCompania: string;     
  protected ingresosAnuales: number;  

  constructor(nombreCompania: string, ingresosAnuales: number) {
    this.nombreCompania = nombreCompania;
    this.ingresosAnuales = ingresosAnuales;
  }

  public obtenerNombre(): string {
    return this.nombreCompania;
  }
}

// clase hija
class EmpresaTecnologia extends Compania {

  constructor(nombreCompania: string, ingresosAnuales: number) {
    super(nombreCompania, ingresosAnuales);
  }

  // uso el atributo protegido
  public calcularDobleIngresos(): number {
    return this.ingresosAnuales * 2;
  }
}

// Prueba
const empresa = new EmpresaTecnologia("TechNova", 500000);

console.log("Nombre:", empresa.obtenerNombre());
console.log("Doble de ingresos:", empresa.calcularDobleIngresos());
