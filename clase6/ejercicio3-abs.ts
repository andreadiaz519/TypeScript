/*Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios
Crea una interfaz Usuario que tenga las propiedades:
• nombre (obligatoria).
• edad (opcional).
• readonly id (solo lectura).
Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta
modificar la propiedad id para mostrar cómo se aplican las restricciones de solo
lectura.*/





interface Usuario {
  nombre: string;
  edad: number | undefined;
  readonly id: number;
}

class UsuarioConcreto implements Usuario {
  public nombre: string;
  public edad: number | undefined;
  readonly id: number;

  constructor(nombre: string, id: number, edad?: number) {
    this.nombre = nombre;
    this.id = id;
    // Asignación explícita y segura
    this.edad = typeof edad === "number" ? edad : undefined;
  }
}

// Prueba
const usuario = new UsuarioConcreto("Andrea", 101, 25);
console.log("ID inicial:", usuario.id);
console.log("Nombre inicial:", usuario.nombre);
console.log("Edad inicial:", usuario.edad);

usuario.nombre = "Andreita"; // permitido
console.log("Nombre modificado:", usuario.nombre);


