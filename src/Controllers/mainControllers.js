const fs= require("fs")
const path = require ("path");
const productsFilePath = path.join(__dirname, '../data/productDatos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController={
    showHome:(req, res)=>{
        res.render("index",{products});
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

    //Crear producto:
    showCrear: (req, res)=>{
    res.render("Crear-Producto")
    },
    article:(req, res)=>{
        const data= req.body;
        const index= products[products.length -1].id;
        const NuevoProducto ={
            id: index +1,
            name: data.name,
            price: data.price,
            discount: data.discount,
            category: data.category,
            description: data.description,
            image: "Fachada-de-casa-contemporanea-de-dos-niveles1.jpg",
        };
        products.push(NuevoProducto);
		fs.writeFileSync(productsFilePath,JSON.stringify (products));
        res.redirect("/");
    },


    showEdit: (req,res)=>{
        res.render('edit')
    },


    showSeleccion: (req, res)=>{
        res.render("Seleccion")
    }


};

module.exports = mainController;

