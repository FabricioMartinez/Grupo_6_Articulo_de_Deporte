const express = require ("express");

const mainRouterUser = express.Router();

const path = require("path");
const mainControllerUser = require("../Controllers/mainControllerUser");



mainRouterUser.get("/formulario-de-register", mainControllerUser.showRegister );
mainRouterUser.post("/register", mainControllerUser.user)


module.exports= mainRouterUser
