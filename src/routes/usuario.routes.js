const router = require('express').Router();
const usuarioValida = require('../validator/usuario.valida');

//requerimos los controles de usuario
const { login, crearUsuario } = require('../controllers/usuarios.controller');

//ruta de registrar
router.post('/register',usuarioValida, crearUsuario);

//ruta de crear
router.post('/login',usuarioValida, login);


//exportamos
module.exports = router;