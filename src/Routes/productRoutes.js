const express = require ("express");
const productControllers = require("../Controllers/productControllers");
const productRouter= express.Router()
const path = require("path");
const multer= require("multer");
const {body} = require("express-validator"); 

const validationLogin = require("../../middleware/validationProductCreate");
const validationProduct = require("../../middleware/validationProductCreate");

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
productRouter.post('/Crear-Producto', uploadFile.single("imagen"), validationProduct, productControllers.create);


//Listado de productos
productRouter.get('/product',productControllers.listado)

//Detalle de producto
productRouter.get("/detalles/:id", productControllers.detalle)

//Edición de productos
productRouter.get('/edit/:id', productControllers.edit)
productRouter.put("/edit/:id",uploadFile.single("imagen"), productControllers.update);

//Eliminar producto
productRouter.delete("/eliminar/:id", productControllers.eliminar)


productRouter.get("/Seleccion", productControllers.showSeleccion)
productRouter.get("/admin-confirm", productControllers.showConfirmation);

module.exports=productRouter