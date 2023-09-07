const express = require ("express");
const mainController = require("../Controllers/mainControllers");

const mainRouter = express.Router();

mainRouter.get("/", mainController.showHome);

mainRouter.get("/formulario-de-register", mainController.showRegister );
mainRouter.get("/carrito", mainController.showCart );
mainRouter.get("/detalles", mainController.showDetails);
mainRouter.get("/login", mainController.showLogin);
mainRouter.get("/admin-confirm", mainController.showConfirmation);
mainRouter.get("/edit", mainController.showEdit);


mainRouter.get("/Crear-Producto", mainController.showCrearProducto);
module.exports = mainRouter;
