'use strict'

const { crearArchivo } = require('./helpers/multiplicacion');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`El archivo ${nombreArchivo} se creó y escribió correctamente`.brightYellow))
    .catch(err => console.log(err));



