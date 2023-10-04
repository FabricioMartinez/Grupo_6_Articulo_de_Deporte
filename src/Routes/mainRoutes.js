const express = require ("express");
const mainController = require("../Controllers/mainControllers");
const mainRouter = express.Router();
const multer= require("multer");
const path = require("path");
const {body} = require("express-validator") 

//configuracion de express validator
const validations=[
    body("name").notEmpty().withMessage("Se requiere completar el campo de nombre"),
    body("price").notEmpty().withMessage("Se requiere completar el campo de precio").bail().isNumeric().withMessage("El campo precio debe ser un numero."),
]



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



mainRouter.get("/carrito", mainController.showCart );
mainRouter.get("/detalles/:id", mainController.showDetails);
mainRouter.get("/login", mainController.showLogin);
mainRouter.get('/edit/:id', mainController.showEdit);



// Ruta para crear producto
mainRouter.get("/Crear-Producto", mainController.showCrear);
//validar campos de este formulario, pasar validaciones
mainRouter.post('/', uploadFile.single("producImage"),validations, mainController.article); 

mainRouter.get("/product", mainController.showproduct)

mainRouter.get("/Seleccion", mainController.showSeleccion)
mainRouter.get("/admin-confirm", mainController.showConfirmation);



mainRouter.get("/detalles/edit/:id", mainController.edit);
mainRouter.post("/detalles/edit/:id", mainController.update);
mainRouter.post("/detalles/delete/:id", mainController.destroy);


module.exports = mainRouter;
