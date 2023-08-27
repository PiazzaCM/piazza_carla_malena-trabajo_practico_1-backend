//requerimos la bd
const { sequelize, DataTypes } = require("../db/db");

//requerimos el modelo de comentarios
const Comentario = require('./comentarios.model');

//configuramos el modelo de la tabla
const Producto = sequelize.define('Producto',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
        }
});

//configuramos las cardinalidades
Producto.hasMany(Comentario, {
    foreignKey: 'productoId',
    onDelete: 'CASCADE'
});

Comentario.belongsTo(Producto, {
    foreignKey: 'productoId'
});

//exportamos
module.exports = Producto;