//requerimos libreria
const { check } = require('express-validator');
//requerimos helpers
const validateResult = require('../helpers/validateResult');


//validaciones para el usuario y contrasena
const usuarioValida = [
    check('usuario')
    .notEmpty()
    .isString()
    .isLength({min: 4, max: 10}),

    check('password')
    .notEmpty()
    .isString()
    .isLength({min: 4, max: 16}),

    (req, res, next)=>{
        validateResult(req, res, next);
    }
]

//importamos
module.exports = usuarioValida;