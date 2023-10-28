const usuarioDAO = require('../dao/usuarioDAO');
const utileria = require('../utils/utileria.js')

exports.listarUsuario = async (req, res) => {
    try {

        const usuarios = await usuarioDAO.listarUsuario();
        return utileria.responseOk(usuarios, res);

    } catch (error) {
        return utileria.reponseError(error, res);
    }
};

