//requerimos libreria
const { check } = require('express-validator');
//requerimos helpers
const validateResult = require('../helpers/validateResult');


//validaciones para el producto y descripcion
const productoValida = [
    check('nombre')
    .notEmpty()
    .isString()
    .isLength({min: 4, max: 10}),

    check('descripcion')
    .notEmpty()
    .isString()
    .isLength({min: 8, max: 30}),

    (req, res, next)=>{
        validateResult(req, res, next);
    }
]

//exportamos
module.exports = productoValida;