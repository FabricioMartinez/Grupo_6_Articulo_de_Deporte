const express = require ("express");
const app = express ();
const mainRouter = require ("./Routes/mainRoutes");
const mainController = require("./Controllers/mainControllers");
const mainRouterUser = require("./Routes/mainRoutesUser");


app.use(express.json());


app.set("view engine", "ejs");
app.set("views", "./src/views");


app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());//lineas para capturar la informacion y convertirla en json


app.use(mainRouterUser); //ruta a mainRouterUser
app.use('/', mainRouter); //ruta a mainRouter

// Middleware para verificar si el usuario está logueado
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login'); // Redirigir al login si no está logueado
  }
  
  // Rutas accesibles solo sin login
  app.use('/', (req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect('/perfil'); // Redirigir al perfil si está logueado
    } else {
      next(); // Continuar con las rutas si no está logueado
    }
  });




app.listen(3001, ()=>"servidor escuchando en el puerto 3001!");

