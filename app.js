//Librerias
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//config de variables de entorno
require("dotenv").config();

const { sequelize } = require('./src/db/db');

//conexion a la base de datos
sequelize.sync();
sequelize.authenticate().then(console.log('BD conected')).catch(err => console.log(`Se produjo un error: ${err}`));



//config de variables de entorno
require("dotenv").config();


//inicializar express y asignacion de puerto
const app = express();
const port = process.env.PORT || 3000;



//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


//requerimos las rutas
app.use(require('./src/routes/usuarios.routes'));
app.use(require('./src/routes/productos.routes'))
app.use(require('./src/routes/comentarios.routes'))



app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));
