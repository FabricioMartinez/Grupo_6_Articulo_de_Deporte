const express = require ("express");
const productControllers = require("../Controllers/productControllers");
const productRouter= express.Router()
const path = require("path");
const multer= require("multer");

const storage= multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./public/images/Home/main")
    },
    filename: (req, file,cb)=>{
        const nameFile= `products_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, nameFile );
    },
});

const uploadFile = multer({storage});

// Inicio de pagina
productRouter.get("/", productControllers.showHome);

//Creacion de producto
productRouter.get('/Crear-Producto', productControllers.add)
productRouter.post("/Crear-Producto/crear", productControllers.create)

//Listado de productos
productRouter.get('/product',productControllers.listado)

productRouter.get('/prueba', productControllers.getAllproduct)
productRouter.get('/prueba/:id', productControllers.getOneproduct)
module.exports=productRouter