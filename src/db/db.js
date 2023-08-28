
const { Sequelize, DataTypes } = require('sequelize');

//configuracion de base de datos
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect:  process.env.DB_DIALECT,
    }
  )


//se exporta la bd
module.exports = {
    sequelize,
    DataTypes
}

