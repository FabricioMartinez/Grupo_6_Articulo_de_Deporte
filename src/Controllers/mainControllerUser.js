
// const fs= require("fs")
// const path = require ("path");
// // const productsFilePath = path.join(__dirname, '../data/userDate.json');
// // const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
// const db= require('../dataBase/models')
// const express = require('express');



// const mainControllerUser={

//     /*
//     //Crear usuario
//     showRegister: (req, res)=>{
//         res.render("register");
//     },
//     user:(req,res)=>{
//         const data= req.body;
//         //console.log(req.body);

//         const resultValidation = validationResult(req) ;
//         //console.log(resultValidation);
//         if(resultValidation.errors.length > 0){
//             res.render('formulario-de-register',{errors:resultValidation.mapped(),oldData:req.body});
//         }else{
//             const index= products[products.length -1].id;
//          const NuevoUsuario={
//              id: index+1,
//              fullname: data.fullname,
//              lastname: data.lastname,
//              email: data.email,
//              password: data.password,
//              perfil: "defecto.jpg",
//          }
//          console.log(NuevoUsuario);

//         }


//          products.push(NuevoUsuario);
// 		 fs.writeFileSync(productsFilePath,JSON.stringify (products));
//          res.redirect("/");
//     }, */
    


//     //CREACIÓN de usuario
//     addUser: function (req, res) {
//             res.render("register")
//     },


//     createUser:function(req,res){
//         const newuser= req.body;
//         console.log(newuser)

        
//     },

    
//     /*
//     //EDICIÓN DE USUARIO

//     editUser: function (req, res) {
//         const productId = req.params.id;
//         db.Products.findByPk(productId, { raw: true })
//       .then((product) => {
//         // Consulta la base de datos para obtener categorías y colores
//         Promise.all([
//             db.categoria.findAll({ raw: true }),
//             db.color.findAll({ raw: true }),
//             db.tallas.findAll({raw: true})


//         ]).then(([categorias, color, tallas]) => {
//             res.render("edit", {product, categorias, color, tallas });
//         }).catch((error) => {
//         })});
//     },

//     updateUser: function(req,res) {
//         const editproduct= req.params.id;
//         db.Products.update({
//         name: req.body.name,
//         price: req.body.price,
//         // description: req.body.description,
//         // id_categoria: req.body.id_categoria,
//         // id_color: req.body.id_color,
//         // id_tallas: req.body.id_tallas,

//     }, 
//     {
//         where:{
//             id: editproduct
//         }

//     }).then((result)=>{console.log("producto actualizado: ", result) 
//         res.render("/")})}
// */

// };

// module.exports= mainControllerUser