const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();


const app = express();
const port = process.env.PORT || 3000;




app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));









app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));
