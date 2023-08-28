//requerimos los controles de comentarios
const { obtenerComentarios, crearComentario, editarComentario, eliminarComentario, eliminarComentario } = require('../controllers/comentarios.controller');
const validarUsuario = require('../middlewares/validarUsuario');
const comentarioValida = require('../validator/comentario.valida');

const router = require('express').Router();
//obetener
router.get('/comentarios', obtenerComentarios);
//enviar
router.post('/comentarios/:productoId', [validarUsuario, comentarioValida], crearComentario);
//actualizar
router.put('/comentarios/:id', [validarUsuario, comentarioValida], editarComentario);
//eliminar
router.delete('/comentarios/:id', validarUsuario, eliminarComentario);


//exportamos
module.exports = router;