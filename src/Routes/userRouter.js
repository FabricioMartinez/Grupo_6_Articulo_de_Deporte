const express = require ("express");
const userRouter= express.Router()
const path = require("path");
const userController = require("../Controllers/userController");


userRouter.get("/register", userController.addUser)
userRouter.post("/register/crear", userController.createUser)



userRouter.get("/perfil_usuario", userController.showPerfilUsuario);


module.exports=userRouter