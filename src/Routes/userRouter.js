const express = require("express");
const userRouter = express.Router();
const userController = require("../Controllers/userController");
const { isAdmin } = require("../../middleware/adminAuth");
const uploadFile = require("../../middleware/multerUser");

//REGISTRO DE USUARIO
userRouter.get("/register", userController.addUser);
userRouter.post("/register/crear", uploadFile, userController.createUser);

//PERFIL DE USUARIO
userRouter.get("/perfil_usuario", userController.showPerfilUsuario);
userRouter.post('/perfil_usuario/:id', uploadFile,userController.updateUser)


//ACCESO DE USUARIO
userRouter.get('/login', userController.loginPag);
userRouter.post('/login', userController.loginUser);
userRouter.get('/cerrarSesion', userController.cerrarSesion);

//PAGINA PARA ADMINISTRADOR
userRouter.get('/admin', isAdmin, userController.adminPerfil)



module.exports = userRouter;


