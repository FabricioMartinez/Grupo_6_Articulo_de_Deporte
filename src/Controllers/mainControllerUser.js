const { ExpressValidator } = require("express-validator");
const fs= require("fs")
const path = require ("path");
const productsFilePath = path.join(__dirname, '../data/userDate.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const {validationResult}= require('express-validator');

const mainControllerUser={
    //Crear usuario
    showRegister: (req, res)=>{
        res.render("formulario-de-register");
    },
    user:(req,res)=>{
        const data= req.body;
        console.log(req.body);

        const resultValidation = validationResult(req) ;
        console.log(resultValidation);








        const index= products[products.length -1].id;
         const NuevoUsuario={
             id: index+1,
             fullname: data.fullname,
             lastname: data.lastname,
             email: data.email,
             password: data.password,
             perfil: "defecto.jpg",
         }
         //console.log(NuevoUsuario);
         products.push(NuevoUsuario);
		 fs.writeFileSync(productsFilePath,JSON.stringify (products));
         res.redirect("/product");
    },
}

module.exports= mainControllerUser