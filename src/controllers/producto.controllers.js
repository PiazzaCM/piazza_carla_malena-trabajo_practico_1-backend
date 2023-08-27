//requerimos el modelo de productos
const Producto = require('../models/productos.model');
const ctrl = {}


//controladores basicos
//obtener
ctrl.obtenerProductos = async (req, res) => {

    try {
        const productos = await Producto.findAll();

        return res.json(productos)
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            res: 'Ocurrio un error el obtener los productos'
        })
    }
}

//crear
ctrl.crearProducto = async (req, res) => {
    const id = req.userId
    const { nombre, descripcion } = req.body

    try {
        await Producto.create({nombre, descripcion, usuarioId: id});

        return res.json({
            res: 'Producto creado'
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            res: 'Ocurrio un error al crear el producto'
        })
    }
}

//actualizar
ctrl.editarProducto = async (req, res) => {
    const id = req.userId
    const idProduct = req.params.id
    const { nombre, descripcion } = req.body

    try {
        await Producto.update({nombre, descripcion}, {
            where: {
                id: idProduct,
                usuarioId: id
            }
        });

        return res.json({
            res: 'Producto actualizado'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            res: 'Ocurrio un error al actualizar el producto'
        })
    }
}

//eliminar
ctrl.eliminarProducot = async (req, res) => {
    const id = req.userId
    const idProduct = req.params.id

    try {
        await Producto.destroy({
            where: {
                id: idProduct,
                usuarioId: id
            }
        })

        return res.json({
            res: 'Producto eliminado'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            res: 'Ocurrio un error al eliminar el producto'
        })
    }
}

//exportamos los controladores
module.exports = ctrl;