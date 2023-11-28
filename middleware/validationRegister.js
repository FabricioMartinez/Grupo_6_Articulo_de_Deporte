// const { body } = require("express-validator");
// const path = require("path");


// //middleware validation
// const validationRegister =[
//     body('fullname').notEmpty().withMessage("este campo no debe estar vacio"),
//     body('lastname').notEmpty().withMessage("el campo no debe estar vacio"),
//     body('email')
//     .notEmpty()
//     .withMessage("el campo no debe estar vacio")
//     .bail()
//     .isEmail().withMessage("debe ser un email valido"),
//     body('password').notEmpty().withMessage("este campo no debe estar vacio"),
//     body('confirm-password').notEmpty().withMessage("este campo no debe estar vacio"),
//     body('phone').notEmpty().withMessage("este campo no debe estar vacio")
// ]

// module.exports = validationRegister;