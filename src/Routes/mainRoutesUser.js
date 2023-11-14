const express = require ("express");
const {body}= require('express-validator')
const mainRouterUser = express.Router();

const path = require("path");
const mainControllerUser = require("../Controllers/mainControllerUser");
const validationRegister = require("../../middleware/validationRegister");



mainRouterUser.get("/register", mainControllerUser.showRegister);
mainRouterUser.post("/register",validationRegister, mainControllerUser.user)


//Creacion de producto
mainRoutesUser.get('/Crear-Usuario', mainControllerUser.addUser)
mainRouterUser.post("/Crear-Usuario/crear", mainControllerUser.createUser)

//Router o Routes??

//Edición de productos
mainRoutesUser.get('/edit/:id', mainControllerUser.editUser)
mainRouterUser.put("/edit/:id", mainControllerUser.updateUser)


module.exports= mainRouterUser
