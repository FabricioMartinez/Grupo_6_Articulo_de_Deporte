const { body } = require("express-validator");
const path = require("path");

//middleware validation
const validationProduct=[
    body('name').notEmpty().withMessage("este campo no debe estar vacio"),
    body('price').notEmpty().withMessage("este campo no debe estar vacio"),
    body('description').notEmpty().withMessage("Este campo debe tener al menos 20 caracteres")
]
module.exports = validationProduct;