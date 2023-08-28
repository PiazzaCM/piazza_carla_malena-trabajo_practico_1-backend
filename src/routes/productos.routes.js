//requerimos los controles de productos
const { obtenerProductos, crearProducto, editarProducto, eliminarProducto, obtenerProducto } = require('../controllers/producto.controllers');
const validarUsuario = require('../middlewares/validarUsuario');
const productoValida = require('../validator/producto.valida');
const router = require('express').Router();

//creamos las rutas basicas

//obtener
router.get('/productos', obtenerProductos);
//obtener un producto
router.get('/productos/:id', obtenerProductos);
//enviar
router.post('/productos', [validarUsuario, productoValida ], crearProducto);
//editar
router.put('/productos/:id',[validarUsuario, productoValida ], editarProducto);
//eliminar
router.delete('/productos/:id', validarUsuario, eliminarProducto);


//exportamos
module.exports = router;