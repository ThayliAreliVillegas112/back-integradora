const {
    rol,
    status, genero
} = require("../dao/models/init-models");
const constantes = require("./constantes");


async function insertarGeneros() {
    let obj = undefined;

    for (const nombre of constantes.GENEROS) {
        obj = await genero.findOne({
            where: {
                nombre: nombre
            }
        });

        if (!obj) {
            await genero.create({
                nombre: nombre
            });
        }
    }
}
async function insertarRoles() {
    let obj = undefined;

    for (const nombre of constantes.ROLES) {
        obj = await rol.findOne({
            where: {
                nombre: nombre
            }
        });

        if (!obj) {
            await rol.create({
                nombre: nombre
            });
        }
    }
}

async function insertarStatus() {
    let obj = undefined;

    for (const nombre of constantes.ESTATUS) {
        obj = await status.findOne({
            where: {
                nombre: nombre
            }
        });

        if (!obj) {
            await status.create({
                nombre: nombre
            });
        }
    }
}



async function iniciales() {
    try {

        insertarGeneros();

        insertarRoles()

        insertarStatus();

        
        console.log('Datos registrados con éxito');
    } catch (error) {
        console.error('Error al registrar datos:', error);
    }
}

module.exports = iniciales;