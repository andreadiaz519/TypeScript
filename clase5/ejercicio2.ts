/*Ejercicio 2: Métodos en Objetos

1. Modifica el objeto del ejercicio anterior para que incluya un método
llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola. */


let libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anioPublicacion: 1967,

  descripcion() {
    return `El libro "${this.titulo}" fue escrito por ${this.autor} en el año ${this.anioPublicacion}.`;
  }
};

console.log(libro.descripcion());
