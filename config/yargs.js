'use strict'

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Bandera para listar la tabla en consola',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Este es el número hasta donde quieres la tabla',
        default: 10
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {s
            throw ('La base proporcionada tiene que ser un núemro');
        } else {
            return true;
        };
    })
    .argv;

module.exports = argv;