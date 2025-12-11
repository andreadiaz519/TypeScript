/*1. Simulación de Tiempo de Respuesta de un Servidor
Imagina que quieres simular cómo responde un servidor cuando un cliente
realiza una petición. Para este ejercicio, el servidor tiene un tiempo de respuesta
variable (aleatorio) entre 1 y 3 segundos. Debes escribir una función llamada
simulacionServidor que simule este comportamiento utilizando async y await.
La función deberá:
• Tener un retardo de tiempo aleatorio.
• Retornar el mensaje "Servidor listo" una vez que haya transcurrido el
tiempo.
Este ejercicio te ayudará a entender cómo gestionar el tiempo en procesos
asíncronos, fundamental cuando trabajamos con peticiones de red en el
desarrollo web. */

// Función que simula el tiempo de respuesta del servidor
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function simulacionServidor(): Promise<string> {
    // Tiempo aleatorio entre 1 y 3 segundos
    const tiempo = Math.floor(Math.random() * 3000) + 1000;

    console.log(`Servidor procesando... Tiempo estimado: ${tiempo} ms`);

    await delay(tiempo);

    return "Servidor listo";
}

// Probar 
async function probarServidor() {
    const respuesta = await simulacionServidor();
    console.log(respuesta);
}

probarServidor();
