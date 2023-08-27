//requerimos la bd
const { sequelize, DataTypes } = require("../db/db");

//requerimos el modelo de productos
const Producto = require('./productos.model');

//configuramos el modelo de la tabla
const Usuario = sequelize.define('Usuario',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
        }
});

//configuramos las cardinalidades
Usuario.hasMany(Producto, {
    foreignKey: 'usuarioId',
    onDelete: 'CASCADE'
});

Producto.belongsTo(Usuario, {
    foreignKey: 'usuarioId'
})

//exportamos
module.exports = Usuario;