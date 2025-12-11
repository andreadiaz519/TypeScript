/*5. Banco: Transferencias Programadas

Crea un sistema para gestionar cuentas bancarias en un banco. Cada cuenta
debe tener un nombre del propietario, un saldo y un estado (activo o inactivo).
Implementa las siguientes funciones:
• Añadir una cuenta.
• Realizar una transferencia entre cuentas después de un retraso de 8
segundos utilizando setTimeout().
• Mostrar todas las cuentas. */

type Cuenta = {
  propietario: string;
  saldo: number;
  activa: boolean;
};

let cuentas: Cuenta[] = [];

// Añadir una cuenta
function agregarCuenta(nombre: string, saldo: number, activa: boolean) {
  const nuevaCuenta: Cuenta = { propietario: nombre, saldo, activa };
  cuentas.push(nuevaCuenta);
  console.log(`Cuenta creada para ${nombre} con saldo ${saldo}`);
}

//Transferencia programada
function transferir(monto: number, origen: string, destino: string) {
  const cuentaOrigen = cuentas.find((c) => c.propietario === origen);
  const cuentaDestino = cuentas.find((c) => c.propietario === destino);

  if (!cuentaOrigen || !cuentaDestino) {
    console.log("Una de las cuentas no existe.");
    return;
  }

  if (!cuentaOrigen.activa || !cuentaDestino.activa) {
    console.log("Ambas cuentas deben estar activas para transferir.");
    return;
  }

  if (cuentaOrigen.saldo < monto) {
    console.log("Saldo insuficiente.");
    return;
  }

  console.log(
    `Transferencia programada de ${monto} de ${origen} hacia ${destino}. Se ejecutará en 8 segundos...`
  );

  setTimeout(() => {
    cuentaOrigen.saldo -= monto;
    cuentaDestino.saldo += monto;

    console.log("Transferencia realizada.");
    console.log(`${origen} ahora tiene ${cuentaOrigen.saldo}`);
    console.log(`${destino} ahora tiene ${cuentaDestino.saldo}`);
  }, 8000);
}

// Mostrar todas las cuentas
function mostrarCuentas() {
  console.log("Listado de cuentas:");

  if (cuentas.length === 0) {
    console.log("No hay cuentas registradas.");
    return;
  }

  cuentas.forEach((c) => {
    console.log(
      `Propietario: ${c.propietario} | Saldo: ${c.saldo} | Estado: ${
        c.activa ? "Activa" : "Inactiva"
      }`
    );
  });
}

// Prueba 
agregarCuenta("Andrea", 100000, true);
agregarCuenta("Juan", 50000, true);

mostrarCuentas();

transferir(30000, "Andrea", "Juan");

setTimeout(() => {
  console.log("Estado después de 9 segundos:");
  mostrarCuentas();
}, 9000);
