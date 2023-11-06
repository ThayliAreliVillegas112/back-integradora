const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const recoverPassword = require('../controllers/recover/recover-password');


router.post('/auth/login', authController.login);
router.put('/auth/registrarUsuario', authController.registrarUsuario);
router.post('/auth/enviarCorreo', recoverPassword.sendEmail);
router.put('/auth/recuperarContrasena', recoverPassword.changePasswrod);

module.exports = router;