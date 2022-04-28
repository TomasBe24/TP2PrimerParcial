import { aRecibos } from "./modelos/recibos.js";
import {crearArchivo} from "./services/gestorArchivos.js"


setTimeout(() => {
    console.log("Pasaron 7 segundos");
}, 7000);



console.log("\n");
console.log("--Recorrer con forEach e imprimir en consola--");
aRecibos.forEach((r) => {
     console.log(
          `Cliente: ${r.cliente} Importe: ${r.importe}`
           )
         }
)

const ordenXImporte = aRecibos.sort((a,b) => a.importe - b.importe)
console.log("\n");
console.log("--Orden por importe--");
console.log(ordenXImporte);

const clientesConR = aRecibos.filter( (x) => x.cliente[0] == "R")
console.log("\n");
console.log("--Clientes que empiezan por R--");
console.log(clientesConR);

const aumento30 = aRecibos.map((x) => {
    return{
        Id :        x.id,
        Numero :    x.numero,
        Importe :   x.importe * 1.3,
        Cliente :   x.cliente
    }
})
console.log("\n");
console.log("-- Importe + 30% --");
console.log(aumento30);

