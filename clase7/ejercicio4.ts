/*4. Ejercicio de Aviones
Crea una clase Avion con propiedades privadas para el modelo, capacidad y
velocidad. Implementa getters y setters para cada propiedad, asegurándote de
validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa.
Nota sobre la inicialización de propiedades
En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las
propiedades _capacidad y _velocidad. Esto se hace para evitar un error de
TypeScript que indica que estas propiedades no estaban inicializadas en el
constructor. Este enfoque asegura que las propiedades serán asignadas
adecuadamente en el constructor mediante el uso de los setters, manteniendo
así la validación de los valores. Tener esto en cuenta para los demás ejercicios. */

class Avion {
  private _modelo!: string;
  private _capacidad!: number;   
  private _velocidad!: number;   

  constructor(modelo: string, capacidad: number, velocidad: number) {
    this.modelo = modelo;       // setter
    this.capacidad = capacidad; // setter con validación
    this.velocidad = velocidad; // setter con validación
  }

  //GETTERS
  get modelo(): string {
    return this._modelo;
  }

  get capacidad(): number {
    return this._capacidad;
  }

  get velocidad(): number {
    return this._velocidad;
  }

  //SETTERS
  set modelo(value: string) {
    this._modelo = value;
  }

  set capacidad(value: number) {
    if (value < 0) {
      console.log("Error: la capacidad no puede ser menor que 0.");
      return;
    }
    this._capacidad = value;
  }

  set velocidad(value: number) {
    if (value < 0) {
      console.log("Error: la velocidad no puede ser negativa.");
      return;
    }
    this._velocidad = value;
  }
}


//prueba
console.log("=== PRUEBA DEL AVIÓN ===");

const avion1 = new Avion("Boeing 737", 180, 850);

console.log("Modelo:", avion1.modelo);
console.log("Capacidad:", avion1.capacidad);
console.log("Velocidad:", avion1.velocidad);

//validacione
avion1.capacidad = -10;   //  error
avion1.velocidad = -100;  //  error

// cambios validos
avion1.capacidad = 200;   // válido
avion1.velocidad = 900;   // válido

console.log("Nuevos datos:");
console.log("Capacidad:", avion1.capacidad);
console.log("Velocidad:", avion1.velocidad);
