const { validationResult } = require('express-validator');

//promesa para el error
const validateResult = (req, res, next) =>{ 

    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(403);
        res.json({
            errors: error.array()
        });
    }

}


//exportamos
module.exports = validateResult;