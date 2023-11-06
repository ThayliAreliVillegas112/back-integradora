const { request, response } = require("express");
const {
  usuario,
} = require("../../dao/models/init-models.js");
const utileria = require("../../utils/utileria.js"); 

const nodemailer = require("nodemailer");

let codeGenerated = undefined;

const generateRandomCode = () => {
    const code = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    codeGenerated = code;
    return code;
}

exports.sendEmail = async ( req = request, res = response) => {
 try {
  const resp = await usuario.findOne({where: {usuario: req.body.usuario}});
  if (resp === null){
    return utileria.reponseError({msg: "Usuario no encontrado"}, res);
  }


  const config = {
    host : "smtp.gmail.com",
    port : 465,
    secure : true,
    auth : {
      user : 'rendonjairo514@gmail.com',
      pass : 'mghjdolhinfazokg'
    }
  }

  const message = {
    from : 'rendonjairo514@gmail.com',
    to : 'noe.mtz1630@gmail.com',
    subject : 'Recuperación de contraseña',
    text : `Tu código es : ${generateRandomCode()}`
  }

  const transport = nodemailer.createTransport(config);
  let info = await transport.sendMail(message);
  console.log(info);

  return utileria.responseOk({msg: "Correo enviado"}, res);
 } catch (error) {
    return utileria.reponseError(error, res);
 }
}

exports.changePasswrod = async ( req = request, res = response) => {
  
  console.log(codeGenerated);
    if (codeGenerated === undefined){
      return utileria.reponseError({msg: "No se ha enviado un correo"}, res);
    }
  
    if (codeGenerated !== req.body.codigo){
      return utileria.reponseError({msg: "Código incorrecto"}, res);
    }
  
    const resp = await usuario.findOne({where: {usuario: req.body.usuario}});
    if (resp === null){
      return utileria.reponseError({msg: "Usuario no encontrado"}, res);
    }
  
    const newPassword = utileria.encriptarContrasena(req.body.nuevaContrasena);
  
    const resp2 = await usuario.update({contrasena: newPassword}, {where: {usuario: req.body.usuario}});
    if (resp2 === null){
      return utileria.reponseError({msg: "Error al actualizar la contraseña"}, res);
    }
  
    return utileria.responseOk({msg: "Contraseña actualizada"}, res);

}