/*3. Ejecución de Múltiples Consultas en Paralelo
Simulemos un caso donde un sistema necesita realizar varias consultas a
distintos servicios externos de manera simultánea. Escribe tres funciones que
simulen una consulta, cada una con un tiempo de respuesta diferente (1, 2 y 3
segundos). Luego, crea una función que ejecute estas tres consultas en paralelo
usando Promise.all, de modo que se esperen los tres resultados antes de
continuar.
Esta técnica te permitirá comprender cómo hacer más eficientes las operaciones
asíncronas independientes ejecutándolas en paralelo. */

// Función que simula una consulta con un tiempo de respuesta
function consulta(nombre: string, tiempo: number): Promise<string> {
    return new Promise(resolve => {
        console.log(`Iniciando consulta: ${nombre}`);
        setTimeout(() => {
            resolve(`Resultado de ${nombre}`);
        }, tiempo);
    });
}

// Función que ejecuta todas las consultas 
async function ejecutarConsultas() {
    console.log("Ejecutando consultas en paralelo...");

    const consulta1 = consulta("Servicio 1", 1000); // 1 segundo
    const consulta2 = consulta("Servicio 2", 2000); // 2 segundos
    const consulta3 = consulta("Servicio 3", 3000); // 3 segundos

    const resultados = await Promise.all([consulta1, consulta2, consulta3]);

    console.log("Todos los resultados recibidos:");
    console.log(resultados);
}


ejecutarConsultas();
