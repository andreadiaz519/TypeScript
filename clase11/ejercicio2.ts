/*2. Lectura de Datos con Retraso Simulado y Manejo de Errores
Escribe una función que simule la obtención de datos de una base de datos o
API. La función debe simular un retraso de 2 segundos para obtener los datos.
Sin embargo, en ocasiones esta operación puede fallar (simula este fallo
lanzando un error manualmente).
Detalles:
• Utiliza async y await para hacer que la función sea asíncrona.
• Usa try/catch para capturar posibles errores.
• Si todo va bien, muestra el mensaje "Datos obtenidos con éxito".
• En caso de error, muestra "Error al leer datos".
Esta simulación es muy útil para ver cómo manejar errores en operaciones de
obtención de datos, una tarea común en programación backend.*/

// Función que simula un retraso
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Función asíncrona que obtiene datos con posible error
async function obtenerDatos() {
    try {
        console.log("Leyendo datos...");

        // Esperar 2 segundos
        await delay(2000);

        // Exito o fallo
        const errorOcurre = Math.random() < 0.5;

        if (errorOcurre) {
            throw new Error("Fallo en la lectura");
        }

        console.log("Datos obtenidos con éxito");
    } catch (error) {
        console.log("Error al leer datos");
    }
}


obtenerDatos();
