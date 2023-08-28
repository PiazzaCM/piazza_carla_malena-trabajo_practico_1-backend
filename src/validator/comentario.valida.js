//requerimos libreria
const { check } = require('express-validator');
//requerimos helpers
const validateResult = require('../helpers/validateResult');


//validaciones para los comentarios
const comentarioValida = [
    check('comentario')
    .notEmpty()
    .isString()
    .isLength({min: 8, max: 30}),

    (req, res, next)=>{
        validateResult(req, res, next);
    }
]

///exportamos
module.exports = comentarioValida;