const express = require ("express");
const {body}= require('express-validator')
const mainRouterUser = express.Router();

const path = require("path");
const mainControllerUser = require("../Controllers/mainControllerUser");
const validationRegister = require("../../middleware/validationRegister");



mainRouterUser.get("/register", mainControllerUser.showRegister );
mainRouterUser.post("/register",validationRegister, mainControllerUser.user)


module.exports= mainRouterUser
