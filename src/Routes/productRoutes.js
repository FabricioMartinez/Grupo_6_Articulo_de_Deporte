const express = require ("express");
const productControllers = require("../Controllers/productControllers");
const productRouter= express.Router()

productRouter.get("/", productControllers.showHome);


//productRouter.get('/prueba', productControllers.getAllproduct)
//productRouter.get('/prueba/:id', productControllers.getOneproduct)

//cracion hoy
productRouter.get('/crear/enviar', productControllers.getcreat);
productRouter.post("/crear/creacion", productControllers.crear );

module.exports=productRouter