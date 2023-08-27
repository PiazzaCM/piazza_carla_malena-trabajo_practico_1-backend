//requerimos los controles de productos
const { obtenerProductos, crearProducto, editarProducto, eliminarProducot } = require('../controllers/producto.controller');

const router = require('express').Router();

//creamos las rutas basicas

//obetener
router.get('/productos', obtenerProductos);
//enviar
router.post('/productos', validarUsuario, crearProducto);
//editar
router.put('/productos/:id', validarUsuario, editarProducto);
//eliminar
router.delete('/productos/:id', validarUsuario, eliminarProducot);


//exportamos
module.exports = router;