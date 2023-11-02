const express = require('express');
const app = express ();
const mainRouter = require ("./Routes/mainRoutes");

const productRouter = require("./Routes/productRoutes");

const mainRouterUser = require("./Routes/mainRoutesUser");

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
//Para uso de Mysql omo base de datos
app.use(productRouter)


//Para uso de JSON como base de datos
app.use(mainRouterUser);
app.use(mainRouter);



app.listen(3001, ()=> console.log("servidor corriendo en el puerto 3001!"));

