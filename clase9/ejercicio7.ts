/*Ejercicio 7: Uso de tuplas en una función genérica (Ejercicio Entrevista)
Crea una función genérica que acepte una tupla con dos elementos de cualquier
tipo y retorne una nueva tupla con los elementos invertidos.
Para este ejercicio deben pensar mucho porque es para poner en juego la lógica
de programacion */


function invertirTupla<A, B>(tupla: [A, B]): [B, A] {
  const [a, b] = tupla;
  return [b, a];
}

// PRUEBAS

// números
const t1: [number, number] = [1, 2];
const r1 = invertirTupla(t1);          // tipo inferido: [number, number]
console.log("t1:", t1, "-> r1:", r1);

// tipos diferentes: string y boolean
const t2: [string, boolean] = ["hola", true];
const r2 = invertirTupla(t2);          // tipo inferido: [boolean, string]
console.log("t2:", t2, "-> r2:", r2);

// objetos y arrays
const t3: [{ nombre: string }, number[]] = [{ nombre: "Ana" }, [10, 20]];
const r3 = invertirTupla(t3);          
console.log("t3:", t3, "-> r3:", r3);

const r4 = invertirTupla(["texto", 123]); 
console.log('["texto",123] ->', r4);

const r5 = invertirTupla<string, Date>(["fecha", new Date()]);
console.log('["fecha", Date] ->', r5);
