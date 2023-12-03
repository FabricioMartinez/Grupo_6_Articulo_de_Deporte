const express = require ("express");
const userRouter= express.Router()
const path = require("path");
const userController = require("../Controllers/userController");


userRouter.get("/register", userController.addUser)
userRouter.post("/register/crear", userController.createUser)



userRouter.get("/perfil_usuario", userController.showPerfilUsuario);
userRouter.get('/login', userController.loginPag)
userRouter.post('/login',userController.loginUser)

module.exports=userRouter