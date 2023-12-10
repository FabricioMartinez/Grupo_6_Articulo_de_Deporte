const express = require("express");
const userRouter = express.Router();
const path = require("path");
const userController = require("../Controllers/userController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/Home/main");
  },
  filename: (req, file, cb) => {
    const nameFile = `products_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, nameFile);
  },
});

const uploadFile = multer({ storage });

userRouter.get("/register", userController.addUser);
userRouter.post("/register/crear", uploadFile.single("foto"), userController.createUser);

userRouter.get("/perfil_usuario", userController.showPerfilUsuario);
userRouter.post('/perfil_usuario/:id', uploadFile.single("foto"),userController.updateUser)

userRouter.get('/login', userController.loginPag);
userRouter.post('/login', userController.loginUser);
userRouter.get('/cerrarSesion', userController.cerrarSesion);

module.exports = userRouter;


