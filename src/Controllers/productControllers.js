
const db= require('../dataBase/models')
const express = require('express');
const app = express();

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
            const newData = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                imagen: req.file.filename,
                // ... otras propiedades a actualizar
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
                res.redirect("/"); // Redirige a la página principal u otra página después de la actualización
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
}


module.exports= productControllers