const express = require ("express");
const app = express ();
const mainRouter = require ("./Routes/mainRoutes");
const mainController = require("./Controllers/mainControllers");
const mainRouterUser = require("./Routes/mainRoutesUser");


app.use(express.json());


app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));



app.use(mainRouterUser);
app.use('/', mainRouter);






app.listen(3001, ()=>"servidor escuchando en el puerto 3001!");

