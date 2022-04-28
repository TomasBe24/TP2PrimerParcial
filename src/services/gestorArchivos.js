import fs from 'fs'

export {crearArchivo}

const crearArchivo = fs.writeFileSync('src/texts/texto.txt','Texto inicial.')

fs.appendFileSync('src/texts/texto.txt' , ' Esto es un agregado.')