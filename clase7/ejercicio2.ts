/*2. Ejercicio de Libro
Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe
tener propiedades privadas para titulo, autor, anioPublicacion, y disponible.
Implementa métodos para prestar y devolver el libro, asegurando que solo se
pueda prestar si está disponible y que se pueda devolver solo si ha sido
prestado. Imprime un mensaje en caso de que se intente realizar una acción no
válida. */

class Libro {
  private titulo: string;
  private autor: string;
  private anioPublicacion: number;
  private disponible: boolean;

  constructor(titulo: string, autor: string, anioPublicacion: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.anioPublicacion = anioPublicacion;
    this.disponible = true; // por defecto, disponible
  }

  prestar() {
    if (!this.disponible) {
      console.log(`El libro "${this.titulo}" NO está disponible para préstamo.`);
      return;
    }

    this.disponible = false;
    console.log(`Has prestado el libro "${this.titulo}".`);
  }

  devolver() {
    if (this.disponible) {
      console.log(`El libro "${this.titulo}" NO se puede devolver porque no estaba prestado.`);
      return;
    }

    this.disponible = true;
    console.log(`Has devuelto el libro "${this.titulo}".`);
  }
}

//Prueba 
console.log("=== PRUEBA DEL LIBRO ===");

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);

libro1.prestar();     // prestado
libro1.prestar();     // no disponible
libro1.devolver();    // devuelto
libro1.devolver();    //  no estaba prestado
