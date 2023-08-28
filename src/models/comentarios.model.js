//requerimos la bd
const { sequelize, DataTypes } = require("../db/db");

//configuramos el modelo de la tabla
const Comentario = sequelize.define('Comentario',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comentario: {
        type: DataTypes.STRING
    }
});

//exportamos la tabla
module.exports = Comentario;