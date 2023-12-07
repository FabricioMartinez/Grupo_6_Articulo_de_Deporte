const db= require('../dataBase/models')
const express = require('express');
const app = express();
const bcryptjs= require('bcryptjs');

const userController = {

//REGISTER DE USUARIOS
    addUser: function (req, res) {
            res.render("register")
    },
    createUser:function(req,res){
        const newuser= req.body;
        console.log(newuser)
        const newPassword= bcryptjs.hashSync(req.body.password,10)
       db.usuarios.create({
            name:req.body.name,
            last_name:req.body.last_name,
            password:newPassword,
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
    
//PERFIL DE USUARIO
    showPerfilUsuario: (req, res)=>{     
        db.usuarios.findAll( {raw:true } ) 
        .then((usuario)=> res.render("perfil_usuario", {usuarios:usuario}))
        
    },

//LOGIN DE USUARIOS
    loginPag: async(req, res)=>{
        res.render('login')
    },
    loginUser: async function(req, res) {
        try {
            const user = req.body;
            const userDate = await db.usuarios.findByField('name', user.name);
            console.log("Contraseña introducida:", user.password);
            console.log("Contraseña almacenada:", userDate.password);
            
            const isPasswordValid = bcryptjs.compareSync(user.password, userDate.password);
            console.log("Resultado de la comparación:", isPasswordValid);
            if (user.password === userDate.password){
                console.log('correcto');
                
            }
    
            // if (userDate) {
            //     const isPasswordValid = bcryptjs.compareSync(user.password.trim(), userDate.password);
            //     if (isPasswordValid) {
            //         console.log('Contraseña válida');
            //         res.redirect('/');
            //     } else {
            //         console.log('Contraseña incorrecta');
            //         res.redirect('/login');
            //     }
            // } else {
            //     console.log('Usuario no encontrado');
            //     res.redirect('/login');
            // }
        } catch (error) {
            console.error('Error al acceder a los datos de usuario:', error);
            res.status(500).json({ error: 'Error interno del servidor.' });
        }
    }
    
    // function(req,res){
    //     const user= req.body
    //     db.usuarios.findByField('name', user.name).then((userDate=>{
    //         console.log(userDate);
    //         if (userDate) {
    //             const isPasswordValid = bcryptjs.compareSync(user.password, userDate.password);
    //             if (isPasswordValid) {
    //                 console.log('Contraseña válida');
    //                 res.redirect('/');
    //             } else {
    //                 console.log('Contraseña incorrecta');
    //                 res.redirect('/login'); 
    //             }
    //         } else {
    //             console.log('Usuario no encontrado');
    //             res.redirect('/login'); 
    //         }
    //     })).catch(error=>{
    //         console.error('error al acceder a los datos de usuario')
    //     })
    // }
};



module.exports = userController

// profile: (req, res) => {
        
                
    //             return res.render("userProfile", {
    //               user: req.session.userLogged.
    //               res.cookies("userEmail", req.session.userLogged,{maxAge:(1000*60)*5});
                  
    //             });
    //           },
            
    //           logout: (req, res) => {
    //             res.clearCookie("userEmail");
    //             req.session.destroy(() => {
    //               res.redirect("/");
    //             });
              // }