const {
    response
} = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const constantes = require("../utils/constantes");

module.exports = {
    responseOk: (objeto, res) => {
        return res.status(200).json(objeto);
    },
    reponseError: (error, res, code=400) => {
        return res.status(code).json({
            mensaje: error?.message || error
        });
    },
    encriptarContrasena: (contrasena) => {
        const salt = bcrypt.genSaltSync(5);
        return bcrypt.hashSync(contrasena, salt);
    },
    validarContrasena: (contrasena, contrasenaOriginal) => {
        return bcrypt.compareSync(contrasena, contrasenaOriginal);
    },
    generarJWT:  ({ usuario, idUsuario }) => {
        const CLAVE_TOKEN = constantes.CLAVE_TOKEN;
    
        return new Promise((resolve, reject) => {
            jwt.sign({ usuario, idUsuario }, CLAVE_TOKEN, { expiresIn: '24h' }, (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });
    }
}
// const jwt= require('jsonwebtoken'); 

// const validarJWT = (req, res=response, next)=>{
//     const token = req.header('x-token')

//     if (!token) {
//         return res.status(401).json({
//             ok: false,
//             msg: 'Error en el token',

//         });
//     }

//     try {

//         const {uid, nombreUsuario} = jwt.verify(token, process.env.SECRET_JWT_SEED)
//         console.log(uid, nombreUsuario);
//         req.uid = uid;
//         req.nombreUsuario = nombreUsuario

//     } catch (error) {
//         return res.status(401).json({
//             ok: false,
//             msg: 'Token no valido',

//         });
//     }

//     next();
// }