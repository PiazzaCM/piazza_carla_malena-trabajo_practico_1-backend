//requerimos los controles de productos
const { obtenerProductos, crearProducto, editarProducto, eliminarProducot } = require('../controllers/producto.controller');
const validarUsuario = require('../middlewares/validarUsuario');
const productoValida = require('../validator/producto.valida');
const router = require('express').Router();

//creamos las rutas basicas

//obetener
router.get('/productos', obtenerProductos);
//enviar
router.post('/productos', [validarUsuario, productoValida ], crearProducto);
//editar
router.put('/productos/:id',[validarUsuario, productoValida ], editarProducto);
//eliminar
router.delete('/productos/:id', validarUsuario, eliminarProducot);


//exportamos
module.exports = router;