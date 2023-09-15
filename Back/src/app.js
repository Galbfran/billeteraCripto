const express = require('express');// modulo principal express
const cookieParser = require('cookie-parser');//middleware para analizar las cookies en las solicitudes entrantes.
const bodyParser = require('body-parser');//middleware utilizado para analizar los cuerpos de las solicitudes HTTP entrantes.
const morgan = require('morgan');//middleware de registro de solicitudes HTTP. Registra detalles sobre cada solicitud que llega al servidor.
const routes = require('./routes/index.js');// import definicion de las rutas

// importa conf y conexion bas de datos

const app = express();// instancia express
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);


module.exports = app;