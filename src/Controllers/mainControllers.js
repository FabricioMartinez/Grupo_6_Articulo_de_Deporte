const path = require ("path");

const products = require("../data/data")

const mainController={
    showHome:(req, res)=>{
        res.render("index", );
    },
    showRegister: (req, res)=>{
    res.render("formulario-de-register");
    },
    showCart: (req, res)=>{
    res.render("carrito",  {products ,título: "Productos para comprar"});
    },
    showDetails: (req, res) =>{
    res.render("detalles");
    },
    showLogin: (req,res)=>{
    res.render("login");
    },
    showConfirmation: (req,res)=>{
        res.render("admin-confirm");
    },
    showCrearProducto: (req, res)=>{
    res.render("Crear-Producto")
    }
};

module.exports = mainController;

