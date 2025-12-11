/*2. Florería: Envío Programado de Pedidos

Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe
contener el nombre del cliente, la cantidad de flores y el tipo de flores.
Implementa las siguientes funciones:
• Añadir un pedido.
• Programar el envío de un pedido utilizando setTimeout() para simular un
retraso de 5 segundos.
• Mostrar todos los pedidos pendientes */


type Pedido = {
  cliente: string;
  cantidad: number;
  tipoFlores: string;
};

let pedidosPendientes: Pedido[] = [];

// Agregar pedido
function agregarPedido(cliente: string, cantidad: number, tipoFlores: string) {
  const nuevoPedido: Pedido = { cliente, cantidad, tipoFlores };
  pedidosPendientes.push(nuevoPedido);
  console.log(`Pedido agregado para ${cliente}`);
}

// Programar envio sin errores
function programarEnvio() {
  if (pedidosPendientes.length === 0) {
    console.log("No hay pedidos pendientes para enviar.");
    return;
  }

  
  const pedido = pedidosPendientes[0]!;

  console.log(
    `Envío programado: Pedido de ${pedido.cliente} será enviado en 5 segundos...`
  );

  setTimeout(() => {
    console.log(
      `Pedido enviado → Cliente: ${pedido.cliente}, Flores: ${pedido.cantidad} ${pedido.tipoFlores}`
    );
    pedidosPendientes.shift();
  }, 5000);
}

// 3. Mostrar pedidos
function mostrarPedidos() {
  console.log("Pedidos pendientes:");

  if (pedidosPendientes.length === 0) {
    console.log("   (No hay pedidos pendientes)");
    return;
  }

  pedidosPendientes.forEach((p, i) => {
    console.log(`${i + 1}. ${p.cliente} - ${p.cantidad} ${p.tipoFlores}`);
  });
}


// Prueba

agregarPedido("Ana", 12, "rosas");
agregarPedido("Carlos", 8, "tulipanes");

mostrarPedidos();
programarEnvio();

setTimeout(() => {
  console.log("\n Estado después de 6 segundos:");
  mostrarPedidos();
}, 6000);
