//requerimos el modelo
const Usuario = require("../models/usuarios.model");
const ctrl = {};


//crear
ctrl.crearUsuario = async(req, res)=>{
    const {usuario, password} = req.body;

    try {
        await Usuario.create({usuario, password});

        return res.json({
            res:'Usuario creado'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            res: 'Ocurrio un error al crear el usuario'
        })
    }
};

//logear
ctrl.login = async(req, res)=>{

    const {usuario, password} = req.body;

//busca coincidencia en la contrasena y user
    try {
        const user = await Usuario.findOne({
            where: {usuario}
        });

        if(user.password === password){
            return res.json({
                id: user.id,
                usuario: user.usuario,
                res: 'Sesión inciada'
            });
        } else {
            return res.json({
                res: 'El usuario o la contraseña son incorrectos'
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            res: 'Ocurrio un error al iniciar sesión'
        })
    }

};

//exporta
module.exports = ctrl;