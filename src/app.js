const express = require('express');
const session= require('express-session')
const cookies= require('cookie-parser')
const path = require('path');
const methodOverride = require('method-override');
const app = express ();
const userLoggerMiddelware = require('../middleware/userLoggedMiddelware');


// view engine setup
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(session({
    secret: "Secreto",
    resave: false,
    saveUninitialized:false
}))
app.use(cookies())
app.use(userLoggerMiddelware)

// URL encode - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

// Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el uso de los métodos put o delete
app.use(methodOverride('_method'));

// Ejecuto el llamado a mis rutas
//const mainRouter = require ("./Routes/mainRoutes");
const productRouter = require("./Routes/productRoutes");

//const mainRouterUser = require("./Routes/mainRoutesUser");
const userRouter = require("./Routes/userRouter");



// Para uso de Mysql como base de datos
app.use(productRouter);
app.use(userRouter)
app.use(express.json());


// Para uso de JSON como base de datos
//app.use(mainRouterUser);
//app.use(mainRouter);




// Iniciar el servidor
app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001!"));
