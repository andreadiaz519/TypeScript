/*3. Compañía de Seguros: Renovación Automática de Pólizas

Desarrolla un sistema que gestione las pólizas de seguros de una compañía.
Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y
una fecha de renovación. Implementa las siguientes funciones:
• Añadir una póliza.
• Programar la renovación de la póliza utilizando setTimeout().
• Mostrar todas las pólizas activas. */



type Poliza = {
  id: number;
  cliente: string;
  monto: number;
  fechaRenovacion: string;
};

let polizasActivas: Poliza[] = [];

// Añadir poliza
function agregarPoliza(id: number, cliente: string, monto: number, fecha: string) {
  const nuevaPoliza: Poliza = { id, cliente, monto, fechaRenovacion: fecha };
  polizasActivas.push(nuevaPoliza);
  console.log(`✔ Póliza ${id} agregada con éxito para ${cliente}.`);
}

// Programar renovación
function programarRenovacion(idPoliza: number) {
  const poliza = polizasActivas.find((p) => p.id === idPoliza);

  if (!poliza) {
    console.log(" No existe una póliza con ese ID.");
    return;
  }

  console.log(
    `Renovación programada para la póliza ${poliza.id}. Será renovada en 5 segundos...`
  );

  setTimeout(() => {
    console.log(
      ` Póliza renovada → ID: ${poliza.id}, Cliente: ${poliza.cliente}, Monto: $${poliza.monto}`
    );

    // actualizar fecha de renovación 
    const nuevaFecha = new Date().toLocaleDateString();
    poliza.fechaRenovacion = nuevaFecha;
  }, 5000);
}

// 3. Mostrar pólizas activas
function mostrarPolizas() {
  console.log("\n Pólizas activas:");

  if (polizasActivas.length === 0) {
    console.log("   (No hay pólizas registradas)");
    return;
  }

  polizasActivas.forEach((p) => {
    console.log(
      `ID: ${p.id} | Cliente: ${p.cliente} | Monto: $${p.monto} | Renovación: ${p.fechaRenovacion}`
    );
  });
}

//prueba

agregarPoliza(1, "Ana Torres", 5000000, "2025-01-10");
agregarPoliza(2, "Carlos López", 3500000, "2025-02-15");

mostrarPolizas();

programarRenovacion(1);

setTimeout(() => {
  console.log("\n Estado después de 6 segundos:");
  mostrarPolizas();
}, 6000);
