//requerir modelo de usuarios
const Usuario = require('../models/usuarios.model');

const validarUsuario = async(req, res, next)=>{
    
    const id = req.headers.id;

    //validaciones de sesion iniciada
    if(!id){
        return res.status(404).json({
            res: 'Falta inciar sesión'
        });
    }

    //validacion de usuario existente
    try {
        const user = await Usuario.findByPk(id);

        if(!user){
            return res.status(404).json({
                res: 'El usuario no existe'
            });
        }

        req.userId = user.id

        return next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            res: 'Ocurrio un error al validar la autenticación'
        })
    }


};


//exportamos 
module.exports = validarUsuario;