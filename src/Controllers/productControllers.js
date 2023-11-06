
const db= require('../dataBase/models')
const express = require('express');
const app = express();

const productControllers= {
    //creacion 1
    getcreat: function (req, res) {
        res.render("Crear-producto")
    },
    crear: function (req, res){
        const newproducto= req.body
        console.log(newproducto)
    },
    
    showHome:(req, res)=>{
        db.Products.findAll({raw: true}).then((result) =>
            res.render("index",{producto: result}));
    },
    add: function (req, res) {
        // Consulta la base de datos para obtener categorías y colores
        Promise.all([
            db.categoria.findAll({ raw: true }),
            db.color.findAll({ raw: true }),
            db.tallas.findAll({raw:true})
        ]).then(([categorias, color, tallas]) => {
            res.render("Crear-Producto", { categorias, color, tallas });
        }).catch((error) => {
        });
    },
    create:function(req,res){
        const newproduct= req.body;
        console.log(newproduct);
        db.Products.create({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            id_categoria:req.body.id_categoria,
            id_color: req.body.id_color,
            id_tallas: req.body.id_tallas
        }).then(newProduct => {
            console.log("Producto creado:", newProduct);
            res.redirect('/');
        }).catch(error => {
            console.error("Error al crear el producto:", error);
        });

    },
    //EDICIÓN DE PRODUCTO
    edit: db.sportify.update({
        title: "Zapatilla Olimpikus",
        talles: 35,

    }, 
    {
        where:{
            id:1
        }

    }),
    listado:function(req,res){
        db.Products.findAll({raw: true}).then((result) =>
        res.render("product",{producto: result}));
    },
    // db.Products.create({
    //     name: req.body.name,
    //     price: req.body.price, // Precio del producto
    //     description: req.body.description,
    //     id_categoria: 1, // ID de la categoría
    //     id_color: 2 // ID del color
    // }).then(newProduct => {
    //     console.log("Producto creado:", newProduct);
    // }).catch(error => {
    //     console.error("Error al crear el producto:", error);
    // });
    getAllproduct:(req, res)=>{
        db.Products.findAll({
            include:['categoria','color','tallas'],
        }).then(productos=>{
            res.json(productos)
            res.render("prueba",{ productos})
        })
        // db.Products.findAll({raw: true}).then((result) =>
        //     res.render("prueba",{producto: result}));
    },
    getOneproduct: (req,res) =>{
        const id= req.params.id
        db.Products.findByPk(id,{raw: true}).then(result => {res.render('prueba2', {producto: result});});
    },

}

module.exports= productControllers