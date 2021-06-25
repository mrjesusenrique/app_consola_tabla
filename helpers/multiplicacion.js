'use strict'

const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            let multi = base * i;
            salida += `${base} x ${i} = ${multi}\n`;
            consola += `${base} ${'x'.brightBlue} ${i} ${'='.brightBlue} ${multi}\n`;
        };

        if (listar) {
            console.log('========================'.green);
            console.log('       TABLA DEL '.green, colors.brightBlue(base));
            console.log('========================'.green);

            console.log(consola);
        };

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    };
};

module.exports = {
    crearArchivo
};