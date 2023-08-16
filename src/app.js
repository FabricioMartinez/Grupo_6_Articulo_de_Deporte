const express = require ("express");
const app = express ();
const path = require ("path");

app.use(express.static("public"));

app.listen(3000, ()=>"servidor escuchando en el puerto 3000!");

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/formulario-de-registro", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/formulario-de-registro.html"));
});

app.get("/carrito", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/carrito.html"));
});
app.get("/detalles", (req, res) =>{
    res.sendFile(path.join(__dirname , "./views/detalles.html"));
})
