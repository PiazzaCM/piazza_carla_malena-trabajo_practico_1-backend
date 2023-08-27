//Librerias
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");


//config de variables de entorno
require("dotenv").config();

//conexion a la base de datos
sequelize.sync();
sequelize.authenticate().then(console.log('BD conected')).catch(err => console.log(`Se produjo un error: ${err}`));

//inicializar express y asignacion de puerto
const app = express();
const port = process.env.PORT || 3000;



//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

//requerimos las rutas
app.use(require('./src/routes/usuarios.routes'));
app.use(require('./src/routes/productos.routes'))




app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));
