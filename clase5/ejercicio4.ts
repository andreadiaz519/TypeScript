/*Ejercicio 4: Interfaz

1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
método presentarse().
2. Crea una clase llamada Persona que implemente esta interfaz y
proporciona la implementación del método presentarse() */

// Definimos la interfaz IPersona
interface IPersona {
  nombre: string;
  edad: number;
  presentarse(): void; // método que deben implementar las clases
}

// Creamos la clase Persona que implementa la interfaz IPersona
class Persona implements IPersona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Implementación del método presentarse()
  presentarse(): void {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Creamos un objeto de tipo Persona y probamos el método
const persona1 = new Persona("Andrea", 25);
persona1.presentarse();
