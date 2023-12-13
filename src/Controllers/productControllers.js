const fs= require('fs')
const path= require('path')
const db= require('../dataBase/models')
const express = require('express');
const app = express();
const { validationResult } = require('express-validator');

const productControllers= {

    //PAGINA PRINCIPAL

    showHome:(req, res)=>{
        db.Products.findAll({raw: true}).then((result) =>
            res.render("index",{producto: result}));
    },

    //CREACION DE PRODUCTO

    add: function (req, res) {
        // Consulta la base de datos para obtener categorías y colores
        Promise.all([
            db.categoria.findAll({ raw: true }),
            db.color.findAll({ raw: true }),
            db.tallas.findAll({ raw: true })
        ]).then(([categorias, color, tallas]) => {
            console.log("Categorias:", categorias,color,tallas);
            res.render("Crear-Producto", { categorias, color, tallas });
        }).catch((error) => {
            console.error(error);
        });
        
    },
    create: async function(req,res,next){
        const newproduct= req.body;
        const validation = validationResult(req);
        const categorias = await db.categoria.findAll({ raw: true })
        const color =  db.color.findAll({ raw: true });
        const tallas =  db.tallas.findAll({ raw: true });

        if (validation.errors.length > 0) {
            res.render('Crear-Producto', {
                errors: validation.mapped(),
                oldValue: req.body,
                categorias: categorias, color, tallas 
            });
        } else {
        db.Products.create({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            imagen: req.file.filename,
            id_categoria:req.body.id_categoria,
            id_color: req.body.id_color,
            id_tallas: req.body.id_tallas
        }).then(newProduct => {
            console.log("Producto creado:", newProduct);
            res.redirect('/');
        }).catch(error => {
            console.error("Error al crear el producto:", error);
        });
        }
},
    
    //EDICIÓN DE PRODUCTO

    edit: function (req, res) {
        const productId = req.params.id;
        db.Products.findByPk(productId, { raw: true })
          .then((producto) => {
            // Consulta la base de datos para obtener categorías y colores
            Promise.all([
                db.categoria.findAll({ raw: true }),
                db.color.findAll({ raw: true }),
                db.tallas.findAll({ raw: true })
            ]).then(([categorias, color, tallas]) => {
                console.log("Producto:", producto)
                res.render("edit", { producto, categorias, color, tallas });
            }).catch((error) => {
                console.error(error);
            });
        })},
    update: function (req, res) {
            const editproduct = req.params.id;
            const newImageData = req.file ? { imagen: req.file.filename } : {};
        
            const newData = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                ...newImageData, 
            };
        
            db.Products.update(newData, {
                where: {
                    id_productos: editproduct
                }
            }).then((result) => {
                if (result > 0) {
                    console.log("Producto actualizado exitosamente");
                } else {
                    console.log("Ningún producto actualizado");
                }
                res.redirect("/"); 
            }).catch((error) => {
                console.error(error);
                res.status(500).send("Error interno del servidor");
            });
    },
        

    //LISTADO DE PRODUCTOS

    listado:function(req,res){
        db.Products.findAll({raw: true}).then((result) =>
        res.render("product",{producto: result}));
    },

    //DETALLES DE PRODUCTOS

    detalle: function(req, res){
        const productId = req.params.id;
        db.Products.findByPk(productId, { raw: true })
        .then((product)=> {res.render('detalles', { producto: product })})
    },

    //ELIMINACION DE PRODUCTO

    eliminar: function(req, res){ 
        const productId = req.params.id;
        db.Products.destroy({where:{id_productos:productId}}).then((result)=> {console.log("producto eliminado"); res.redirect('/');})
    },

     showConfirmation: (req,res)=>{
        if (req.session.userLogged) {
         res.render("admin-confirm", {
            userDate: req.session.userLogged
        });
        } else {
            res.redirect('/login');
        }
    },

     showSeleccion: (req, res)=>{
         res.render("Seleccion")
     },

     //CARRITO DE COMPRAS
     showCarrito: (req, res)=>{
        res.render("carrito")
     },

     busca: (req,res)=>{
        db.Products.findAll({raw: true}).then((result) =>
        res.render("buscar",{producto: result}));
     }
}


module.exports= productControllers