/*1. Ejercicio de Bodega
Diseña una clase Bodega que tenga propiedades privadas para nombre,
direccion, y inventario (un array de objetos con producto y cantidad).
Implementa métodos para agregar productos al inventario, eliminar productos,
y listar el inventario. Si se intenta agregar un producto con una cantidad
negativa, imprime un mensaje informativo. */

class Bodega {
  private nombre: string;
  private direccion: string;
  private inventario: { producto: string; cantidad: number }[] = [];

  constructor(nombre: string, direccion: string) {
    this.nombre = nombre;
    this.direccion = direccion;
  }

  // agregar productos
  agregarProducto(producto: string, cantidad: number): void {
    if (cantidad < 0) {
      console.log("No se puede agregar una cantidad negativa.");
      return;
    }

    // Revisamos si ya existe
    const existente = this.inventario.find(item => item.producto === producto);

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      this.inventario.push({ producto, cantidad });
    }

    console.log(`✔ Producto agregado: ${producto} (${cantidad})`);
  }

  // eliminar productos
  eliminarProducto(producto: string): void {
    const indice = this.inventario.findIndex(item => item.producto === producto);

    if (indice === -1) {
      console.log(" No se puede eliminar: el producto no existe en la bodega.");
      return;
    }

    this.inventario.splice(indice, 1);
    console.log(`Producto eliminado: ${producto}`);
  }

  // Listar inventario
  listarInventario(): void {
    console.log("\n=== INVENTARIO DE LA BODEGA ===");

    if (this.inventario.length === 0) {
      console.log("La bodega está vacía.");
      return;
    }

    this.inventario.forEach(item => {
      console.log(`Producto: ${item.producto}, Cantidad: ${item.cantidad}`);
    });
  }
}


// prueba
console.log("=== PRUEBA DEL SISTEMA DE BODEGA ===");

const bodega = new Bodega("Central 1", "Calle 10 #23-45");

bodega.agregarProducto("Arroz", 50);
bodega.agregarProducto("Frijoles", 30);
bodega.agregarProducto("Azúcar", -5); // Caso inválido
bodega.agregarProducto("Arroz", 20); // Suma a lo que ya esta

bodega.listarInventario();

bodega.eliminarProducto("Frijoles");
bodega.eliminarProducto("Leche"); // No existe

bodega.listarInventario();
