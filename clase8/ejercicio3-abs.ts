/*Ejercicio 3: Sistema de Gestión de Compras
Crea un sistema que gestione productos y órdenes de compra. Usa una clase
abstracta Producto, clases concretas Electrónico y Alimento, y una clase
OrdenCompra que contenga múltiples productos.*/

// clse abstracta
abstract class Producto {
  constructor(
    public nombre: string,
    public precio: number
  ) {}

  abstract descripcion(): void;
}

// clase concreta:electronico
class Electronico extends Producto {
  descripcion(): void {
    console.log(`Electrónico: ${this.nombre} - Precio: $${this.precio}`);
  }
}

// clase concreta:alimento
class Alimento extends Producto {
  descripcion(): void {
    console.log(`Alimento: ${this.nombre} - Precio: $${this.precio}`);
  }
}

// orden de compra
class OrdenCompra {
  private productos: Producto[] = [];

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
    console.log(`✔ Producto agregado: ${producto.nombre}`);
  }

  mostrarOrden(): void {
    console.log("\n=== DETALLE DE LA ORDEN ===");
    
    if (this.productos.length === 0) {
      console.log("La orden está vacía.");
      return;
    }

    let total = 0;

    this.productos.forEach((prod) => {
      prod.descripcion();
      total += prod.precio;
    });

    console.log(`Total a pagar: $${total}`);
  }
}

//prueba
console.log("=== PRUEBA DE ORDEN DE COMPRA ===");

const laptop = new Electronico("Laptop Lenovo", 2500000);
const audifonos = new Electronico("Audífonos Sony", 350000);
const pan = new Alimento("Pan integral", 5000);
const leche = new Alimento("Leche deslactosada", 4000);

const orden = new OrdenCompra();

orden.agregarProducto(laptop);
orden.agregarProducto(audifonos);
orden.agregarProducto(pan);
orden.agregarProducto(leche);

orden.mostrarOrden();
