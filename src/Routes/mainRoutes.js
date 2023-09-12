const express = require ("express");
const mainController = require("../Controllers/mainControllers");
const mainRouter = express.Router();
const multer= require("multer");
const path = require("path")

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

mainRouter.get("/", mainController.showHome);

mainRouter.get("/formulario-de-register", mainController.showRegister );
mainRouter.get("/carrito", mainController.showCart );
mainRouter.get("/detalles/:id", mainController.showDetails);
mainRouter.get("/login", mainController.showLogin);


mainRouter.get("/Crear-Producto", mainController.showCrear);
mainRouter.post('/', uploadFile.single("producImage"), mainController.article); 

mainRouter.get("/product", mainController.showproduct)

mainRouter.get("/Seleccion", mainController.showSeleccion)
mainRouter.get("/admin-confirm", mainController.showConfirmation);
mainRouter.get("/edit", mainController.showEdit);

module.exports = mainRouter;
