//requerimos los controles de comentarios
const { obtenerComentarios, crearComentario, editarComentario, eliminarComentario, obtenerComentario } = require('../controllers/comentarios.controller');
const validarUsuario = require('../middlewares/validarUsuario');
const comentarioValida = require('../validator/comentario.valida');

const router = require('express').Router();
//obtener comentarios
router.get('/comentarios', obtenerComentarios);
//obtener comentario
router.get('/comentarios/:id', obtenerComentarios);
//enviar
router.post('/comentarios/:productoId', [validarUsuario, comentarioValida], crearComentario);
//actualizar
router.put('/comentarios/:id', [validarUsuario, comentarioValida], editarComentario);
//eliminar
router.delete('/comentarios/:id', validarUsuario, eliminarComentario);


//exportamos
module.exports = router;