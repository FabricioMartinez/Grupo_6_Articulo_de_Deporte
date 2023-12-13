const { body } = require("express-validator");
const path = require("path");

//middleware validation
const validationProduct=[
    body('name').notEmpty().withMessage("Este campo no debe estar vacio"),
    body("price").notEmpty().withMessage("Este campo no debe estar vacio").bail().isNumeric().withMessage("El campo precio debe ser un numero."),
    body('description').notEmpty().withMessage("Este campo debe tener al menos 20 caracteres")
]
module.exports = validationProduct;