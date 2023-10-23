const express = require ("express");
const productControllers = require("../Controllers/productControllers");
const productRouter= express.Router()

productRouter.get("/", productControllers.showHome);


productRouter.get('/prueba', productControllers.getAllproduct)
productRouter.get('/prueba/:id', productControllers.getOneproduct)


module.exports=productRouter