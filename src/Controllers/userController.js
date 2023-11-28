const db= require('../dataBase/models')
const express = require('express');
const app = express();



const userController = {

//CREACIÓN de usuario
    addUser: function (req, res) {
            res.render("register")
    },


    createUser:function(req,res){
        const newuser= req.body;
        console.log(newuser)
       db.usuarios.create({
            name:req.body.name,
            last_name:req.body.last_name,
            password:req.body. password,
           // confirm_password:req.body.confirm_password,
            email:req.body.email,
          phone:req.body.phone
        }).then(newuser => {
            console.log("usuario creado:", newuser);
            res.redirect('/');
        }).catch(error => {
            console.error("Error al crear el usuario:", error);
        });

        
    },
    
    showPerfilUsuario: (req, res)=>{
        res.render("perfil_usuario");
    },
    
}




module.exports = userController

