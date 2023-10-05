const express = require ("express");
const app = express ();
const mainRouter = require ("./Routes/mainRoutes");
const mainController = require("./Controllers/mainControllers");

app.use(express.json());


app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));

app.use(mainRouter);
// Middleware para rutas accesibles solo sin login
const guestMiddleware = (req, res, next) => {
    if (req.session.userLogged) {
      return res.redirect("/user/profile"); // Redirige al perfil si el usuario está logueado
    }
    next();
  };
  
  // Middleware para rutas accesibles solo con login
  const authMiddleware = (req, res, next) => {
    if (!req.session.userLogged) {
      return res.redirect("/user/login"); // Redirige al login si el usuario no está logueado
    }
    next();
  };
  app.get("/user/dashboard", authMiddleware, (req, res) => {
    res.send("Esta ruta es accesible solo para usuarios autenticados.");
  });
  app.get("/guest", guestMiddleware, (req, res) => {
    res.send("Esta ruta es accesible solo para usuarios no autenticados.");
  });  

app.listen(3001, ()=>"servidor escuchando en el puerto 3000!");

