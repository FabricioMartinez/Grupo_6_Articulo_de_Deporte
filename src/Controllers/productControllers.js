const fs= require('fs')
const path= require('path')
const db= require('../dataBase/models')
const express = require('express');
const app = express();
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { validationResult } = require('express-validator');

const productControllers= {

    //PAGINA PRINCIPAL
    showHome: (req, res) => {
        db.Products.findAll({ raw: true }).then((result) => {
            // Filtrar productos para cada sección
            const productosDestacados = result.slice(0, 6); // Por ejemplo, toma los primeros 3 productos
            const productosSport = result.slice(6, 10); // Toma los siguientes 3 productos
    
            res.render("index", { productosDestacados, productosSport, toThousand});
        }).catch((error) => {
            console.error(error);
            res.status(500).send("Error interno del servidor");
        });
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
        const color = await db.color.findAll({ raw: true });
        const tallas =  await db.tallas.findAll({ raw: true });

        if (validation.errors.length > 0) {
            res.render('Crear-Producto', {
                errors: validation.mapped(),
                oldValue: req.body,
                categorias: categorias,
                color: color,
                tallas: tallas
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

// productControllers.js
detalle: function(req, res){
    const productId = req.params.id;
    db.Products.findByPk(productId, { raw: true })
        .then((product) => {

            const userRole = req.session.userLogged ? req.session.userLogged.rol : undefined; // Ajusta según la lógica de autenticación de tu aplicación
            console.log(userRole);
            
            if (userRole === 'admin') {
                res.render('detalles', {
                    toThousand,
                    producto: product,
                    userRole: userRole // Pasa el rol del usuario al renderizado
                });
            } else {
                res.render('detalles', { 
                    toThousand,
                    producto: product,
                    userRole: userRole // Pasa el rol del usuario al renderizado
                }); // Redirige a una página específica para usuarios no administradores
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error al obtener los detalles del producto');
        });
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
     // En tu controlador (productControllers.js)
// TRATAR DE IMPLEMENTAR MA;ANA 
// const showCarrito = async (req, res) => {
//     try {
//         // Obtén el ID del producto desde la URL
//         const productId = req.params.productId;

//         // Añade el producto al carrito en la base de datos
//         const carrito = await db.Carrito.create({
//             id_usuario: req.session.userLogged.id, // Ajusta según cómo almacenas el usuario en tu sesión
//             Carrito_Productos: [
//                 {
//                     id_producto: productId,
//                     cantidad: 1, // Puedes ajustar esto según tus necesidades
//                 },
//             ],
//         }, {
//             include: [{ model: db.Carrito_Productos, as: 'Carrito_Productos' }],
//         });

//         // Obtén la lista de productos en el carrito
//         const productosEnCarrito = await db.Carrito_Productos.findAll({
//             where: {
//                 id_carrito: carrito.id_carrito,
//             },
//             include: [{ model: db.Productos, as: 'producto' }],
//         });

//         res.render('carrito', { productosEnCarrito });
//     } catch (error) {
//         console.error('Error al mostrar el carrito de compras:', error);
//         res.status(500).send('Error interno del servidor');
//     }
// };



     busca: (req, res) => {
        const searchTerm = req.query.name;
    
        if (!searchTerm) {
            // Si no se proporciona un término de búsqueda, muestra todos los productos
            db.Products.findAll({ raw: true })
                .then((result) => res.render("buscar", { producto: result }))
                .catch((error) => {
                    console.error(error);
                    res.status(500).send("Error interno del servidor");
                });
        } else {
            // Si se proporciona un término de búsqueda, realiza la búsqueda
            db.Products.findAll({
                where: {
                    name: {
                        [db.Sequelize.Op.like]: `%${searchTerm}%` // Buscar nombres que contengan el término
                    }
                },
                raw: true
            }).then((result) => {
                res.render("buscar", { producto: result, toThousand });
            }).catch((error) => {
                console.error(error);
                res.status(500).send("Error interno del servidor");
            });
        }
    }
}


module.exports= productControllers