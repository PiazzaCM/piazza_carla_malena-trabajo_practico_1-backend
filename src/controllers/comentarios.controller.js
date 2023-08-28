const Comentario = require('../models/comentarios.model');
const ctrl = {}

//obtener
ctrl.obtenerComentarios = async (req, res) => {

    try {
        const comentario = await Comentario.findAll();

        return res.json(comentario)
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            res: 'Ocurrio un error el obtener los Comentario'
        })
    }
}

//crear
ctrl.crearComentario = async (req, res) => {
    const usuarioId = req.userId;
    const productoId = req.params.productoId
    const { comentario } = req.body

    try {
        await Comentario.create({comentario, productoId, usuarioId});

        return res.json({
            res: 'Comentario creado'
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            res: 'Ocurrio un error al crear el Comentario'
        })
    }
}


//actualizar
ctrl.editarComentario = async (req, res) => {
    const usuarioId = req.userId
    const id = req.params.id
    const { comentario } = req.body

    try {
        await Comentario.update({comentario}, {
            where: {
                id,
                usuarioId
            }
        });

        return res.json({
            res: 'Comentario actualizado'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            res: 'Ocurrio un error al actualizar el Comentario'
        })
    }
}

//eliminar
ctrl.eliminarComentario = async (req, res) => {
    const usuarioId = req.userId
    const id = req.params.id

    try {
        await Comentario.destroy({
            where: {
                id,
                usuarioId
            }
        })

        return res.json({
            res: 'Comentario eliminado'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            res: 'Ocurrio un error al eliminar el Comentario'
        })
    }
}


//exportamos
module.exports = ctrl;