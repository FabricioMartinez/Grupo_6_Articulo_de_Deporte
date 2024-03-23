const db= require('../dataBase/models')
const express = require('express');
const app = express();
const bcryptjs= require('bcryptjs');

const userController = {

//REGISTER DE USUARIOS
    addUser: function (req, res) {
            res.render("register")
    },
    createUser: function(req, res) {
        const user = req.body;
        const password = req.body.password;
        const confirmPassword = req.body.password_confirm;
        const image = req.file; // Obtiene el archivo de imagen

// Asegúrate de que la imagen no esté vacía
        if (!image) {
            console.log("La imagen no puede estar vacía.");
            res.redirect('/register');
            return;
        }
        
        // Asegúrate de que las contraseñas no estén vacías
        if (!password || !confirmPassword) {
            console.log("Las contraseñas no pueden estar vacías.");
            res.redirect('/register');
            return;
        }
        
        if (password !== confirmPassword) {
            console.log("Las contraseñas no coinciden.");
            res.redirect('/register');
            return;
        }
        
        const hashedPassword = bcryptjs.hashSync(password, 10);
        
        db.usuarios.create({
            name: user.name,
            last_name: user.last_name,
            password: hashedPassword,
            email: user.email,
            foto: req.file.filename,
            phone: user.phone
        }).then(newUser => {
            console.log("Usuario creado:", newUser);
            res.redirect('/');
        }).catch(error => {
            console.error("Error al crear el usuario:", error);
        });
    },        
    
    
//PERFIL DE USUARIO
    showPerfilUsuario: (req, res)=>{
        return res.render('perfil_usuario', {
            userDate: req.session.userLogged
        })
    },
    cerrarSesion:(req,res)=>{
        req.session.destroy()
        res.redirect('/')
    },
    //editar usuario
    updateUser:(req,res)=>{
        const editUser = req.params.id;
        const newData = {
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            //foto: req.file.filename,
            phone: req.body.phone,

        };
        db.usuarios.update(newData, {
            where: {
                id_usuarios: editUser
            }
        }).then((result) => {
            if (result > 0) {
                console.log("Producto actualizado exitosamente");
            } else {
                console.log("Ningún producto actualizado");
            }
            res.redirect("/"); // Redirige a la página principal u otra página después de la actualización
        }).catch((error) => {
            console.error(error);
            res.status(500).send("Error interno del servidor");
        });
    },

//LOGIN DE USUARIOS
    loginPag: async(req, res)=>{
        res.render('login')
    },
    loginUser: async function (req, res) {
        try {
            const user = req.body;
            const userDate = await db.usuarios.findByField('name', user.name);
            if (userDate) {
                const isPasswordValid= bcryptjs.compareSync(user.password, userDate.password)

                if (isPasswordValid) {
                    req.session.userLogged = userDate
                    res.cookie("userName", req.session.userLogged.name,{ maxAge:(1000*60*5)})
                    if (userDate.rol === 'admin') {
                        res.redirect('/admin');
                    } else {
                        console.log('Contraseña válida');
                        res.redirect('/perfil_usuario');
                    }
                } else {
                    console.log('Contraseña incorrecta');
                    res.redirect('/login');
                }
            } else {
                console.log('Usuario no encontrado');
                res.redirect('/login');
            }
        } catch (error) {
            console.error('Error al acceder a los datos de usuario:', error);
            res.status(500).json({ error: 'Error interno del servidor.' });
        }
    },
    adminPerfil: (req,res)=>{
        res.render('admin',{
            userDate: req.session.userLogged
        })
    }


};



module.exports = userController

