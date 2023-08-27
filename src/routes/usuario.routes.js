const router = require('express').Router();
//requerimos los controles de usuario
const { login, crearUsuario } = require('../controllers/usuarios.controller');

//ruta de registrar
router.post('/register', crearUsuario);

//ruta de crear
router.post('/login', login);


//exportamos
module.exports = router;